import express from 'express';
import route from '../route';
import { postJoin, getJoin, home, login, logout, search} from '../controller/mainController';

const router = express.Router();

router.get(route.join, getJoin);
router.post(route.join, postJoin);

router.get(route.home, home);
router.get(route.login, login);
router.get(route.logout, logout);
router.get(route.search, search);   

export default router;