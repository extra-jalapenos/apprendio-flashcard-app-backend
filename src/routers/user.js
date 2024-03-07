import { Router } from "express"
import { getUsers, getUser, getSelf } from "../controllers/user.js"
import { getOwnCategories, getOwnCategoriesWithCards } from "../controllers/category.js"
import { getOwnCards, getCardsFromUser } from "../controllers/card.js"
import { getOwnStatistics,
	changeOwnStatisticEntry,
	getOwnStatisticsForDate,
	getOwnStatisticsForDateRange
} from "../controllers/statistic.js"
import { checkToken, checkAdminRole } from "../middleware/auth.js"

const router = Router()

router.get("/", checkToken, checkAdminRole, getUsers)
router.get("/me", checkToken, getSelf)
router.get("/:id", checkToken, checkAdminRole, getUser)
router.get("/me/cards", checkToken, getOwnCards)
router.get("/me/categories", checkToken, getOwnCategories)
router.get("/me/categories/details", checkToken, getOwnCategoriesWithCards)
router.get("/:id/cards", checkToken, checkAdminRole, getCardsFromUser)
router.get("/me/statistics", checkToken, getOwnStatistics)
router.patch("/me/statistics/:id", checkToken, changeOwnStatisticEntry)
router.get("/me/statistics/:date", checkToken, getOwnStatisticsForDate)
router.get("/me/statistics/:startDate/:endDate", checkToken, getOwnStatisticsForDateRange)

export default router
