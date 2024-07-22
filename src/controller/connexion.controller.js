import { ConnexionService } from "../service/connexion.service.js";
export const ConnexionController = {
    getConnexion: async (req, res) => {
        const params = req.body;
        try {
            const result = await ConnexionService.getConnexion(params);
            res.status(200).json(result);
        } catch (error) {
            res.status(500).json({ error: error});
        }
    }
}