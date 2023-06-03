import styles from "./CreateYourAccount.module.css";
const CreateYourAccount = () => {
  return (
    <div className={styles.createYourAccount}>
      <div className={styles.leftSide}>
        <div className={styles.leftSide1}>
          <div className={styles.leftSideChild} />
        </div>
        <div className={styles.frameParent}>
          <div className={styles.frameWrapper}>
            <div className={styles.frameWrapper}>
              <div className={styles.frameDiv}>
                <div className={styles.createYourAccountParent}>
                  <b className={styles.createYourAccount1}>
                    Create your account
                  </b>
                  <div className={styles.unlockAllFeatures}>
                    Unlock all Features!
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.frameGroup}>
            <div className={styles.groupParent}>
              <div className={styles.frameParent2}>
                <div className={styles.personParent}>
                  <img className={styles.personIcon} alt="" src="/person.svg" />
                  <div className={styles.username}>Username</div>
                </div>
                <div className={styles.personParent}>
                  <img
                    className={styles.personIcon}
                    alt=""
                    src="/envelope.svg"
                  />
                  <div className={styles.username}>Email</div>
                </div>
                <div className={styles.groupWrapper}>
                  <div className={styles.shieldSlashParent}>
                    <img
                      className={styles.shieldSlashIcon}
                      alt=""
                      src="/shieldslash.svg"
                    />
                    <div className={styles.password}>Password</div>
                  </div>
                </div>
                <div className={styles.groupWrapper}>
                  <div className={styles.shieldSlashGroup}>
                    <img
                      className={styles.shieldSlashIcon}
                      alt=""
                      src="/shieldslash.svg"
                    />
                    <div className={styles.password}>Confirm Password</div>
                  </div>
                </div>
              </div>
              <div className={styles.frameWrapper1}>
                <div className={styles.frameWrapper2}>
                  <div className={styles.checkSquareParent}>
                    <img
                      className={styles.checkSquareIcon}
                      alt=""
                      src="/checksquare.svg"
                    />
                    <div className={styles.acceptTermsAndContainer}>
                      <span className={styles.acceptTermsAndContainer1}>
                        <span>{`Accept `}</span>
                        <span className={styles.termsAndConditions}>
                          terms and conditions
                        </span>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.frameParent3}>
              <div className={styles.logInWrapper}>
                <b className={styles.username}>LOG IN</b>
              </div>
              <div className={styles.youHaveAccountContainer}>
                <span>You have account?</span>
                <span className={styles.span}>{` `}</span>
                <b className={styles.loginNow}>Login now</b>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.rightSide}>
        <div className={styles.rightSideChild} />
        <div className={styles.rightSideItem} />
        <div className={styles.rightSideInner} />
        <div className={styles.rightSideInner1}>
          <div className={styles.groupParent}>
            <div className={styles.joinUsParent}>
              <b className={styles.joinUs}>Join us!</b>
              <div className={styles.justGoThrough}>
                Just go through the boring process of creating an account.
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
          className={styles.undrawThoughtProcessReOm58Icon}
          alt=""
          src="/undraw-thought-process-re-om58-1.svg"
        />
      </div>
    </div>
  );
};

export default CreateYourAccount;
