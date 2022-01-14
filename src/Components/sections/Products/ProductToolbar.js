import React, { useState } from "react";
import { BiSearchAlt, BiReset } from "react-icons/bi";
import { GrClose } from "react-icons/gr";
import { connect } from "react-redux";
import { mapStateToProps } from "../../../redux/store";
import {
 setShowProductToolbarAction,
 setQueryObjectAction,
} from "../../../redux/actions";

const ProductToolbar = ({ showProductToolbar, dispatch }) => {
 const [brand, setBrand] = useState("");
 const [search, setSearch] = useState("");
 const [type, setType] = useState("");
 const [nameAtoZ, setNameAtoZ] = useState(true);

 const queryObjectSubmitHandler = (e) => {
  e.preventDefault();
  const tempObj = {};
  if (brand.length > 0) {
   tempObj.brand = brand;
  }

  if (search.length > 0) {
   tempObj.search = search;
  }

  if (type.length > 1) {
   tempObj.type = type;
  }

  tempObj.sort = `${nameAtoZ ? "name" : "-name"}`;

  dispatch(setQueryObjectAction({ ...tempObj }));
  dispatch(setShowProductToolbarAction(false));
  setBrand("");
  setSearch("");
  setType("");
 };

 const resetSearchHandler = (e) => {
  e.preventDefault();
  setBrand("");
  setSearch("");
  setType("");
  setNameAtoZ(true);
  queryObjectSubmitHandler(e);
 };

 return (
  <aside className={`productsToolbar${!showProductToolbar ? " hidden" : ""}`}>
   <button
    className="closeProductToolbarBtn"
    onClick={() => dispatch(setShowProductToolbarAction(false))}
   >
    <GrClose />
   </button>

   <form>
    <div className="formRow">
     <input
      type="text"
      name="search"
      id="search"
      value={search}
      placeholder="Product Name"
      onChange={(e) => setSearch(e.target.value)}
     />
    </div>
    <h4>Brand</h4>
    <div className="formRow">
     <label htmlFor="signia">Signia</label>
     <input
      type="radio"
      name="signia"
      id="signia"
      checked={brand === "signia"}
      onChange={() => setBrand("signia")}
     />
     <label htmlFor="rexton">Rexton</label>
     <input
      type="radio"
      name="rexton"
      id="rexton"
      checked={brand === "rexton"}
      disabled={true}
      onChange={() => setBrand("rexton")}
     />
     <label htmlFor="aAndM">A&amp;M</label>
     <input
      type="radio"
      name="aAndM"
      id="aAndM"
      checked={brand === "aAndM"}
      disabled={true}
      onChange={() => setBrand("aAndM")}
     />
    </div>
    <h4>Type</h4>
    <div className="formRow">
     <label htmlFor="ric">RIC</label>
     <input
      type="radio"
      name="ric"
      id="ric"
      checked={type === "ric"}
      onChange={() => setType("ric")}
     />
     <label htmlFor="cic">CIC</label>
     <input
      type="radio"
      name="cic"
      id="cic"
      checked={type === "cic"}
      onChange={() => setType("cic")}
     />
     <label htmlFor="ite">ITE</label>
     <input
      type="radio"
      name="ite"
      id="ite"
      checked={type === "ite"}
      onChange={() => setType("ite")}
     />
     <label htmlFor="itc">ITC</label>
     <input
      type="radio"
      name="itc"
      id="itc"
      checked={type === "itc"}
      onChange={() => setType("itc")}
     />
     <label htmlFor="bte">BTE</label>
     <input
      type="radio"
      name="bte"
      id="bte"
      checked={type === "bte"}
      onChange={() => setType("bte")}
     />
    </div>
    <h4>Sort</h4>
    <div className="formRow">
     <label htmlFor="nameAtoZ">Name : A to Z</label>
     <input
      type="checkbox"
      name="nameAtoZ"
      id="nameAtoZ"
      checked={nameAtoZ}
      onChange={(e) => setNameAtoZ(e.target.checked)}
     />
     <label htmlFor="nameZtoA"> Name : Z to A</label>
     <input
      type="checkbox"
      name="nameZtoA"
      id="nameZtoA"
      checked={!nameAtoZ}
      onChange={(e) => setNameAtoZ(!e.target.checked)}
     />
    </div>
    <div className="searchAndResetBtnContainer">
     <button className="searchBtn" onClick={(e) => queryObjectSubmitHandler(e)}>
      <BiSearchAlt />
     </button>
     <button
      className="resetSearchButton"
      onClick={(e) => resetSearchHandler(e)}
     >
      <BiReset />
     </button>
    </div>
   </form>
  </aside>
 );
};

export default connect(mapStateToProps)(ProductToolbar);
