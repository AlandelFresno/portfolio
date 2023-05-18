import { NextApiRequest, NextApiResponse } from 'next';
import { pool } from "../../config/db";


const getProjects = async(req: NextApiRequest, res: NextApiResponse) => {

  const result = await pool.query('SELECT NOW()')

  res.json({ hello: 'world', result: result[0] });
};

export default getProjects;
