class Challenge {
  constructor(challenge_id, title, description, category, created_by_user_email, created_at, carbon_credits) {
    this.challenge_id = challenge_id;
    this.title = title;
    this.description = description;
    this.category = category;
    this.created_by_user_email = created_by_user_email;
    this.created_at = created_at;
    this.carbon_credits = carbon_credits || 0; // Initialize carbon credits for the challenge
  }

  toObject() {
    return {
      challenge_id: this.challenge_id,
      title: this.title,
      description: this.description,
      category: this.category,
      created_by_user_email: this.created_by_user_email,
      created_at: this.created_at,
      carbon_credits: this.carbon_credits,
    };
  }

  toString() {
    return JSON.stringify(this.toObject());
  }
}

export default Challenge;
