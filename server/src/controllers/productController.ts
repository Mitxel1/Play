import {Request, Response} from 'express';
import pool from "../database";

class ProductController{

    public  async list (req: Request, res: Response) {
        const product = await pool.query('SELECT * FROM product');
        res.json(product);
    }

    public  async getOne(req: Request, res:Response):Promise<any>{
        const {id} = req.params;
       const product = await pool.query('SELECT * FROM product WHERE id = ?', [id]);
       if(product.length > 0){
        return res.json(product[0]);
       }
       res.status(404).json({text: "EL producto no existe"});
    }

    public async create (req: Request, res: Response): Promise<void>{
        await pool.query('INSERT INTO product set ? ', [req.body])
        res.json({message: 'Guardando producto'});
    }

    public async update(req: Request, res: Response):Promise<void>{
        const {id} = req.params;
        await pool.query('UPDATE product set ? WHERE id = ?', [req.body, id]);
        res.json({message: 'El prodcuto fue Actualizado'});
    }
    
    public async delete(req: Request, res: Response): Promise<void>{
        const {id} = req.params;
        await pool.query('DELETE FROM product WHERE id = ?', [id]);
        res.json('El producto fue eliminado');
    }
}

export const productController = new ProductController();
export default productController;