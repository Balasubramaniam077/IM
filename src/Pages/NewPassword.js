import styles from "./NewPassword.module.css";
const NewPassword = () => {
  return (
    <div className={styles.newPassword}>
      <div className={styles.leftSide}>
        <div className={styles.leftSide1}>
          <div className={styles.leftSideChild} />
        </div>
        <div className={styles.frameParent}>
          <div className={styles.frameWrapper}>
            <div className={styles.frameWrapper}>
              <div className={styles.frameDiv}>
                <div className={styles.enterYourNewPasswordParent}>
                  <b className={styles.enterYourNew}>Enter your new password</b>
                  <div className={styles.thisIsThe}>
                    This is the last step in recovering your password.
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.frameGroup}>
            <div className={styles.frameWrapper}>
              <div className={styles.frameParent1}>
                <div className={styles.groupWrapper}>
                  <div className={styles.shieldSlashParent}>
                    <img
                      className={styles.shieldSlashIcon}
                      alt=""
                      src="/shieldslash1.svg"
                    />
                    <div className={styles.password}>Password</div>
                  </div>
                </div>
                <div className={styles.groupWrapper}>
                  <div className={styles.shieldSlashGroup}>
                    <img
                      className={styles.shieldSlashIcon}
                      alt=""
                      src="/shieldslash1.svg"
                    />
                    <div className={styles.password}>Confirm Password</div>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.frameWrapper2}>
              <div className={styles.submitWrapper}>
                <b className={styles.submit}>SUBMIT</b>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.rightSide}>
        <div className={styles.rightSide1}>
          <div className={styles.rightSideChild} />
          <div className={styles.rightSideItem} />
          <div className={styles.rightSideInner} />
          <div className={styles.rightSideInner1}>
            <div className={styles.groupParent}>
              <div className={styles.thisIsTheEndParent}>
                <b className={styles.thisIsThe1}>This is the end!</b>
                <div className={styles.afterEnteringThe}>
                  After entering the new password you will gain access to your
                  account.
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
        <img
          className={styles.undrawLovingStoryReWo5x1Icon}
          alt=""
          src="/undraw-loving-story-re-wo5x-1.svg"
        />
      </div>
    </div>
  );
};

export default NewPassword;
