import styles from "./Inventory.module.css";
const Inventory = () => {
  return (
    <div className={styles.inventory}>
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
        <img
          className={styles.icons8Notifications641}
          alt=""
          src="/icons8notifications64-2@2x.png"
        />
      </div>
      <div className={styles.nav}>
        <div className={styles.navChild} />
        <div className={styles.navChild} />
        <div className={styles.navChild} />
      </div>
      <div className={styles.rectangleParent}>
        <div className={styles.instanceChild} />
        <div className={styles.mdihomeParent}>
          <img className={styles.mdihomeIcon} alt="" src="/mdihome.svg" />
          <div className={styles.home}>Home</div>
        </div>
        <div className={styles.inventoryParent}>
          <div className={styles.employees}>Inventory</div>
          <img
            className={styles.mdihomeIcon}
            alt=""
            src="/mdiformatlistbulletedsquare1.svg"
          />
        </div>
        <div className={styles.mdiaccountParent}>
          <img className={styles.mdihomeIcon} alt="" src="/mdiaccount3.svg" />
          <div className={styles.employees}>Customers</div>
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
      <b className={styles.all}>All</b>
      <b className={styles.nearExpiry}>Near Expiry</b>
      <div className={styles.groupParent}>
        <div className={styles.rectangleGroup}>
          <div className={styles.groupChild} />
          <div className={styles.groupItem} />
          <div className={styles.groupInner} />
          <div className={styles.lineDiv} />
          <div className={styles.groupChild1} />
          <div className={styles.groupChild2} />
          <div className={styles.groupChild3} />
          <div className={styles.groupChild4} />
          <b className={styles.product}>{`Product `}</b>
          <b className={styles.items}>Items</b>
          <b className={styles.price}>Price</b>
          <div className={styles.patBlack}>Pat Black</div>
          <div className={styles.angelJones}>Angel Jones</div>
          <div className={styles.maxEdwards}>Max Edwards</div>
          <div className={styles.bruceFox}>Bruce Fox</div>
          <div className={styles.devonFisher}>Devon Fisher</div>
          <div className={styles.div}>25</div>
          <div className={styles.div1}>120</div>
          <div className={styles.div2}>15</div>
          <div className={styles.div3}>66</div>
          <div className={styles.div4}>3</div>
          <div className={styles.div5}>₹450.00</div>
          <div className={styles.div6}>₹325.00</div>
          <div className={styles.div7}>₹25.00</div>
          <div className={styles.div8}>₹1500.00</div>
          <div className={styles.div9}>₹999.00</div>
        </div>
        <img
          className={styles.icbaselineDeleteIcon}
          alt=""
          src="/icbaselinedelete.svg"
        />
        <img
          className={styles.icbaselineEditIcon}
          alt=""
          src="/icbaselineedit.svg"
        />
        <img
          className={styles.icbaselineDeleteIcon1}
          alt=""
          src="/icbaselinedelete.svg"
        />
        <img
          className={styles.icbaselineDeleteIcon2}
          alt=""
          src="/icbaselinedelete.svg"
        />
        <img
          className={styles.icbaselineDeleteIcon3}
          alt=""
          src="/icbaselinedelete.svg"
        />
        <img
          className={styles.icbaselineDeleteIcon4}
          alt=""
          src="/icbaselinedelete.svg"
        />
        <img
          className={styles.icbaselineEditIcon1}
          alt=""
          src="/icbaselineedit.svg"
        />
        <img
          className={styles.icbaselineEditIcon2}
          alt=""
          src="/icbaselineedit.svg"
        />
        <img
          className={styles.icbaselineEditIcon3}
          alt=""
          src="/icbaselineedit.svg"
        />
        <img
          className={styles.icbaselineEditIcon4}
          alt=""
          src="/icbaselineedit.svg"
        />
      </div>
      <div className={styles.inStockParent}>
        <div className={styles.inStock}>In stock</div>
        <div className={styles.instanceParent}>
          <div className={styles.exportToExcelWrapper}>
            <div className={styles.exportToExcel}>Export to excel</div>
          </div>
          <div className={styles.exportToExcelWrapper}>
            <div className={styles.exportToExcel}>Import Orders</div>
          </div>
          <div className={styles.instanceGroup}>
            <img className={styles.instanceItem} alt="" src="/group-11.svg" />
            <div className={styles.exportToExcel}>New Stock</div>
          </div>
        </div>
      </div>
      <div className={styles.inventoryChild} />
      <div className={styles.inventoryItem} />
      <div className={styles.inventoryChild} />
    </div>
  );
};

export default Inventory;
