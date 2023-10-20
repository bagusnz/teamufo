class UserChallenge {
  constructor(user_challenge_id, user_id, challenge_id, completion_date, earned_credits) {
    this.user_challenge_id = user_challenge_id;
    this.user_id = user_id;
    this.challenge_id = challenge_id;
    this.completion_date = completion_date;
    this.earned_credits = earned_credits;
  }

  toObject() {
    return {
      user_challenge_id: this.user_challenge_id,
      user_id: this.user_id,
      challenge_id: this.challenge_id,
      completion_date: this.completion_date,
      earned_credits: this.earned_credits,
    };
  }

  toString() {
    return JSON.stringify(this.toObject());
  }
}

export default UserChallenge;
