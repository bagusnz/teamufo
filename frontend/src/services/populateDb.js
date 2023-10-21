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
        new Challenge('challenge1', 'Reduce Plastic Usage', 'Limit your use of single-use plastics', 'Environmental', 'user1@example.com', '2023-10-01', 20),
        new Challenge('challenge2', 'Walk 10,000 Steps a Day', 'Get active and walk 10,000 steps daily', 'Fitness', 'user2@example.com', '2023-10-02', 15),
        new Challenge('challenge3', 'Reduce Meat Consumption', 'Try a vegetarian or vegan diet for a week', 'Health', 'user3@example.com', '2023-10-03', 25),
        new Challenge('challenge4', 'Plant a Tree', 'Contribute to reforestation efforts', 'Environmental', 'user4@example.com', '2023-10-04', 30),
        new Challenge('challenge5', 'Read 20 Books in a Year', 'Cultivate a reading habit', 'Personal Growth', 'user5@example.com', '2023-10-05', 10),
        new Challenge('challenge6', 'No Junk Food for a Month', 'Cut out unhealthy snacks', 'Health', 'user6@example.com', '2023-10-06', 20),
        new Challenge('challenge7', 'Volunteer at a Local Shelter', 'Help those in need', 'Community', 'user7@example.com', '2023-10-07', 15),
        new Challenge('challenge8', 'Learn a New Language', 'Expand your horizons', 'Personal Growth', 'user8@example.com', '2023-10-08', 5),
        new Challenge('challenge9', 'Carpool to Work', 'Reduce your carbon footprint', 'Environmental', 'user9@example.com', '2023-10-09', 25),
        new Challenge('challenge10', 'Practice Mindfulness Daily', 'Improve mental well-being', 'Wellness', 'user10@example.com', '2023-10-10', 10),
        new Challenge('challenge11', 'Bike to Work', 'Commute by bicycle to reduce emissions', 'Environmental', 'user11@example.com', '2023-10-11', 35),
        new Challenge('challenge12', 'Practice Yoga Daily', 'Improve flexibility and mindfulness', 'Wellness', 'user12@example.com', '2023-10-12', 5),
        new Challenge('challenge13', 'Go Vegan for a Month', 'Experience a plant-based diet', 'Health', 'user13@example.com', '2023-10-13', 30),
        new Challenge('challenge14', 'Learn to Code', 'Develop coding skills', 'Personal Growth', 'user14@example.com', '2023-10-14', 10),
        new Challenge('challenge15', 'Organize a Beach Cleanup', 'Protect the environment and marine life', 'Environmental', 'user15@example.com', '2023-10-15', 25),
        new Challenge('challenge16', 'Cook a New Recipe Weekly', 'Culinary exploration', 'Personal Growth', 'user16@example.com', '2023-10-16', 15),
        new Challenge('challenge17', 'Meditate for 15 Minutes Daily', 'Enhance mental well-being', 'Wellness', 'user17@example.com', '2023-10-17', 5),
        new Challenge('challenge18', 'Write a Book', 'Author your own novel', 'Personal Growth', 'user18@example.com', '2023-10-18', 0),
        new Challenge('challenge19', 'No Social Media for a Month', 'Digital detox', 'Wellness', 'user19@example.com', '2023-10-19', 20),
        new Challenge('challenge20', 'Host a Charity Event', 'Give back to the community', 'Community', 'user20@example.com', '2023-10-20', 30),
        new Challenge('challenge21', 'Run a Marathon', 'Train for and complete a full marathon', 'Fitness', 'user21@example.com', '2023-10-21', 40),
        new Challenge('challenge22', 'Start a Garden', 'Cultivate your own plants and vegetables', 'Environmental', 'user22@example.com', '2023-10-22', 15),
        new Challenge('challenge23', 'Learn to Play an Instrument', 'Discover the joy of making music', 'Personal Growth', 'user23@example.com', '2023-10-23', 10),
        new Challenge('challenge24', 'Write a Gratitude Journal', 'Cultivate a habit of gratitude', 'Wellness', 'user24@example.com', '2023-10-24', 5),
        new Challenge('challenge25', 'Host a Movie Night', 'Share a movie night with friends', 'Community', 'user25@example.com', '2023-10-25', 0),
        new Challenge('challenge26', 'Create Art Every Day', 'Explore your artistic side', 'Personal Growth', 'user26@example.com', '2023-10-26', 5),
        new Challenge('challenge27', 'Become a Mentor', 'Guide and inspire someone', 'Community', 'user27@example.com', '2023-10-27', 10),
        new Challenge('challenge28', 'Start a Blog', 'Share your thoughts and experiences', 'Personal Growth', 'user28@example.com', '2023-10-28', 0),
        new Challenge('challenge29', 'Complete a Triathlon', 'Swim, bike, and run in a triathlon', 'Fitness', 'user29@example.com', '2023-10-29', 50),
        new Challenge('challenge30', 'Explore a New Country', 'Travel and experience new cultures', 'Personal Growth', 'user30@example.com', '2023-10-30', 20),

    ];

    challenges.forEach((ch) => { createChallenge(ch.toObject()) })

    const rewards = [
        new Reward('reward1', 'Reusable Water Bottle', 'Stay hydrated and eco-friendly', 10, 100, '2023-10-01'),
        new Reward('reward2', 'Fitness Tracker', 'Track your health and activity', 50, 50, '2023-10-02'),
        new Reward('reward3', 'Eco-friendly Tote Bag', 'Reduce plastic bag usage', 15, 75, '2023-10-03'),
        new Reward('reward4', 'Cookbook', 'Explore new recipes and cuisines', 20, 30, '2023-10-04'),
        new Reward('reward5', 'Gardening Kit', 'Start your own garden', 25, 40, '2023-10-05'),
        new Reward('reward6', 'Yoga Mat', 'Enhance your yoga practice', 30, 20, '2023-10-06'),
        new Reward('reward7', 'Local Artisanal Soap Set', 'Pamper yourself with handmade soap', 12, 60, '2023-10-07'),
        new Reward('reward8', 'Cookware Set', 'Upgrade your kitchen', 60, 25, '2023-10-08'),
        new Reward('reward9', 'Plant-Based Cookbook', 'Discover vegan recipes', 25, 35, '2023-10-09'),
        new Reward('reward10', 'Bicycle', 'Eco-friendly commuting', 100, 10, '2023-10-10'),
        new Reward('reward11', 'Eco-friendly Sneakers', 'Sustainable footwear', 40, 30, '2023-10-11'),
        new Reward('reward12', 'Reusable Cutlery Set', 'Reduce single-use plastics', 8, 90, '2023-10-12'),
        new Reward('reward13', 'Sustainable Fashion Voucher', 'Shop for eco-friendly clothing', 35, 15, '2023-10-13'),
        new Reward('reward14', 'Meditation App Subscription', 'Mindfulness and relaxation', 5, 100, '2023-10-14'),
        new Reward('reward15', 'Eco-friendly Cleaning Kit', 'Clean your home sustainably', 18, 50, '2023-10-15'),
        new Reward('reward16', 'Hiking Gear', 'Explore the great outdoors', 45, 20, '2023-10-16'),
        new Reward('reward17', 'Cooking Class Voucher', 'Learn new culinary skills', 30, 25, '2023-10-17'),
        new Reward('reward18', 'Eco-friendly Smartphone Case', 'Protect your phone and the environment', 10, 60, '2023-10-18'),
        new Reward('reward19', 'Fitness Class Membership', 'Stay active and healthy', 25, 40, '2023-10-19'),
        new Reward('reward20', 'Local Farm Produce Basket', 'Support local agriculture', 15, 50, '2023-10-20'),
        new Reward('reward21', 'Sustainable Backpack', 'Eco-friendly carry solution', 40, 25, '2023-10-21'),
        new Reward('reward22', 'Green Energy Subscription', 'Power your home with clean energy', 50, 15, '2023-10-22'),
        new Reward('reward23', 'Zero-Waste Starter Kit', 'Begin your zero-waste journey', 22, 45, '2023-10-23'),
        new Reward('reward24', 'Art Supplies', 'Unleash your creativity', 18, 60, '2023-10-24'),
        new Reward('reward25', 'Charity Donation Voucher', 'Give back to a cause you care about', 5, 100, '2023-10-25'),
        new Reward('reward26', 'Eco-friendly Coffee Maker', 'Brew your coffee sustainably', 30, 30, '2023-10-26'),
        new Reward('reward27', 'Hiking Trip for Two', 'Nature adventure', 70, 10, '2023-10-27'),
        new Reward('reward28', 'Reusable Lunchbox Set', 'Pack meals sustainably', 12, 70, '2023-10-28'),
        new Reward('reward29', 'Plant a Tree in Your Name', 'Contribute to reforestation', 8, 100, '2023-10-29'),
        new Reward('reward30', 'Eco-friendly Home Appliances', 'Upgrade your home sustainably', 80, 10, '2023-10-30'),
    ];

    rewards.forEach((rw) => { createReward(rw.toObject()) })

    const users = [
        new User('user1', 'JohnDoe', 'johndoe@example.com', 100, 1500, '2023-10-01', '2023-10-19'),
        new User('user2', 'JaneSmith', 'janesmith@example.com', 200, 2500, '2023-10-02', '2023-10-18'),
        new User('user3', 'MikeJohnson', 'mikejohnson@example.com', 50, 800, '2023-10-03', '2023-10-20'),
        new User('user4', 'SaraBrown', 'sarabrown@example.com', 300, 4500, '2023-10-04', '2023-10-17'),
        new User('user5', 'ChrisWilson', 'chriswilson@example.com', 75, 1200, '2023-10-05', '2023-10-19'),
        new User('user6', 'AmyGarcia', 'amygarcia@example.com', 150, 2000, '2023-10-06', '2023-10-20'),
        new User('user7', 'DavidLee', 'davidlee@example.com', 250, 3500, '2023-10-07', '2023-10-18'),
        new User('user8', 'EmilyWong', 'emilywong@example.com', 80, 1300, '2023-10-08', '2023-10-17'),
        new User('user9', 'DanielMartinez', 'danielmartinez@example.com', 180, 2200, '2023-10-09', '2023-10-20'),
        new User('user10', 'LindaTaylor', 'lindataylor@example.com', 120, 1700, '2023-10-10', '2023-10-19'),

    ];

    users.forEach((us) => { createUser(us.toObject()) })

    const userChallenges = [
        new UserChallenge('user_challenge1', 'user1', 'challenge1', '2023-10-05', 10, ['image1.jpg', 'image2.jpg']),
        new UserChallenge('user_challenge2', 'user2', 'challenge2', '2023-10-07', 15, ['image3.jpg']),
        new UserChallenge('user_challenge3', 'user3', 'challenge3', '2023-10-10', 20, []),
        new UserChallenge('user_challenge4', 'user4', 'challenge4', '2023-10-12', 25, ['image4.jpg', 'image5.jpg']),
        new UserChallenge('user_challenge5', 'user5', 'challenge5', '2023-10-15', 5, []),
        new UserChallenge('user_challenge6', 'user6', 'challenge6', '2023-10-17', 15, ['image6.jpg', 'image7.jpg']),
        new UserChallenge('user_challenge7', 'user7', 'challenge7', '2023-10-20', 10, ['image8.jpg']),
        new UserChallenge('user_challenge8', 'user8', 'challenge8', '2023-10-22', 5, ['image9.jpg']),
        new UserChallenge('user_challenge9', 'user9', 'challenge9', '2023-10-25', 30, ['image10.jpg', 'image11.jpg']),
        new UserChallenge('user_challenge10', 'user10', 'challenge10', '2023-10-27', 20, ['image12.jpg']),
    ];

    userChallenges.forEach((us) => { createUserChallenge(us.toObject()) })

    const userRewards = [
        new UserReward('user_reward1', 'user1', 'reward1', '2023-10-05'),
        new UserReward('user_reward2', 'user2', 'reward2', '2023-10-07'),
        new UserReward('user_reward3', 'user3', 'reward3', '2023-10-10'),
        new UserReward('user_reward4', 'user4', 'reward4', '2023-10-12'),
        new UserReward('user_reward5', 'user5', 'reward5', '2023-10-15'),
        new UserReward('user_reward6', 'user6', 'reward6', '2023-10-17'),
        new UserReward('user_reward7', 'user7', 'reward7', '2023-10-20'),
        new UserReward('user_reward8', 'user8', 'reward8', '2023-10-22'),
        new UserReward('user_reward9', 'user9', 'reward9', '2023-10-25'),
        new UserReward('user_reward10', 'user10', 'reward10', '2023-10-27'),
    ];

    userRewards.forEach((us) => { createUserReward(us.toObject()) })
}