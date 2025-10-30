import styles from "../Auth.module.css";

function Login() {
  return (
    <div className={styles.signup}> {/* reuse the same container style */}
      <h1 className={styles.signupHeading}>Log In Page</h1>
      <span className={styles.divider}></span>

      <form className={styles.signupForm}>
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

      <button className={styles.signupButton} type="submit">
        Log In
      </button>
      <p className={styles.signupEndStatement}>
        Don’t have an account?  
        <span> </span>
        <a href="/signup">Sign up here</a>
      </p>
    </div>
  );
}

export default Login;
