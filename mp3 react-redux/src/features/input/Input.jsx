import React, { useState } from "react";
import Logo from "../../assets/logo.png";
import Search from "../../assets/search.png";
import { FetchApi } from "./inputSlice";
import { useDispatch, useSelector } from "react-redux";
import Output from "../output/output";

const Input = () => {
  const [textvalue, setTextValue] = useState("");
  const dispatch = useDispatch();
  const value = useSelector((state) => state.music.value);
  const [query, setQuery] = useState(false);

  const handelSubmit = (e) => {
    e.preventDefault();
    setQuery(true);
    e.target.inputText.value = "";
    if (textvalue.length > 35) {
      dispatch(FetchApi(textvalue.slice(32)));
    } else {
      dispatch(FetchApi(textvalue.slice(17)));
    }
  };
  return (
    <>
      <div className="main_body makeCentralDiv">
        <div className="input-Container">
          <img src={Logo} className=" w-[120px] makeAlignCentral " alt="" />
          <form onSubmit={handelSubmit} className=" mt-4">
            <input
              name="inputText"
              onChange={(e) => setTextValue(e.target.value)}
              className=" rounded-xl  w-[250px] ml-[40px]"
              type="text"
            />
            <button>
              <img
                className="w-[30px] translate-y-[7px] ml-2"
                src={Search}
                alt=""
              />
            </button>
          </form>
          <button> </button>

          {query ? (
            <>
              {value.loading ? (
                <>
                    <Output />
                </>
              ) : (
                <>
                  <div className=" mt-10 flex justify-center">
                    <div
                      className="  inline-block h-10 w-10 animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em]  text-white motion-reduce:animate-[spin_1.5s_linear_infinite]"
                      role="status"
                    ></div>
                  </div>
              
                </>
              )}
            </>
          ) : (
            <></>
          )}
        </div>
      </div>
    </>
  );
};

export default Input;
