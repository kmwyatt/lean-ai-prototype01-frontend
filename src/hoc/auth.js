import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { authUser } from "../store/modules/user";

export default function Auth(SpecificComponent, option, adminRoute = null) {
  // null => 아무나 출입이 가능한 페이지
  // true => 로그인한 유저만 출입이 가능한 페이지
  // false => 로그인한 유저는 출입 불가능한 페이지

  function AuthenticationCheck(props) {
    const dispatch = useDispatch();

    useEffect(() => {
      dispatch(authUser()).then((res) => {
        console.log(res);
        if (!res.payload.isAuth) {
          // 로그인 하지 않은 상태
          if (option === true) {
            props.history.push("/login");
            alert("로그인이 필요합니다.");
          }
        } else {
          // 로그인 한 상태
          if (adminRoute && !res.payload.isAdmin) {
            props.history.push("/");
            alert("권한이 없습니다.");
          } else {
            if (option === false) {
              alert("이미 로그인이 되어있습니다.");
              props.history.push("/");
            }
          }
        }
      });
    }, []);

    return <SpecificComponent />;
  }

  return AuthenticationCheck;
}
