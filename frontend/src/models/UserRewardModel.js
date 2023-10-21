class UserReward {
  constructor(user_reward_id, user_id, reward_id, redeemed_date) {
    this.user_reward_id = user_reward_id;
    this.user_id = user_id;
    this.reward_id = reward_id;
    this.redeemed_date = redeemed_date;
  }

  toObject() {
    return {
      user_reward_id: this.user_reward_id,
      user_id: this.user_id,
      reward_id: this.reward_id,
      redeemed_date: this.redeemed_date,
    };
  }

  toString() {
    return JSON.stringify(this.toObject());
  }
}

export default UserReward;
