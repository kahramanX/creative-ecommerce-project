import { Router, Request, Response } from "express";
const router = Router();

// User Routes
router.get("/:userID/create", (req: Request, res: Response) => {
  res.json({
    data: req.params,
  });
});
router.get("/:userID/get", () => {});
router.delete("/:userID/delete", () => {});
router.patch("/:userID/update", () => {});

export default router;
