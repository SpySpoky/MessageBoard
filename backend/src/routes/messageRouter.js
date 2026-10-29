import { Router } from "express";
import db from "../../config/db.js";

const router = Router();

router
    .get("/", async(req, res) => {
        const [messages] = await db.execute(
        "SELECT * FROM messages ORDER BY created_at DESC, id DESC"
    );

    res.status(200).json(messages);
    })
    .post("/", async(req, res) => {
        const { name, text } = req.body;

        if(typeof name !== "string" || !name.trim() || typeof text !== "string" || !text.trim()) {
            return res.status(400).json({
                message: "Name and text are required"
            });
        }

        const [result] = await db.execute(
            "INSERT INTO messages (name, text) VALUES (?, ?)", [name.trim(), text.trim()]
        )

        res.status(201).json({
            message: "Message created successfully",
            id: result.insertId
        });
    })
    .put("/:id", async(req, res) => {
        const id =  Number(req.params.id);

        const { name, text } = req.body;

        if (!Number.isSafeInteger(id) || id <= 0) {
            return res.status(400).json({
                message: "Invalid message ID"
            });
        }

        if (
            typeof name !== "string" || !name.trim() ||
            typeof text !== "string" || !text.trim()
        ) {
            return res.status(400).json({
                message: "Name and text are required"
            });
        }

        const [result] = await db.execute(
            "UPDATE messages SET name = ?, text = ? WHERE id = ?", [name.trim(), text.trim(), id]
        );

        if (result.affectedRows === 0) {
            return res.status(404).json({
                message: "Message not found"
            });
        }

        res.status(200).json({
            message: "Message updated successfully"
        });        
    })
    .patch("/:id", async(req, res) => {
        const id = Number(req.params.id);
        const { name, text } = req.body;
        
        if (!Number.isSafeInteger(id) || id <= 0) {
            return res.status(400).json({
                message: "Invalid message ID"
            });
        }

        if (
            (name === undefined && text === undefined) ||
            (name !== undefined && (typeof name !== "string" || !name.trim())) ||
            (text !== undefined && (typeof text !== "string" || !text.trim()))
        ) {
            return res.status(400).json({
                message: "Invalid update data"
            });
        }

        const [result] = await db.execute(
            `UPDATE messages
            SET name = COALESCE(?, name),
                text = COALESCE(?, text)
            WHERE id = ?`,
            [name === undefined ? null : name.trim(),
            text === undefined ? null : text.trim(),
            id]
        );

        if (result.affectedRows === 0) {
            return res.status(404).json({
                message: "Message not found"
            });
        }

        res.status(200).json({
            message: "Message partially updated successfully"
        });
        
    })
    .delete("/:id", async(req, res) => {
        const id = Number(req.params.id);

        if(!Number.isInteger(id) || id <= 0) {
            return res.status(400).json({
                message: "Invalid message ID"
            });
        }

        const [result] = await db.execute(
            "DELETE from messages where id = ?", [id]
        );

        if(result.affectedRows === 0) {
            return res.status(404).json({
                message: "Message not found"
            });
        }

        res.status(200).json({
            message: "Message deleted successfully",
            id: result.insertId
        });
    });

    export default router;