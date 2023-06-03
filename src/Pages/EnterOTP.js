import styles from "./EnterOTP.module.css";
const EnterOTP = () => {
  return (
    <div className={styles.enterOtp}>
      <div className={styles.frameParent}>
        <div className={styles.frameWrapper}>
          <div className={styles.frameWrapper}>
            <div className={styles.frameDiv}>
              <div className={styles.enterOtpParent}>
                <b className={styles.enterOtp1}>Enter OTP</b>
                <div className={styles.sentOtpOnContainer}>
                  <span>{`Sent OTP on `}</span>
                  <span className={styles.johndoegmailcom}>
                    johndoe@gmail.com
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.frameGroup}>
          <div className={styles.frameParent1}>
            <div className={styles.frameWrapper1}>
              <div className={styles.wrapper}>
                <div className={styles.div}>-</div>
              </div>
            </div>
            <div className={styles.frameWrapper1}>
              <div className={styles.wrapper}>
                <div className={styles.div}>-</div>
              </div>
            </div>
            <div className={styles.frameWrapper1}>
              <div className={styles.wrapper}>
                <div className={styles.div}>-</div>
              </div>
            </div>
            <div className={styles.frameWrapper1}>
              <div className={styles.wrapper}>
                <div className={styles.div}>-</div>
              </div>
            </div>
            <div className={styles.frameWrapper1}>
              <div className={styles.wrapper}>
                <div className={styles.div}>-</div>
              </div>
            </div>
            <div className={styles.frameWrapper1}>
              <div className={styles.wrapper}>
                <div className={styles.div}>-</div>
              </div>
            </div>
          </div>
          <div className={styles.frameParent2}>
            <div className={styles.submitWrapper}>
              <b className={styles.div}>SUBMIT</b>
            </div>
            <b className={styles.resentOtp}>Resent OTP</b>
          </div>
        </div>
      </div>
      <div className={styles.rightSide}>
        <div className={styles.rightSideChild} />
        <div className={styles.rightSideItem} />
        <div className={styles.rightSideInner} />
        <div className={styles.rightSideInner1}>
          <div className={styles.groupParent}>
            <div className={styles.itsJustOtpVerificationParent}>
              <b className={styles.itsJustOtp}>It's just OTP verification</b>
              <div className={styles.youAreOne}>
                You are one step away from recovering your password.
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
          className={styles.undrawSecureLoginPdn41Icon}
          alt=""
          src="/undraw-secure-login-pdn4-1.svg"
        />
      </div>
    </div>
  );
};

export default EnterOTP;
