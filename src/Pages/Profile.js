import styles from "./Profile.module.css";
const Profile = () => {
  return (
    <div className={styles.profile}>
      <div className={styles.menuItems}>
        <div className={styles.menuItemsChild} />
        <div className={styles.header}>
          <div className={styles.headerChild} />
          <img
            className={styles.fernandoPidrilioIcon}
            alt=""
            src="/fernando-pidrilio@2x.png"
          />
          <div className={styles.icbaselineRefreshParent}>
            <img
              className={styles.icbaselineRefreshIcon}
              alt=""
              src="/icbaselinerefresh1.svg"
            />
            <div className={styles.refresh}>Refresh</div>
          </div>
          <img className={styles.searchIconCopy} alt="" />
        </div>
        <img
          className={styles.icons8Notifications641}
          alt=""
          src="/icons8notifications64-2@2x.png"
        />
      </div>
      <div className={styles.rectangleParent}>
        <div className={styles.instanceChild} />
        <div className={styles.mdihomeParent}>
          <img className={styles.mdihomeIcon} alt="" src="/mdihome2.svg" />
          <div className={styles.home}>Home</div>
        </div>
        <div className={styles.inventoryParent}>
          <div className={styles.inventory}>Inventory</div>
          <img
            className={styles.mdihomeIcon}
            alt=""
            src="/mdiformatlistbulletedsquare1.svg"
          />
        </div>
        <div className={styles.mdiaccountParent}>
          <img className={styles.mdihomeIcon} alt="" src="/mdiaccount4.svg" />
          <div className={styles.inventory}>Customers</div>
        </div>
        <div className={styles.faSolidfileInvoiceDollarParent}>
          <img
            className={styles.faSolidfileInvoiceDollarIcon}
            alt=""
            src="/fasolidfileinvoicedollar1.svg"
          />
          <div className={styles.transactions}>Warehouse</div>
        </div>
      </div>
      <div className={styles.nav}>
        <div className={styles.navChild} />
        <div className={styles.navChild} />
        <div className={styles.navChild} />
      </div>
      <div className={styles.profilePicParent}>
        <div className={styles.profilePic} />
        <div className={styles.followButton}>
          <div className={styles.button}>
            <div className={styles.rectangle} />
            <div className={styles.button1}>Edit</div>
            <img
              className={styles.icbaselineEditIcon}
              alt=""
              src="/icbaselineedit1.svg"
            />
          </div>
        </div>
        <b className={styles.userName}>User Name</b>
        <a
          className={styles.exampleexamplecom}
          href="mailto:example@example.com"
          target="_blank"
        >
          example@example.com
        </a>
        <div className={styles.m12Yrs}>M 12 yrs</div>
      </div>
      <div className={styles.username}>
        <div className={styles.username1}>
          <div className={styles.rectangle1} />
          <div className={styles.username1}>
            <div className={styles.rectangle1} />
            <div className={styles.phoneNumber}># Phone number</div>
            <div className={styles.emailId}># Email ID</div>
          </div>
        </div>
      </div>
      <div className={styles.name}># Name</div>
    </div>
  );
};

export default Profile;
