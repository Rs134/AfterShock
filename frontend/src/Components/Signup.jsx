import styles from "../Auth.module.css"; // ✅ Import styles as an object

function Signup() {
  return (
    <div className={styles.signup}>
      <h1 className={styles.signupHeading}>Sign Up Here</h1>
      <span className={styles.divider}></span>

      <form className={styles.signupForm}>
        <label className={styles.signupLabel} htmlFor="name">Name:</label>
        <input
          className={styles.signupInput}
          type="text"
          id="name"
          name="name"
          required
        />

        <label className={styles.signupLabel} htmlFor="email">Email:</label>
        <input
          className={styles.signupInput}
          type="email"
          id="email"
          name="email"
          required
        />

        <label className={styles.signupLabel} htmlFor="password">Password:</label>
        <input
          className={styles.signupInput}
          type="password"
          id="password"
          name="password"
          required
        />
      </form>

      <button className={styles.signupButton} type="submit">Sign Up</button>
      <p className={styles.signupEndStatement}>
        Already have an account? Log in here
      </p>
    </div>
  );
}

export default Signup;
