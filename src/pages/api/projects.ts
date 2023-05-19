import { NextApiRequest, NextApiResponse } from 'next';
import { pool } from '../../config/db';

const getProjects = async (req: NextApiRequest, res: NextApiResponse) => {
  switch (req.method) {
    case 'GET':
      const [resultGet] = await pool.query('SELECT * FROM projects');
      console.log(resultGet);
      res.json({ result: resultGet });
      break;

    case 'POST':
      const { name, description, page } = req.body;
      try {
        const [resultPost] = await pool.query('INSERT INTO projects SET ?', {
          name,
          description,
          page,
        });
        res
          .status(200)
          // @ts-ignore
          .json({ name, description, page, id: resultPost.insertId });
      } catch (error: any) {
        res.status(500).json({ error: error.message });
      }
      break;

    default:
      res
        .status(504)
        .json({ message: 'Wrong method utilized, try to use GET or POST' });
      break;
  }

  return;
};

export default getProjects;
