import Challenge from "../models/ChallengeModel";
import Reward from "../models/RewardModel";
import User from "../models/UserModel";
import UserChallenge from "models/UserChallengeModel";
import UserReward from "models/UserRewardModel";
import { createChallenge } from "./crud/ChallengeCRUD";
import { createReward } from "./crud/RewardCRUD";
import { createUser } from "./crud/UserCRUD";
import { createUserChallenge } from "./crud/UserChallengesCRUD";
import { createUserReward } from "./crud/UserRewardsCRUD";


export function populateDb() {
    const challenges = [
        new Challenge('challenge_id_1', 'Reduce Water Usage', 'Reduce water consumption in your daily activities.', 50, 'Environmental', 'user_id_1', '2023-10-01'),
        new Challenge('challenge_id_2', 'Carpool to Work', 'Share rides with colleagues to reduce emissions.', 60, 'Transportation', 'user_id_2', '2023-10-02'),
        new Challenge('challenge_id_3', 'Plant Trees', 'Contribute to reforestation efforts.', 70, 'Environmental', 'user_id_3', '2023-10-03'),
        new Challenge('challenge_id_4', 'Meatless Mondays', 'Skip meat every Monday for a lower carbon footprint.', 40, 'Diet', 'user_id_4', '2023-10-04'),
        new Challenge('challenge_id_5', 'Reduce Energy Consumption', 'Cut down on energy usage at home.', 55, 'Environmental', 'user_id_5', '2023-10-05'),
        new Challenge('challenge_id_6', 'Bike to Work', 'Commute on a bicycle for a greener commute.', 70, 'Transportation', 'user_id_6', '2023-10-06'),
        new Challenge('challenge_id_7', 'Recycle More', 'Increase recycling efforts.', 45, 'Environmental', 'user_id_7', '2023-10-07'),
        new Challenge('challenge_id_8', 'Reduce Single-Use Plastics', 'Cut down on disposable plastics.', 60, 'Environmental', 'user_id_8', '2023-10-08'),
        new Challenge('challenge_id_9', 'Compost Food Waste', 'Start composting food scraps.', 50, 'Environmental', 'user_id_9', '2023-10-09'),
        new Challenge('challenge_id_10', 'Use Public Transport', 'Opt for public transit instead of private vehicles.', 65, 'Transportation', 'user_id_10', '2023-10-10'),
        new Challenge('challenge_id_11', 'Save Energy at Home', 'Implement energy-efficient practices in your home.', 55, 'Environmental', 'user_id_11', '2023-10-11'),
        new Challenge('challenge_id_12', 'Reduce Food Waste', 'Minimize food wastage through better meal planning.', 40, 'Diet', 'user_id_12', '2023-10-12'),
        new Challenge('challenge_id_13', 'Use LED Lighting', 'Switch to LED lights for energy savings.', 30, 'Environmental', 'user_id_13', '2023-10-13'),
        new Challenge('challenge_id_14', 'Use Reusable Bags', 'Ditch disposable bags for reusable ones.', 25, 'Environmental', 'user_id_14', '2023-10-14'),
        new Challenge('challenge_id_15', 'Reduce Car Idling', 'Avoid idling your car to save fuel.', 35, 'Transportation', 'user_id_15', '2023-10-15'),
        new Challenge('challenge_id_16', 'Support Local Agriculture', 'Buy locally sourced produce.', 45, 'Diet', 'user_id_16', '2023-10-16'),
        new Challenge('challenge_id_17', 'Turn Off Lights', 'Remember to turn off lights when not in use.', 20, 'Environmental', 'user_id_17', '2023-10-17'),
        new Challenge('challenge_id_18', 'Reduce Meat Consumption', 'Cut down on meat consumption.', 50, 'Diet', 'user_id_18', '2023-10-18'),
        new Challenge('challenge_id_19', 'Switch to Renewable Energy', 'Use renewable energy sources at home.', 65, 'Environmental', 'user_id_19', '2023-10-19'),
        new Challenge('challenge_id_20', 'Support Public Transit', 'Advocate for improved public transportation.', 70, 'Transportation', 'user_id_20', '2023-10-20'),
        new Challenge('challenge_id_21', 'Plant a Vegetable Garden', 'Grow your own veggies at home.', 60, 'Environmental', 'user_id_21', '2023-10-21'),
        new Challenge('challenge_id_22', 'Reduce Water Bottle Use', 'Opt for reusable water bottles.', 30, 'Environmental', 'user_id_22', '2023-10-22'),
        new Challenge('challenge_id_23', 'Recycle Electronics', 'Recycle old electronic devices properly.', 40, 'Environmental', 'user_id_23', '2023-10-23'),
        new Challenge('challenge_id_24', 'Use Energy-Efficient Appliances', 'Upgrade to energy-efficient appliances.', 55, 'Environmental', 'user_id_24', '2023-10-24'),
        new Challenge('challenge_id_25', 'Drive Less', 'Reduce car usage and walk or bike more.', 45, 'Transportation', 'user_id_25', '2023-10-25'),
        new Challenge('challenge_id_26', 'Conserve Water', 'Implement water-saving practices.', 50, 'Environmental', 'user_id_26', '2023-10-26'),
        new Challenge('challenge_id_27', 'Reduce Air Travel', 'Opt for eco-friendly travel options.', 60, 'Transportation', 'user_id_27', '2023-10-27'),
        new Challenge('challenge_id_28', 'Shop Locally', 'Support local businesses and reduce carbon emissions.', 40, 'Environmental', 'user_id_28', '2023-10-28'),
        new Challenge('challenge_id_29', 'Use Cloth Diapers', 'Reduce disposable diaper waste.', 25, 'Environmental', 'user_id_29', '2023-10-29'),
        new Challenge('challenge_id_30', 'Reduce Paper Usage', 'Minimize paper consumption through digital solutions.', 30, 'Environmental', 'user_id_30', '2023-10-30'),
        // Add 10 more challenges here...
    ];

    challenges.forEach((ch) => { createChallenge(ch.toObject()) })

    const rewards = [
        new Reward('reward_id_1', 'Eco-Friendly Tote Bag', 'A reusable tote bag made from eco-friendly materials.', 20, 100, '2023-10-01'),
        new Reward('reward_id_2', 'Solar-Powered Charger', 'Charge your devices using solar power.', 40, 50, '2023-10-02'),
        new Reward('reward_id_3', 'Local Organic Produce', 'Get a basket of locally sourced organic produce.', 35, 75, '2023-10-03'),
        new Reward('reward_id_4', 'LED Bulb Pack', 'A pack of energy-efficient LED light bulbs.', 15, 150, '2023-10-04'),
        new Reward('reward_id_5', 'Carpool Voucher', 'Get a voucher for carpooling services.', 30, 100, '2023-10-05'),
        new Reward('reward_id_6', 'Recycled Notebook', 'A notebook made from recycled paper.', 10, 200, '2023-10-06'),
        new Reward('reward_id_7', 'Bike Shop Gift Card', 'A gift card for a local bike shop.', 25, 80, '2023-10-07'),
        new Reward('reward_id_8', 'Tree Planting Event', 'Participate in a tree planting event.', 50, 60, '2023-10-08'),
        new Reward('reward_id_9', 'Public Transit Pass', 'A monthly public transit pass.', 60, 40, '2023-10-09'),
        new Reward('reward_id_10', 'Organic Coffee Subscription', 'Receive a monthly supply of organic coffee.', 30, 90, '2023-10-10'),
        new Reward('reward_id_11', 'Reusable Water Bottle', 'A durable and eco-friendly water bottle.', 10, 120, '2023-10-11'),
        new Reward('reward_id_12', 'Local Artisan Soap', 'Handmade soap from local artisans.', 15, 80, '2023-10-12'),
        new Reward('reward_id_13', 'Sustainable Fashion Voucher', 'Shop for sustainable fashion items.', 50, 50, '2023-10-13'),
        new Reward('reward_id_14', 'Compost Bin Starter Kit', 'Get started with home composting.', 30, 70, '2023-10-14'),
        new Reward('reward_id_15', 'Renewable Energy Certificate', 'Support renewable energy projects.', 20, 100, '2023-10-15'),
        new Reward('reward_id_16', 'Local Restaurant Gift Card', 'Enjoy a meal at a local, sustainable restaurant.', 40, 60, '2023-10-16'),
        new Reward('reward_id_17', 'Energy-Saving Thermostat', 'A smart thermostat for energy efficiency.', 40, 50, '2023-10-17'),
        new Reward('reward_id_18', 'Bicycle Accessories Bundle', 'Accessories for your eco-friendly commute.', 25, 90, '2023-10-18'),
        new Reward('reward_id_19', 'Recycled Backpack', 'A backpack made from recycled materials.', 20, 70, '2023-10-19'),
        new Reward('reward_id_20', 'Zero-Waste Kit', 'Start your journey towards a zero-waste lifestyle.', 55, 40, '2023-10-20'),
        new Reward('reward_id_21', 'Thermal Insulated Lunchbox', 'Keep your meals fresh and reduce food waste.', 15, 100, '2023-10-21'),
        new Reward('reward_id_22', 'Eco-Friendly Cleaning Kit', 'Cleaning supplies that are kind to the environment.', 30, 60, '2023-10-22'),
        new Reward('reward_id_23', 'Sustainable Gardening Tools', 'Tools for an eco-friendly garden.', 25, 75, '2023-10-23'),
        new Reward('reward_id_24', 'Recycled Clothing', 'Clothing made from recycled textiles.', 20, 80, '2023-10-24'),
        new Reward('reward_id_25', 'Public Park Cleanup Event', 'Join a community park cleanup event.', 5, 120, '2023-10-25'),
        new Reward('reward_id_26', 'Sustainable Kitchenware Set', 'Eco-friendly kitchenware for your home.', 35, 50, '2023-10-26'),
        new Reward('reward_id_27', 'Eco-Tourism Getaway', 'Enjoy an eco-friendly vacation experience.', 70, 30, '2023-10-27'),
        new Reward('reward_id_28', 'Secondhand Bookstore Voucher', 'Buy pre-loved books from a local store.', 10, 110, '2023-10-28'),
        new Reward('reward_id_29', 'Renewable Energy Home Kit', 'Upgrade your home for renewable energy use.', 60, 40, '2023-10-29'),
        new Reward('reward_id_30', 'Environmental Documentary Screening', 'Watch an impactful environmental documentary.', 5, 150, '2023-10-30'),
    ];

    rewards.forEach((rw) => { createReward(rw.toObject()) })

    const users = [
        new User('user_id_1', 'user1', 'user1@example.com', 100, 500, '2023-10-01', '2023-10-10'),
        new User('user_id_2', 'user2', 'user2@example.com', 150, 600, '2023-10-02', '2023-10-11'),
        new User('user_id_3', 'user3', 'user3@example.com', 200, 700, '2023-10-03', '2023-10-12'),
        new User('user_id_4', 'user4', 'user4@example.com', 120, 520, '2023-10-04', '2023-10-13'),
        new User('user_id_5', 'user5', 'user5@example.com', 180, 580, '2023-10-05', '2023-10-14'),
        new User('user_id_6', 'user6', 'user6@example.com', 220, 720, '2023-10-06', '2023-10-15'),
        new User('user_id_7', 'user7', 'user7@example.com', 90, 490, '2023-10-07', '2023-10-16'),
        new User('user_id_8', 'user8', 'user8@example.com', 140, 640, '2023-10-08', '2023-10-17'),
        new User('user_id_9', 'user9', 'user9@example.com', 260, 760, '2023-10-09', '2023-10-18'),
        new User('user_id_10', 'user10', 'user10@example.com', 110, 510, '2023-10-10', '2023-10-19'),
        // Add 10 more users here...
    ];

    users.forEach((us) => { createUser(us.toObject()) })
    
    const userChallenges = [
        new UserChallenge('user_challenge_id_1', 'user_id_1', 'challenge_id_1', '2023-10-15', 50),
        new UserChallenge('user_challenge_id_2', 'user_id_2', 'challenge_id_2', '2023-10-16', 60),
        new UserChallenge('user_challenge_id_3', 'user_id_3', 'challenge_id_3', '2023-10-17', 70),
        new UserChallenge('user_challenge_id_4', 'user_id_4', 'challenge_id_4', '2023-10-18', 40),
        new UserChallenge('user_challenge_id_5', 'user_id_5', 'challenge_id_5', '2023-10-19', 55),
        new UserChallenge('user_challenge_id_6', 'user_id_6', 'challenge_id_6', '2023-10-20', 70),
        new UserChallenge('user_challenge_id_7', 'user_id_7', 'challenge_id_7', '2023-10-21', 45),
        new UserChallenge('user_challenge_id_8', 'user_id_8', 'challenge_id_8', '2023-10-22', 60),
        new UserChallenge('user_challenge_id_9', 'user_id_9', 'challenge_id_9', '2023-10-23', 50),
        new UserChallenge('user_challenge_id_10', 'user_id_10', 'challenge_id_10', '2023-10-24', 65),
    ];
    
    userChallenges.forEach((us) => { createUserChallenge(us.toObject()) })
    
    const userRewards = [
        new UserReward('user_reward_id_1', 'user_id_1', 'reward_id_1', '2023-10-15'),
        new UserReward('user_reward_id_2', 'user_id_2', 'reward_id_2', '2023-10-16'),
        new UserReward('user_reward_id_3', 'user_id_3', 'reward_id_3', '2023-10-17'),
        new UserReward('user_reward_id_4', 'user_id_4', 'reward_id_4', '2023-10-18'),
        new UserReward('user_reward_id_5', 'user_id_5', 'reward_id_5', '2023-10-19'),
        new UserReward('user_reward_id_6', 'user_id_6', 'reward_id_6', '2023-10-20'),
        new UserReward('user_reward_id_7', 'user_id_7', 'reward_id_7', '2023-10-21'),
        new UserReward('user_reward_id_8', 'user_id_8', 'reward_id_8', '2023-10-22'),
        new UserReward('user_reward_id_9', 'user_id_9', 'reward_id_9', '2023-10-23'),
        new UserReward('user_reward_id_10', 'user_id_10', 'reward_id_10', '2023-10-24'),
    ];

    userRewards.forEach((us) => { createUserReward(us.toObject()) })
}