import styles from "./ProductUpdate.module.css";
const ProductUpdate = () => {
  return (
    <div className={styles.productUpdate}>
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
        <img
          className={styles.icons8Notifications642}
          alt=""
          src="/icons8notifications64-2@2x.png"
        />
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
      <div className={styles.vectorParent}>
        <img className={styles.frameChild} alt="" src="/rectangle-6.svg" />
        <div className={styles.frameItem} />
        <b className={styles.updateProduct}>Update Product</b>
        <b className={styles.product}>Product</b>
        <div className={styles.rectangleGroup}>
          <div className={styles.groupChild} />
          <b className={styles.update}>Update</b>
        </div>
        <div className={styles.rectangleContainer}>
          <div className={styles.groupItem} />
          <div className={styles.name}>Name</div>
        </div>
        <div className={styles.groupDiv}>
          <div className={styles.groupItem} />
          <div className={styles.name}>MRP (₹)</div>
        </div>
        <div className={styles.typeParent}>
          <div className={styles.type}>Type</div>
          <div className={styles.loose}>Loose</div>
          <div className={styles.packed}>Packed</div>
          <img
            className={styles.radioButtonOffHover}
            alt=""
            src="/radio-button-off-hover.svg"
          />
          <img
            className={styles.radioButtonOnHover}
            alt=""
            src="/radio-button-on-hover.svg"
          />
        </div>
      </div>
    </div>
  );
};

export default ProductUpdate;
