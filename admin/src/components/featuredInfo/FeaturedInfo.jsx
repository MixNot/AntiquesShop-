import "./featuredInfo.css";
import { ArrowDownward, ArrowUpward } from "@material-ui/icons";
import { useEffect, useState } from "react";
import { userRequest } from "../../requestMethods";

export default function FeaturedInfo() {
  const [income, setIncome] = useState([]);
  const [perc, setPerc] = useState(0);

  useEffect(() => {
    const getIncome = async () => {
      try {
        const res = await userRequest.get("orders/income");
        setIncome(res.data);
        setPerc((res.data[1].total * 100) / res.data[0].total - 100);
      } catch {}
    };
    getIncome();
  }, []);

  return (
    <div className="featured">
      <div className="featuredItem">
        <span className="featuredTitle">Доход</span>
        <div className="featuredMoneyContainer">
          <span className="featuredMoney">BYN {income[1]?.total}</span>
          <span className="featuredMoneyRate">
            %{Math.floor(perc)}{" "}
            {perc < 0 ? (
              <ArrowDownward className="featuredIcon negative" />
            ) : (
              <ArrowUpward className="featuredIcon" />
            )}
          </span>
        </div>
        <span className="featuredSub">По сравнению с прошлым месяцем</span>
      </div>
      <div className="featuredItem">
        <span className="featuredTitle">Продажи</span>
        <div className="featuredMoneyContainer">
          <span className="featuredMoney">BYN 4,415</span>
          <span className="featuredMoneyRate">
            -1.4 <ArrowDownward className="featuredIcon negative" />
          </span>
        </div>
        <span className="featuredSub">По сравнению с прошлым месяцем</span>
      </div>
      <div className="featuredItem">
        <span className="featuredTitle">Цена</span>
        <div className="featuredMoneyContainer">
          <span className="featuredMoney">BYN 2,225</span>
          <span className="featuredMoneyRate">
            +2.4 <ArrowUpward className="featuredIcon" />
          </span>
        </div>
        <span className="featuredSub">По сравнению с прошлым месяцем</span>
      </div>
    </div>
  );
}
