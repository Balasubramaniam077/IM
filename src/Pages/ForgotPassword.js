import styles from "./ForgotPassword.module.css";
const ForgotPassword = () => {
  return (
    <div className={styles.forgotPassword}>
      <div className={styles.rightSide}>
        <div className={styles.rightSideChild} />
        <div className={styles.rightSideItem} />
        <div className={styles.rightSideInner} />
        <div className={styles.frameDiv}>
          <div className={styles.groupParent}>
            <div className={styles.forgotYourPasswordParent}>
              <b className={styles.forgotYourPassword}>Forgot your password?</b>
              <div className={styles.youCanGetContainer}>
                <p className={styles.youCanGet}>
                  You can get them back easily.
                </p>
              </div>
            </div>
            <div className={styles.carouseldesktoplarge}>
              <div className={styles.carouseldesktoplargeChild} />
              <div className={styles.carouseldesktoplargeItem} />
              <div className={styles.carouseldesktoplargeInner} />
            </div>
          </div>
        </div>
        <img
          className={styles.undrawMyPasswordReYdq71Icon}
          alt=""
          src="/undraw-my-password-re-ydq7-1.svg"
        />
      </div>
      <div className={styles.frameParent}>
        <div className={styles.frameWrapper}>
          <div className={styles.frameWrapper}>
            <div className={styles.frameWrapper1}>
              <div className={styles.forgotYourPasswordGroup}>
                <b className={styles.forgotYourPassword1}>
                  Forgot your password?
                </b>
                <div className={styles.enterYourEmail}>
                  Enter your Email and get OTP to verification.
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.frameGroup}>
          <div className={styles.frameWrapper}>
            <div className={styles.frameParent1}>
              <div className={styles.envelopeParent}>
                <img
                  className={styles.envelopeIcon}
                  alt=""
                  src="/envelope1.svg"
                />
                <b className={styles.email}>Email</b>
              </div>
              <div className={styles.envelopeParent}>
                <img
                  className={styles.envelopeIcon}
                  alt=""
                  src="/envelope1.svg"
                />
                <div className={styles.email}>Repeat Email</div>
              </div>
            </div>
          </div>
          <div className={styles.frameWrapper3}>
            <div className={styles.getOtpWrapper}>
              <b className={styles.email}>GET OTP</b>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
