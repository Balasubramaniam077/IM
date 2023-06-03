import styles from "./InventaryNear.module.css";
const InventaryNear = () => {
  return (
    <div className={styles.inventaryNear}>
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
        <div className={styles.nav}>
          <div className={styles.navChild} />
          <div className={styles.navChild} />
          <div className={styles.navChild} />
        </div>
      </div>
      <div className={styles.nav}>
        <div className={styles.navChild} />
        <div className={styles.navChild} />
        <div className={styles.navChild} />
      </div>
      <div className={styles.rectangleParent}>
        <div className={styles.instanceChild} />
        <div className={styles.mdihomeParent}>
          <img className={styles.mdihomeIcon} alt="" src="/mdihome1.svg" />
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
          <img className={styles.mdihomeIcon} alt="" src="/mdiaccount1.svg" />
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
      <img
        className={styles.icons8Notifications642}
        alt=""
        src="/icons8notifications64-2@2x.png"
      />
      <b className={styles.all}>All</b>
      <b className={styles.nearExpiry}>Near Expiry</b>
      <div className={styles.inventaryNearChild} />
      <div className={styles.instanceParent}>
        <div className={styles.exportToExcelWrapper}>
          <div className={styles.exportToExcel}>Export to excel</div>
        </div>
        <div className={styles.exportToExcelWrapper}>
          <div className={styles.exportToExcel}>Import Orders</div>
        </div>
        <div className={styles.instanceGroup}>
          <img className={styles.instanceItem} alt="" src="/group-1.svg" />
          <div className={styles.exportToExcel}>New Product</div>
        </div>
      </div>
      <div className={styles.inventaryNearInner}>
        <div className={styles.rectangleGroup}>
          <div className={styles.groupChild} />
          <div className={styles.groupItem} />
          <div className={styles.groupInner} />
          <div className={styles.groupChild1} />
          <div className={styles.groupChild2} />
          <div className={styles.groupChild3} />
          <div className={styles.groupChild4} />
          <b className={styles.product}>{`Product `}</b>
          <b className={styles.items}>Items</b>
          <b className={styles.daysLeft}>Days Left</b>
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
          <div className={styles.div5}>10</div>
          <div className={styles.div6}>3</div>
          <div className={styles.div7}>12</div>
          <div className={styles.div8}>1</div>
          <div className={styles.div9}>2</div>
        </div>
      </div>
    </div>
  );
};

export default InventaryNear;
