import styles from "./DashBoard.module.css";
const DashBoard = () => {
  return (
    <div className={styles.dashboard}>
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
          <img className={styles.mdihomeIcon} alt="" src="/mdihome2.svg" />
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
          <img className={styles.mdihomeIcon} alt="" src="/mdiaccount2.svg" />
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
      <div className={styles.section}>
        <div className={styles.section1}>
          <div className={styles.someDataCardParent}>
            <div className={styles.someDataCard}>
              <div className={styles.revenue}>Revenue</div>
              <div className={styles.image2Parent}>
                <img
                  className={styles.image2Icon}
                  alt=""
                  src="/image-2@2x.png"
                />
                <div className={styles.antDesignplusOutlinedParent}>
                  <img
                    className={styles.icbaselineRefreshIcon}
                    alt=""
                    src="/antdesignplusoutlined.svg"
                  />
                  <div className={styles.div}>30,000</div>
                </div>
              </div>
            </div>
            <div className={styles.someDataCard}>
              <div className={styles.revenue}>Sales Return</div>
              <div className={styles.image2Parent}>
                <img
                  className={styles.image2Icon}
                  alt=""
                  src="/image-21@2x.png"
                />
                <div className={styles.antDesignplusOutlinedParent}>
                  <img
                    className={styles.icbaselineRefreshIcon}
                    alt=""
                    src="/antdesignplusoutlined1.svg"
                  />
                  <div className={styles.div}>30,000</div>
                </div>
              </div>
            </div>
            <div className={styles.someDataCard}>
              <div className={styles.revenue}>Purchase</div>
              <div className={styles.image2Parent}>
                <img
                  className={styles.image2Icon}
                  alt=""
                  src="/image-22@2x.png"
                />
                <div className={styles.antDesignplusOutlinedParent}>
                  <img
                    className={styles.icbaselineRefreshIcon}
                    alt=""
                    src="/antdesignplusoutlined2.svg"
                  />
                  <div className={styles.div}>30,000</div>
                </div>
              </div>
            </div>
            <div className={styles.someDataCard}>
              <div className={styles.revenue}>Income</div>
              <div className={styles.image2Parent}>
                <img
                  className={styles.image2Icon}
                  alt=""
                  src="/image-2@2x.png"
                />
                <div className={styles.antDesignplusOutlinedParent}>
                  <img
                    className={styles.icbaselineRefreshIcon}
                    alt=""
                    src="/antdesignplusoutlined.svg"
                  />
                  <div className={styles.div}>30,000</div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.dashboardChartContainer}>
            <div className={styles.dashboardChartContainerInner}>
              <div className={styles.groupParent}>
                <div className={styles.rectangleGroup}>
                  <div className={styles.groupChild} />
                  <div className={styles.groupItem} />
                </div>
                <div className={styles.rectangleGroup}>
                  <div className={styles.groupInner} />
                  <div className={styles.groupChild1} />
                </div>
                <div className={styles.rectangleGroup}>
                  <div className={styles.groupInner} />
                  <div className={styles.groupChild1} />
                </div>
                <div className={styles.rectangleGroup}>
                  <div className={styles.groupInner} />
                  <div className={styles.groupChild1} />
                </div>
                <div className={styles.rectangleParent2}>
                  <div className={styles.groupChild6} />
                  <div className={styles.groupChild7} />
                </div>
                <div className={styles.rectangleParent2}>
                  <div className={styles.groupChild8} />
                  <div className={styles.groupChild9} />
                </div>
              </div>
            </div>
            <div className={styles.pieChart}>
              <div className={styles.textComponent}>
                <div className={styles.overallSummary}>
                  Top selling Products
                </div>
              </div>
              <div className={styles.pieChartChild} />
            </div>
          </div>
          <div className={styles.dashboardChartContainer1}>
            <div className={styles.frameParent}>
              <div className={styles.stockAlertWrapper}>
                <div className={styles.overallSummary}>Stock Alert</div>
              </div>
              <div className={styles.orderIdParent}>
                <div className={styles.orderId}>order ID</div>
                <div className={styles.date}>Date</div>
                <div className={styles.date}>Quantity</div>
                <div className={styles.date}>Alert amt.</div>
                <div className={styles.date}>Status</div>
              </div>
              <div className={styles.orderIdGroup}>
                <div className={styles.orderId1}>order ID</div>
                <div className={styles.date1}>Date</div>
                <div className={styles.date1}>Quantity</div>
                <div className={styles.date1}>Alert amt.</div>
                <div className={styles.date1}>Status</div>
              </div>
              <div className={styles.orderIdGroup}>
                <div className={styles.orderId1}>order ID</div>
                <div className={styles.date1}>Date</div>
                <div className={styles.date1}>Quantity</div>
                <div className={styles.date1}>Alert amt.</div>
                <div className={styles.date1}>Status</div>
              </div>
              <div className={styles.orderIdGroup}>
                <div className={styles.orderId1}>order ID</div>
                <div className={styles.date1}>Date</div>
                <div className={styles.date1}>Quantity</div>
                <div className={styles.date1}>Alert amt.</div>
                <div className={styles.date1}>Status</div>
              </div>
            </div>
            <div className={styles.frameGroup}>
              <div className={styles.stockAlertWrapper}>
                <div className={styles.overallSummary}>
                  Top selling Products
                </div>
              </div>
              <div className={styles.orderIdParent}>
                <div className={styles.orderId}>order ID</div>
                <div className={styles.date4}>Date</div>
                <div className={styles.date}>Quantity</div>
                <div className={styles.date}>Alert amt.</div>
                <div className={styles.date4}>Status</div>
              </div>
              <div className={styles.orderIdGroup}>
                <div className={styles.orderId1}>order ID</div>
                <div className={styles.date5}>Date</div>
                <div className={styles.date1}>Quantity</div>
                <div className={styles.date1}>Alert amt.</div>
                <div className={styles.date5}>Status</div>
              </div>
              <div className={styles.orderIdGroup}>
                <div className={styles.orderId1}>order ID</div>
                <div className={styles.date5}>Date</div>
                <div className={styles.date1}>Quantity</div>
                <div className={styles.date1}>Alert amt.</div>
                <div className={styles.date5}>Status</div>
              </div>
              <div className={styles.orderIdGroup}>
                <div className={styles.orderId1}>order ID</div>
                <div className={styles.date5}>Date</div>
                <div className={styles.date1}>Quantity</div>
                <div className={styles.date1}>Alert amt.</div>
                <div className={styles.date5}>Status</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashBoard;
