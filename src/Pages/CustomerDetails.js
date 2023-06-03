import styles from "./CustomerDetails.module.css";
const CustomerDetails = () => {
  return (
    <div className={styles.customerDetails}>
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
              src="/icbaselinerefresh.svg"
            />
            <div className={styles.refresh}>Refresh</div>
          </div>
          <img className={styles.searchIconCopy} alt="" />
        </div>
        <div className={styles.nav}>
          <div className={styles.navChild} />
          <div className={styles.navChild} />
          <div className={styles.navChild} />
        </div>
        <img
          className={styles.icons8Notifications642}
          alt=""
          src="/icons8notifications64-2@2x.png"
        />
      </div>
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
              src="/icbaselinerefresh.svg"
            />
            <div className={styles.refresh}>Refresh</div>
          </div>
          <img className={styles.searchIconCopy} alt="" />
        </div>
        <div className={styles.nav}>
          <div className={styles.navChild} />
          <div className={styles.navChild} />
          <div className={styles.navChild} />
        </div>
        <img
          className={styles.icons8Notifications642}
          alt=""
          src="/icons8notifications64-2@2x.png"
        />
      </div>
      <div className={styles.customerDetailsChild} />
      <div className={styles.rectangleParent}>
        <div className={styles.instanceChild} />
        <div className={styles.mdihomeParent}>
          <img className={styles.mdihomeIcon} alt="" src="/mdihome.svg" />
          <div className={styles.home}>Home</div>
        </div>
        <div className={styles.inventoryParent}>
          <div className={styles.inventory}>Inventory</div>
          <img
            className={styles.mdihomeIcon}
            alt=""
            src="/mdiformatlistbulletedsquare.svg"
          />
        </div>
        <div className={styles.mdiaccountParent}>
          <img className={styles.mdihomeIcon} alt="" src="/mdiaccount.svg" />
          <div className={styles.inventory}>Customers</div>
        </div>
        <div className={styles.faSolidfileInvoiceDollarParent}>
          <img
            className={styles.faSolidfileInvoiceDollarIcon}
            alt=""
            src="/fasolidfileinvoicedollar.svg"
          />
          <div className={styles.transactions}>Warehouse</div>
        </div>
      </div>
      <div className={styles.username}>
        <div className={styles.rectangle} />
        <div className={styles.firstName}>First Name</div>
      </div>
      <div className={styles.details}>{`Details `}</div>
      <div className={styles.orders}>Orders</div>
      <div className={styles.customerName}>Customer Name :</div>
      <div className={styles.username1}>
        <div className={styles.rectangle1} />
        <div className={styles.emailId}>{`Email Id `}</div>
      </div>
      <div className={styles.emailId1}>Email Id :</div>
      <div className={styles.username2}>
        <div className={styles.rectangle2} />
        <div className={styles.phoneNumber}>{`Phone Number `}</div>
        <div className={styles.phoneNumber1}>Phone Number :</div>
      </div>
      <div className={styles.username3}>
        <div className={styles.rectangle3} />
        <div className={styles.customerAddress}>Customer Address</div>
        <div className={styles.customerAddress1}>Customer Address:</div>
      </div>
      <div className={styles.username4}>
        <div className={styles.rectangle} />
        <div className={styles.firstName}>Last Name</div>
      </div>
    </div>
  );
};

export default CustomerDetails;
