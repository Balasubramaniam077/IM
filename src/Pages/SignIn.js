import styles from "./SignIn.module.css";
const SignIn = () => {
  return (
    <div className={styles.signIn}>
      <div className={styles.form}>
        <div className={styles.sectionForgot}>
          <div className={styles.forgotPassword}>Forgot password?</div>
          <div className={styles.rememberMe}>Remember me</div>
          <div className={styles.sectionForgotChild} />
        </div>
        <div className={styles.loginBtn}>
          <div className={styles.rectangle} />
          <div className={styles.login}>login</div>
        </div>
        <div className={styles.password}>
          <div className={styles.rectangle1} />
          <div className={styles.password1}>Password</div>
        </div>
        <div className={styles.username}>
          <div className={styles.rectangle1} />
          <div className={styles.login1}>Login</div>
        </div>
        <div className={styles.signInAnd}>
          Sign in and start managing your candidates!
        </div>
        <div className={styles.signIn1}>Sign in</div>
      </div>
      <div className={styles.signInChild} />
      <img
        className={styles.undrawTwoFactorAuthenticatiIcon}
        alt=""
        src="/undraw-two-factor-authentication-namy-1-1.svg"
      />
      <div className={styles.signInInner}>
        <div className={styles.groupParent}>
          <div className={styles.inventaryManagementSystemParent}>
            <b className={styles.inventaryManagementSystem}>
              Inventory Management System
            </b>
            <div className={styles.everythingYouNeed}>
              Everything you need is an internet connection.
            </div>
          </div>
          <div className={styles.carouseldesktoplarge}>
            <div className={styles.carouseldesktoplargeChild} />
            <div className={styles.carouseldesktoplargeItem} />
            <div className={styles.carouseldesktoplargeInner} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
