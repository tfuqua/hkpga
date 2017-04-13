import React from 'react';

function merit(props) {
  return (
    <div className="container-fluid" id="merit-page">
      <h3>Open Division </h3>

      {props.lang === 'en'
        ? <table className="table table-striped">
            <tbody>
              <tr>
                <th scope="col">POS</th>
                <th scope="col">PLAYER</th>
                <th scope="col" title="6-7 April, 2009, KSC Public Golf Course - North Course">LEG 1</th>
                <th scope="col" title="4 May, 2009, Hong Kong Golf Club">LEG 2</th>
                <th scope="col" title="1-2 June, 2009, Clearwater Bay Golf Club">LEG 3</th>
                <th scope="col" title="1 September, 2009, KSC Public Golf Course - North Course">LEG 4</th>
                <th scope="col" title="28 September, 2009, Discovery Bay Golf Club">LEG 5</th>
                <th scope="col" title="19-20 October, 2009, Yinli Foreign Investors Golf Club">Yinli Classic</th>
                <th scope="col">TOTAL</th>
              </tr>
              <tr>
                <td className="odd">1</td>
                <td className="odd">DAVID FREEMAN</td>
                <td className="odd">20000</td>
                <td className="odd">3500</td>
                <td className="odd">10000</td>
                <td className="odd">2600</td>
                <td className="odd">1237.5</td>
                <td className="odd">2800</td>
                <td className="odd">40137.5</td>
              </tr>
              <tr>
                <td className="even">2</td>
                <td className="even">LEE MAN LOK</td>
                <td className="even">12000</td>
                <td className="even">1312.5</td>
                <td className="even">20000</td>
                <td className="even">1600</td>
                <td className="even">1312.5</td>
                <td className="even">2875</td>
                <td className="even">39100</td>
              </tr>
              <tr>
                <td className="odd">3</td>
                <td className="odd">JOVICK LEE</td>
                <td className="odd">5200</td>
                <td className="odd">3500</td>
                <td className="odd">10000</td>
                <td className="odd">1219</td>
                <td className="odd">2200</td>
                <td className="odd">16000</td>
                <td className="odd">38119</td>
              </tr>
              <tr>
                <td className="even">4</td>
                <td className="even">DEREK FUNG</td>
                <td className="even">8000</td>
                <td className="even">10000</td>
                <td className="even">2700</td>
                <td className="even">10000</td>
                <td className="even">2200</td>
                <td className="even">-</td>
                <td className="even">32900</td>
              </tr>
              <tr>
                <td className="odd">5</td>
                <td className="odd">WONG WOON MAN</td>
                <td className="odd">3850</td>
                <td className="odd">6000</td>
                <td className="odd">2850</td>
                <td className="odd">1400</td>
                <td className="odd">10000</td>
                <td className="odd">6333.33</td>
                <td className="odd">30433.33</td>
              </tr>
              <tr>
                <td className="even">6</td>
                <td className="even">JAMES STEWART</td>
                <td className="even">5200</td>
                <td className="even">2500</td>
                <td className="even">2700</td>
                <td className="even">2012.5</td>
                <td className="even">1681.25</td>
                <td className="even">16000</td>
                <td className="even">30093.75</td>
              </tr>
              <tr>
                <td className="odd">7</td>
                <td className="odd">TANG MAN KEE</td>
                <td className="odd">1925</td>
                <td className="odd">1387.5</td>
                <td className="odd">4800</td>
                <td className="odd">2600</td>
                <td className="odd">2750</td>
                <td className="odd">6333.33</td>
                <td className="odd">19795.83</td>
              </tr>
              <tr>
                <td className="even">8</td>
                <td className="even">WILSON CHOY</td>
                <td className="even">2170</td>
                <td className="even">1312.5</td>
                <td className="even">1365</td>
                <td className="even">5000</td>
                <td className="even">5000</td>
                <td className="even">4200</td>
                <td className="even">19047.5</td>
              </tr>
              <tr>
                <td className="odd">9</td>
                <td className="odd">TANG SHING CHI</td>
                <td className="odd">3850</td>
                <td className="odd">1312.5</td>
                <td className="odd">3850</td>
                <td className="odd">1032.5</td>
                <td className="odd">1400</td>
                <td className="odd">6333.33</td>
                <td className="odd">17778.33</td>
              </tr>
              <tr>
                <td className="even">10</td>
                <td className="even">FUNG WAI KIT</td>
                <td className="even">2470</td>
                <td className="even">945</td>
                <td className="even">1750</td>
                <td className="even">1325</td>
                <td className="even">5000</td>
                <td className="even">3516.66</td>
                <td className="even">15006.66</td>
              </tr>
              <tr>
                <td className="odd">11</td>
                <td className="odd">CHENG KA YIU</td>
                <td className="odd">1435</td>
                <td className="odd">1205</td>
                <td className="odd">6000</td>
                <td className="odd">1325</td>
                <td className="odd">1400</td>
                <td className="odd">2410</td>
                <td className="odd">13775</td>
              </tr>
              <tr>
                <td className="even">12</td>
                <td className="even">ANDREW GOOD</td>
                <td className="even">2825</td>
                <td className="even">-</td>
                <td className="even">3850</td>
                <td className="even">717.5</td>
                <td className="even">1681.25</td>
                <td className="even">4600</td>
                <td className="even">13673.75</td>
              </tr>
              <tr>
                <td className="odd">13</td>
                <td className="odd">SUNG HANG MAN</td>
                <td className="odd">5200</td>
                <td className="odd">1387.5</td>
                <td className="odd">2850</td>
                <td className="odd">1032.5</td>
                <td className="odd">787.5</td>
                <td className="odd">2205</td>
                <td className="odd">13462.5</td>
              </tr>
              <tr>
                <td className="even">14</td>
                <td className="even">FUNG WAI KUEN</td>
                <td className="even">2170</td>
                <td className="even">1102.5</td>
                <td className="even">2850</td>
                <td className="even">2600</td>
                <td className="even">1681.25</td>
                <td className="even">2875</td>
                <td className="even">13278.75</td>
              </tr>
              <tr>
                <td className="odd">15</td>
                <td className="odd">DUCKY TANG</td>
                <td className="odd">3050</td>
                <td className="odd">2018.75</td>
                <td className="odd">2525</td>
                <td className="odd">1400</td>
                <td className="odd">787.5</td>
                <td className="odd">2625</td>
                <td className="odd">12406.25</td>
              </tr>
              <tr>
                <td className="even">16</td>
                <td className="even">LAM CHUN CHEUNG</td>
                <td className="even">1295</td>
                <td className="even">665</td>
                <td className="even">1960</td>
                <td className="even">5000</td>
                <td className="even">1400</td>
                <td className="even">1995</td>
                <td className="even">12315</td>
              </tr>
              <tr>
                <td className="odd">17</td>
                <td className="odd">CHEUNG KIN PING</td>
                <td className="odd">3050</td>
                <td className="odd">945</td>
                <td className="odd">3850</td>
                <td className="odd">1600</td>
                <td className="odd">-</td>
                <td className="odd">2410</td>
                <td className="odd">11855</td>
              </tr>
              <tr>
                <td className="even">18</td>
                <td className="even">VAUGHAN MASON</td>
                <td className="even">2675</td>
                <td className="even">945</td>
                <td className="even">3200</td>
                <td className="even">1600</td>
                <td className="even">-</td>
                <td className="even">2625</td>
                <td className="even">11045</td>
              </tr>
              <tr>
                <td className="odd">19</td>
                <td className="odd">ERNIE LEE</td>
                <td className="odd">2675</td>
                <td className="odd">1032.5</td>
                <td className="odd">2205</td>
                <td className="odd">1219</td>
                <td className="odd">787.5</td>
                <td className="odd">2625</td>
                <td className="odd">10544</td>
              </tr>
              <tr>
                <td className="even">20</td>
                <td className="even">ERIC MA</td>
                <td className="even">2170</td>
                <td className="even">665</td>
                <td className="even">2700</td>
                <td className="even">840</td>
                <td className="even">1312.5</td>
                <td className="even">2750</td>
                <td className="even">10437.5</td>
              </tr>
              <tr>
                <td className="odd">21</td>
                <td className="odd">PAUL RILEY</td>
                <td className="odd">3850</td>
                <td className="odd">1312.5</td>
                <td className="odd">1960</td>
                <td className="odd">420</td>
                <td className="odd">2750</td>
                <td className="odd">-</td>
                <td className="odd">10292.5</td>
              </tr>
              <tr>
                <td className="even">22</td>
                <td className="even">LIU KAI MUNG</td>
                <td className="even">2170</td>
                <td className="even">-</td>
                <td className="even">2415</td>
                <td className="even">1032.5</td>
                <td className="even">1137.5</td>
                <td className="even">3516.66</td>
                <td className="even">10271.66</td>
              </tr>
              <tr>
                <td className="odd">23</td>
                <td className="odd">DANNY KAN</td>
                <td className="odd">2675</td>
                <td className="odd">507.5</td>
                <td className="odd">1575</td>
                <td className="odd">630</td>
                <td className="odd">1312.5</td>
                <td className="odd">2625</td>
                <td className="odd">9325</td>
              </tr>
              <tr>
                <td className="even">24</td>
                <td className="even">KEVIN HIND</td>
                <td className="even">1925</td>
                <td className="even">1205</td>
                <td className="even">4800</td>
                <td className="even">1325</td>
                <td className="even">-</td>
                <td className="even">-</td>
                <td className="even">9255</td>
              </tr>
              <tr>
                <td className="odd">25</td>
                <td className="odd">WONG HOI KIN</td>
                <td className="odd">1715</td>
                <td className="odd">1437.5</td>
                <td className="odd">2600</td>
                <td className="odd">840</td>
                <td className="odd">997.5</td>
                <td className="odd">1575</td>
                <td className="odd">9165</td>
              </tr>
              <tr>
                <td className="even">26</td>
                <td className="even">LI CHUN MAN</td>
                <td className="even">2675</td>
                <td className="even">1437.5</td>
                <td className="even">1085</td>
                <td className="even">840</td>
                <td className="even">1312.5</td>
                <td className="even">1750</td>
                <td className="even">9100</td>
              </tr>
              <tr>
                <td className="odd">27</td>
                <td className="odd">WONG CHING KWAN</td>
                <td className="odd">2470</td>
                <td className="odd">1205</td>
                <td className="odd">1575</td>
                <td className="odd">455</td>
                <td className="odd">1137.5</td>
                <td className="odd">2100</td>
                <td className="odd">8942.5</td>
              </tr>
              <tr>
                <td className="even">28</td>
                <td className="even">SHUM HING NAM</td>
                <td className="even">2470</td>
                <td className="even">665</td>
                <td className="even">1820</td>
                <td className="even">-</td>
                <td className="even">892.5</td>
                <td className="even">2410</td>
                <td className="even">8257.5</td>
              </tr>
              <tr>
                <td className="odd">29</td>
                <td className="odd">MA KIN MAN</td>
                <td className="odd">1575</td>
                <td className="odd">1032.5</td>
                <td className="odd">2205</td>
                <td className="odd">1219</td>
                <td className="odd">787.5</td>
                <td className="odd">1330</td>
                <td className="odd">8149</td>
              </tr>
              <tr>
                <td className="even">30</td>
                <td className="even">MAN HUNG LAP</td>
                <td className="even">1155</td>
                <td className="even">455</td>
                <td className="even">1575</td>
                <td className="even">1032.5</td>
                <td className="even">1681.25</td>
                <td className="even">1995</td>
                <td className="even">7893.75</td>
              </tr>
              <tr>
                <td className="odd">31</td>
                <td className="odd">TONY LEE</td>
                <td className="odd">1155</td>
                <td className="odd">665</td>
                <td className="odd">1575</td>
                <td className="odd">1032.5</td>
                <td className="odd">1237.5</td>
                <td className="odd">1750</td>
                <td className="odd">7415</td>
              </tr>
              <tr>
                <td className="even">32</td>
                <td className="even">JASON KWOK</td>
                <td className="even">-</td>
                <td className="even">665</td>
                <td className="even">2205</td>
                <td className="even">1219</td>
                <td className="even">997.5</td>
                <td className="even">2205</td>
                <td className="even">7291.5</td>
              </tr>
              <tr>
                <td className="odd">33</td>
                <td className="odd">MARK MOSSIP</td>
                <td className="odd">1820</td>
                <td className="odd">665</td>
                <td className="odd">1085</td>
                <td className="odd">490</td>
                <td className="odd">997.5</td>
                <td className="odd">1890</td>
                <td className="odd">6947.5</td>
              </tr>
              <tr>
                <td className="even">34</td>
                <td className="even">LIM CHOON SHIN</td>
                <td className="even">2825</td>
                <td className="even">805</td>
                <td className="even">-</td>
                <td className="even">1400</td>
                <td className="even">1137.5</td>
                <td className="even">-</td>
                <td className="even">6167.5</td>
              </tr>
              <tr>
                <td className="odd">35</td>
                <td className="odd">SAMMY NG</td>
                <td className="odd">2470</td>
                <td className="odd">507.5</td>
                <td className="odd">-</td>
                <td className="odd">717.5</td>
                <td className="odd">-</td>
                <td className="odd">2410</td>
                <td className="odd">6105</td>
              </tr>
              <tr>
                <td className="even">36</td>
                <td className="even">KAM HUI</td>
                <td className="even">1015</td>
                <td className="even">420</td>
                <td className="even">1190</td>
                <td className="even">630</td>
                <td className="even">1137.5</td>
                <td className="even">1470</td>
                <td className="even">5862.5</td>
              </tr>
              <tr>
                <td className="odd">&nbsp; </td>
                <td className="odd">&nbsp;</td>
                <td className="odd">&nbsp;</td>
                <td className="odd">&nbsp;</td>
                <td className="odd">&nbsp;</td>
                <td className="odd">&nbsp;</td>
                <td className="odd">&nbsp;</td>
                <td className="odd">&nbsp;</td>
                <td className="odd">&nbsp;</td>
              </tr>
              <tr>
                <td className="even">38</td>
                <td className="even">BRAD SCHADEWITZ</td>
                <td className="even">-</td>
                <td className="even">2018.75</td>
                <td className="even">-</td>
                <td className="even">-</td>
                <td className="even">-</td>
                <td className="even">3516.66</td>
                <td className="even">5535.41</td>
              </tr>
              <tr>
                <td className="odd">39</td>
                <td className="odd">CHEUNG KWAI HONG</td>
                <td className="odd">-</td>
                <td className="odd">857.5</td>
                <td className="odd">2205</td>
                <td className="odd">1219</td>
                <td className="odd">525</td>
                <td className="odd">-</td>
                <td className="odd">4806.5</td>
              </tr>
              <tr>
                <td className="even">40</td>
                <td className="even">STEPHEN HONG</td>
                <td className="even">1015</td>
                <td className="even">1205</td>
                <td className="even">1260</td>
                <td className="even">630</td>
                <td className="even">612.5</td>
                <td className="even">-</td>
                <td className="even">4722.5</td>
              </tr>
              <tr>
                <td className="odd">41</td>
                <td className="odd">ALEXANDER CHENG</td>
                <td className="odd">-</td>
                <td className="odd">1102.5</td>
                <td className="odd">1960</td>
                <td className="odd">840</td>
                <td className="odd">700</td>
                <td className="odd">-</td>
                <td className="odd">4602.5</td>
              </tr>
              <tr>
                <td className="even">42</td>
                <td className="even">TREVOR BALL</td>
                <td className="even">2170</td>
                <td className="even">2018.75</td>
                <td className="even">-</td>
                <td className="even">-</td>
                <td className="even">-</td>
                <td className="even">-</td>
                <td className="even">4188.75</td>
              </tr>
              <tr>
                <td className="odd">43</td>
                <td className="odd">RICHARD KAN</td>
                <td className="odd">-</td>
                <td className="odd">-</td>
                <td className="odd">2415</td>
                <td className="odd">-</td>
                <td className="odd">-</td>
                <td className="odd">1750</td>
                <td className="odd">4165</td>
              </tr>
              <tr>
                <td className="even">44</td>
                <td className="even">MICHAEL LONG</td>
                <td className="even">-</td>
                <td className="even">-</td>
                <td className="even">2525</td>
                <td className="even">-</td>
                <td className="even">892.5</td>
                <td className="even">-</td>
                <td className="even">3417.5</td>
              </tr>
              <tr>
                <td className="odd">45</td>
                <td className="odd">WONG HOI FUNG</td>
                <td className="odd">1575</td>
                <td className="odd">-</td>
                <td className="odd">-</td>
                <td className="odd">-</td>
                <td className="odd">-</td>
                <td className="odd">1575</td>
                <td className="odd">3150</td>
              </tr>
              <tr>
                <td className="even">46</td>
                <td className="even">DOMINIQUE BOULET</td>
                <td className="even">-</td>
                <td className="even">2018.75</td>
                <td className="even">-</td>
                <td className="even">1032.5</td>
                <td className="even">-</td>
                <td className="even">-</td>
                <td className="even">3051.25</td>
              </tr>
              <tr>
                <td className="odd">T47</td>
                <td className="odd">LAI WAI MAN</td>
                <td className="odd">910</td>
                <td className="odd">385</td>
                <td className="odd">980</td>
                <td className="odd">-</td>
                <td className="odd">490</td>
                <td className="odd">-</td>
                <td className="odd">2765</td>
              </tr>
              <tr>
                <td className="even">T47</td>
                <td className="even">TONG CHUN PO</td>
                <td className="even">-</td>
                <td className="even">857.5</td>
                <td className="even">1365</td>
                <td className="even">542.5</td>
                <td className="even">-</td>
                <td className="even">-</td>
                <td className="even">2765</td>
              </tr>
              <tr>
                <td className="odd">49</td>
                <td className="odd">LEE KWOK YAN</td>
                <td className="odd">-</td>
                <td className="odd">-</td>
                <td className="odd">-</td>
                <td className="odd">542.5</td>
                <td className="odd">665</td>
                <td className="odd">1260</td>
                <td className="odd">2467.5</td>
              </tr>
              <tr>
                <td className="even">50</td>
                <td className="even">GRANT GIBSON</td>
                <td className="even">-</td>
                <td className="even">-</td>
                <td className="even">-</td>
                <td className="even">2012.5</td>
                <td className="even">-</td>
                <td className="even">-</td>
                <td className="even">2012.5</td>
              </tr>
              <tr>
                <td className="odd">51</td>
                <td className="odd">KAM SUN</td>
                <td className="odd">1715</td>
                <td className="odd">-</td>
                <td className="odd">-</td>
                <td className="odd">-</td>
                <td className="odd">-</td>
                <td className="odd">-</td>
                <td className="odd">1715</td>
              </tr>
              <tr>
                <td className="even">52</td>
                <td className="even">SUNG SING</td>
                <td className="even">-</td>
                <td className="even">1600</td>
                <td className="even">-</td>
                <td className="even">-</td>
                <td className="even">-</td>
                <td className="even">-</td>
                <td className="even">1600</td>
              </tr>
              <tr>
                <td className="odd">53</td>
                <td className="odd">ALFREDO MORALES</td>
                <td className="odd">1435</td>
                <td className="odd">-</td>
                <td className="odd">-</td>
                <td className="odd">-</td>
                <td className="odd">-</td>
                <td className="odd">-</td>
                <td className="odd">1435</td>
              </tr>
              <tr>
                <td className="even">54</td>
                <td className="even">STANLEY LEUNG</td>
                <td className="even">-</td>
                <td className="even">-</td>
                <td className="even">-</td>
                <td className="even">-</td>
                <td className="even">997.5</td>
                <td className="even">-</td>
                <td className="even">997.5</td>
              </tr>
              <tr>
                <td className="odd">55</td>
                <td className="odd">ALEX TANG</td>
                <td className="odd">-</td>
                <td className="odd">-</td>
                <td className="odd">-</td>
                <td className="odd">-</td>
                <td className="odd">612.5</td>
                <td className="odd">-</td>
                <td className="odd">612.5</td>
              </tr>
            </tbody>
          </table>
        : <table className="table table-striped">
            <tbody>
              <tr>
                <th scope="col">排名</th>
                <th scope="col">球手</th>
                <th scope="col" title="2009年4月6-7日, 滘西洲公眾高爾夫球場 - 北場">第1站</th>
                <th scope="col" title="2009年5月4日, 香港高爾夫球會">第2站</th>
                <th scope="col" title="2009年6月1-2日, 清水灣高爾夫球會">第3站</th>
                <th scope="col" title="2009年9月1日, 滘西洲公眾高爾夫球場 - 北場">第4站</th>
                <th scope="col" title="2009年9月28日, 愉景灣高爾夫球會">第5站</th>
                <th scope="col" title="2009年10月19-20日, 銀利外商高爾夫球俱樂部">銀利經典賽</th>
                <th scope="col">積分</th>
              </tr>
              <tr>
                <td className="odd">1</td>
                <td className="odd">DAVID FREEMAN</td>
                <td className="odd">20000</td>
                <td className="odd">3500</td>
                <td className="odd">10000</td>
                <td className="odd">2600</td>
                <td className="odd">1237.5</td>
                <td className="odd">2800</td>
                <td className="odd">40137.5</td>
              </tr>
              <tr>
                <td className="even">2</td>
                <td className="even">李文樂</td>
                <td className="even">12000</td>
                <td className="even">1312.5</td>
                <td className="even">20000</td>
                <td className="even">1600</td>
                <td className="even">1312.5</td>
                <td className="even">2875</td>
                <td className="even">39100</td>
              </tr>
              <tr>
                <td className="odd">3</td>
                <td className="odd">李永基</td>
                <td className="odd">5200</td>
                <td className="odd">3500</td>
                <td className="odd">10000</td>
                <td className="odd">1219</td>
                <td className="odd">2200</td>
                <td className="odd">16000</td>
                <td className="odd">38119</td>
              </tr>
              <tr>
                <td className="even">4</td>
                <td className="even">馮裕德</td>
                <td className="even">8000</td>
                <td className="even">10000</td>
                <td className="even">2700</td>
                <td className="even">10000</td>
                <td className="even">2200</td>
                <td className="even">-</td>
                <td className="even">32900</td>
              </tr>
              <tr>
                <td className="odd">5</td>
                <td className="odd">黃煥民</td>
                <td className="odd">3850</td>
                <td className="odd">6000</td>
                <td className="odd">2850</td>
                <td className="odd">1400</td>
                <td className="odd">10000</td>
                <td className="odd">6333.33</td>
                <td className="odd">30433.33</td>
              </tr>
              <tr>
                <td className="even">6</td>
                <td className="even">JAMES STEWART</td>
                <td className="even">5200</td>
                <td className="even">2500</td>
                <td className="even">2700</td>
                <td className="even">2012.5</td>
                <td className="even">1681.25</td>
                <td className="even">16000</td>
                <td className="even">30093.75</td>
              </tr>
              <tr>
                <td className="odd">7</td>
                <td className="odd">鄧敏祺</td>
                <td className="odd">1925</td>
                <td className="odd">1387.5</td>
                <td className="odd">4800</td>
                <td className="odd">2600</td>
                <td className="odd">2750</td>
                <td className="odd">6333.33</td>
                <td className="odd">19795.83</td>
              </tr>
              <tr>
                <td className="even">8</td>
                <td className="even">蔡維臣</td>
                <td className="even">2170</td>
                <td className="even">1312.5</td>
                <td className="even">1365</td>
                <td className="even">5000</td>
                <td className="even">5000</td>
                <td className="even">4200</td>
                <td className="even">19047.5</td>
              </tr>
              <tr>
                <td className="odd">9</td>
                <td className="odd">鄧承志</td>
                <td className="odd">3850</td>
                <td className="odd">1312.5</td>
                <td className="odd">3850</td>
                <td className="odd">1032.5</td>
                <td className="odd">1400</td>
                <td className="odd">6333.33</td>
                <td className="odd">17778.33</td>
              </tr>
              <tr>
                <td className="even">10</td>
                <td className="even">馮偉傑</td>
                <td className="even">2470</td>
                <td className="even">945</td>
                <td className="even">1750</td>
                <td className="even">1325</td>
                <td className="even">5000</td>
                <td className="even">3516.66</td>
                <td className="even">15006.66</td>
              </tr>
              <tr>
                <td className="odd">11</td>
                <td className="odd">鄭家耀</td>
                <td className="odd">1435</td>
                <td className="odd">1205</td>
                <td className="odd">6000</td>
                <td className="odd">1325</td>
                <td className="odd">1400</td>
                <td className="odd">2410</td>
                <td className="odd">13775</td>
              </tr>
              <tr>
                <td className="even">12</td>
                <td className="even">ANDREW GOOD</td>
                <td className="even">2825</td>
                <td className="even">-</td>
                <td className="even">3850</td>
                <td className="even">717.5</td>
                <td className="even">1681.25</td>
                <td className="even">4600</td>
                <td className="even">13673.75</td>
              </tr>
              <tr>
                <td className="odd">13</td>
                <td className="odd">宋幸文</td>
                <td className="odd">5200</td>
                <td className="odd">1387.5</td>
                <td className="odd">2850</td>
                <td className="odd">1032.5</td>
                <td className="odd">787.5</td>
                <td className="odd">2205</td>
                <td className="odd">13462.5</td>
              </tr>
              <tr>
                <td className="even">14</td>
                <td className="even">馮偉權</td>
                <td className="even">2170</td>
                <td className="even">1102.5</td>
                <td className="even">2850</td>
                <td className="even">2600</td>
                <td className="even">1681.25</td>
                <td className="even">2875</td>
                <td className="even">13278.75</td>
              </tr>
              <tr>
                <td className="odd">15</td>
                <td className="odd">鄧偉俊</td>
                <td className="odd">3050</td>
                <td className="odd">2018.75</td>
                <td className="odd">2525</td>
                <td className="odd">1400</td>
                <td className="odd">787.5</td>
                <td className="odd">2625</td>
                <td className="odd">12406.25</td>
              </tr>
              <tr>
                <td className="even">16</td>
                <td className="even">林春祥</td>
                <td className="even">1295</td>
                <td className="even">665</td>
                <td className="even">1960</td>
                <td className="even">5000</td>
                <td className="even">1400</td>
                <td className="even">1995</td>
                <td className="even">12315</td>
              </tr>
              <tr>
                <td className="odd">17</td>
                <td className="odd">張建平G</td>
                <td className="odd">3050</td>
                <td className="odd">945</td>
                <td className="odd">3850</td>
                <td className="odd">1600</td>
                <td className="odd">-</td>
                <td className="odd">2410</td>
                <td className="odd">11855</td>
              </tr>
              <tr>
                <td className="even">18</td>
                <td className="even">VAUGHAN MASON</td>
                <td className="even">2675</td>
                <td className="even">945</td>
                <td className="even">3200</td>
                <td className="even">1600</td>
                <td className="even">-</td>
                <td className="even">2625</td>
                <td className="even">11045</td>
              </tr>
              <tr>
                <td className="odd">19</td>
                <td className="odd">李宇軒</td>
                <td className="odd">2675</td>
                <td className="odd">1032.5</td>
                <td className="odd">2205</td>
                <td className="odd">1219</td>
                <td className="odd">787.5</td>
                <td className="odd">2625</td>
                <td className="odd">10544</td>
              </tr>
              <tr>
                <td className="even">20</td>
                <td className="even">馬金發</td>
                <td className="even">2170</td>
                <td className="even">665</td>
                <td className="even">2700</td>
                <td className="even">840</td>
                <td className="even">1312.5</td>
                <td className="even">2750</td>
                <td className="even">10437.5</td>
              </tr>
              <tr>
                <td className="odd">21</td>
                <td className="odd">PAUL RILEY</td>
                <td className="odd">3850</td>
                <td className="odd">1312.5</td>
                <td className="odd">1960</td>
                <td className="odd">420</td>
                <td className="odd">2750</td>
                <td className="odd">-</td>
                <td className="odd">10292.5</td>
              </tr>
              <tr>
                <td className="even">22</td>
                <td className="even">廖鍇夢</td>
                <td className="even">2170</td>
                <td className="even">-</td>
                <td className="even">2415</td>
                <td className="even">1032.5</td>
                <td className="even">1137.5</td>
                <td className="even">3516.66</td>
                <td className="even">10271.66</td>
              </tr>
              <tr>
                <td className="odd">23</td>
                <td className="odd">簡栢堅</td>
                <td className="odd">2675</td>
                <td className="odd">507.5</td>
                <td className="odd">1575</td>
                <td className="odd">630</td>
                <td className="odd">1312.5</td>
                <td className="odd">2625</td>
                <td className="odd">9325</td>
              </tr>
              <tr>
                <td className="even">24</td>
                <td className="even">KEVIN HIND</td>
                <td className="even">1925</td>
                <td className="even">1205</td>
                <td className="even">4800</td>
                <td className="even">1325</td>
                <td className="even">-</td>
                <td className="even">-</td>
                <td className="even">9255</td>
              </tr>
              <tr>
                <td className="odd">25</td>
                <td className="odd">黃海健</td>
                <td className="odd">1715</td>
                <td className="odd">1437.5</td>
                <td className="odd">2600</td>
                <td className="odd">840</td>
                <td className="odd">997.5</td>
                <td className="odd">1575</td>
                <td className="odd">9165</td>
              </tr>
              <tr>
                <td className="even">26</td>
                <td className="even">李俊民</td>
                <td className="even">2675</td>
                <td className="even">1437.5</td>
                <td className="even">1085</td>
                <td className="even">840</td>
                <td className="even">1312.5</td>
                <td className="even">1750</td>
                <td className="even">9100</td>
              </tr>
              <tr>
                <td className="odd">27</td>
                <td className="odd">黃鉦鈞</td>
                <td className="odd">2470</td>
                <td className="odd">1205</td>
                <td className="odd">1575</td>
                <td className="odd">455</td>
                <td className="odd">1137.5</td>
                <td className="odd">2100</td>
                <td className="odd">8942.5</td>
              </tr>
              <tr>
                <td className="even">28</td>
                <td className="even">沈興南</td>
                <td className="even">2470</td>
                <td className="even">665</td>
                <td className="even">1820</td>
                <td className="even">-</td>
                <td className="even">892.5</td>
                <td className="even">2410</td>
                <td className="even">8257.5</td>
              </tr>
              <tr>
                <td className="odd">29</td>
                <td className="odd">馬健民</td>
                <td className="odd">1575</td>
                <td className="odd">1032.5</td>
                <td className="odd">2205</td>
                <td className="odd">1219</td>
                <td className="odd">787.5</td>
                <td className="odd">1330</td>
                <td className="odd">8149</td>
              </tr>
              <tr>
                <td className="even">30</td>
                <td className="even">萬雄立</td>
                <td className="even">1155</td>
                <td className="even">455</td>
                <td className="even">1575</td>
                <td className="even">1032.5</td>
                <td className="even">1681.25</td>
                <td className="even">1995</td>
                <td className="even">7893.75</td>
              </tr>
              <tr>
                <td className="odd">31</td>
                <td className="odd">李應東</td>
                <td className="odd">1155</td>
                <td className="odd">665</td>
                <td className="odd">1575</td>
                <td className="odd">1032.5</td>
                <td className="odd">1237.5</td>
                <td className="odd">1750</td>
                <td className="odd">7415</td>
              </tr>
              <tr>
                <td className="even">32</td>
                <td className="even">郭永昌</td>
                <td className="even">-</td>
                <td className="even">665</td>
                <td className="even">2205</td>
                <td className="even">1219</td>
                <td className="even">997.5</td>
                <td className="even">2205</td>
                <td className="even">7291.5</td>
              </tr>
              <tr>
                <td className="odd">33</td>
                <td className="odd">MARK MOSSIP</td>
                <td className="odd">1820</td>
                <td className="odd">665</td>
                <td className="odd">1085</td>
                <td className="odd">490</td>
                <td className="odd">997.5</td>
                <td className="odd">1890</td>
                <td className="odd">6947.5</td>
              </tr>
              <tr>
                <td className="even">34</td>
                <td className="even">林俊信</td>
                <td className="even">2825</td>
                <td className="even">805</td>
                <td className="even">-</td>
                <td className="even">1400</td>
                <td className="even">1137.5</td>
                <td className="even">-</td>
                <td className="even">6167.5</td>
              </tr>
              <tr>
                <td className="odd">35</td>
                <td className="odd">吳坤河</td>
                <td className="odd">2470</td>
                <td className="odd">507.5</td>
                <td className="odd">-</td>
                <td className="odd">717.5</td>
                <td className="odd">-</td>
                <td className="odd">2410</td>
                <td className="odd">6105</td>
              </tr>
              <tr>
                <td className="even">36</td>
                <td className="even">許灝文</td>
                <td className="even">1015</td>
                <td className="even">420</td>
                <td className="even">1190</td>
                <td className="even">630</td>
                <td className="even">1137.5</td>
                <td className="even">1470</td>
                <td className="even">5862.5</td>
              </tr>
              <tr>
                <td className="odd">&nbsp; </td>
                <td className="odd">&nbsp;</td>
                <td className="odd">&nbsp;</td>
                <td className="odd">&nbsp;</td>
                <td className="odd">&nbsp;</td>
                <td className="odd">&nbsp;</td>
                <td className="odd">&nbsp;</td>
                <td className="odd">&nbsp;</td>
                <td className="odd">&nbsp;</td>
              </tr>
              <tr>
                <td className="even">38</td>
                <td className="even">BRAD SCHADEWITZ</td>
                <td className="even">-</td>
                <td className="even">2018.75</td>
                <td className="even">-</td>
                <td className="even">-</td>
                <td className="even">-</td>
                <td className="even">3516.66</td>
                <td className="even">5535.41</td>
              </tr>
              <tr>
                <td className="odd">39</td>
                <td className="odd">張桂康</td>
                <td className="odd">-</td>
                <td className="odd">857.5</td>
                <td className="odd">2205</td>
                <td className="odd">1219</td>
                <td className="odd">525</td>
                <td className="odd">-</td>
                <td className="odd">4806.5</td>
              </tr>
              <tr>
                <td className="even">40</td>
                <td className="even">方鯨霖</td>
                <td className="even">1015</td>
                <td className="even">1205</td>
                <td className="even">1260</td>
                <td className="even">630</td>
                <td className="even">612.5</td>
                <td className="even">-</td>
                <td className="even">4722.5</td>
              </tr>
              <tr>
                <td className="odd">41</td>
                <td className="odd">鄭德謙</td>
                <td className="odd">-</td>
                <td className="odd">1102.5</td>
                <td className="odd">1960</td>
                <td className="odd">840</td>
                <td className="odd">700</td>
                <td className="odd">-</td>
                <td className="odd">4602.5</td>
              </tr>
              <tr>
                <td className="even">42</td>
                <td className="even">TREVOR BALL</td>
                <td className="even">2170</td>
                <td className="even">2018.75</td>
                <td className="even">-</td>
                <td className="even">-</td>
                <td className="even">-</td>
                <td className="even">-</td>
                <td className="even">4188.75</td>
              </tr>
              <tr>
                <td className="odd">43</td>
                <td className="odd">簡志強</td>
                <td className="odd">-</td>
                <td className="odd">-</td>
                <td className="odd">2415</td>
                <td className="odd">-</td>
                <td className="odd">-</td>
                <td className="odd">1750</td>
                <td className="odd">4165</td>
              </tr>
              <tr>
                <td className="even">44</td>
                <td className="even">MICHAEL LONG</td>
                <td className="even">-</td>
                <td className="even">-</td>
                <td className="even">2525</td>
                <td className="even">-</td>
                <td className="even">892.5</td>
                <td className="even">-</td>
                <td className="even">3417.5</td>
              </tr>
              <tr>
                <td className="odd">45</td>
                <td className="odd">王海鋒</td>
                <td className="odd">1575</td>
                <td className="odd">-</td>
                <td className="odd">-</td>
                <td className="odd">-</td>
                <td className="odd">-</td>
                <td className="odd">1575</td>
                <td className="odd">3150</td>
              </tr>
              <tr>
                <td className="even">46</td>
                <td className="even">DOMINIQUE BOULET</td>
                <td className="even">-</td>
                <td className="even">2018.75</td>
                <td className="even">-</td>
                <td className="even">1032.5</td>
                <td className="even">-</td>
                <td className="even">-</td>
                <td className="even">3051.25</td>
              </tr>
              <tr>
                <td className="odd">T47</td>
                <td className="odd">黎偉民</td>
                <td className="odd">910</td>
                <td className="odd">385</td>
                <td className="odd">980</td>
                <td className="odd">-</td>
                <td className="odd">490</td>
                <td className="odd">-</td>
                <td className="odd">2765</td>
              </tr>
              <tr>
                <td className="even">T47</td>
                <td className="even">唐進寶</td>
                <td className="even">-</td>
                <td className="even">857.5</td>
                <td className="even">1365</td>
                <td className="even">542.5</td>
                <td className="even">-</td>
                <td className="even">-</td>
                <td className="even">2765</td>
              </tr>
              <tr>
                <td className="odd">49</td>
                <td className="odd">李國恩</td>
                <td className="odd">-</td>
                <td className="odd">-</td>
                <td className="odd">-</td>
                <td className="odd">542.5</td>
                <td className="odd">665</td>
                <td className="odd">1260</td>
                <td className="odd">2467.5</td>
              </tr>
              <tr>
                <td className="even">50</td>
                <td className="even">GRANT GIBSON</td>
                <td className="even">-</td>
                <td className="even">-</td>
                <td className="even">-</td>
                <td className="even">2012.5</td>
                <td className="even">-</td>
                <td className="even">-</td>
                <td className="even">2012.5</td>
              </tr>
              <tr>
                <td className="odd">51</td>
                <td className="odd">金燊</td>
                <td className="odd">1715</td>
                <td className="odd">-</td>
                <td className="odd">-</td>
                <td className="odd">-</td>
                <td className="odd">-</td>
                <td className="odd">-</td>
                <td className="odd">1715</td>
              </tr>
              <tr>
                <td className="even">52</td>
                <td className="even">宋謦全</td>
                <td className="even">-</td>
                <td className="even">1600</td>
                <td className="even">-</td>
                <td className="even">-</td>
                <td className="even">-</td>
                <td className="even">-</td>
                <td className="even">1600</td>
              </tr>
              <tr>
                <td className="odd">53</td>
                <td className="odd">ALFREDO MORALES</td>
                <td className="odd">1435</td>
                <td className="odd">-</td>
                <td className="odd">-</td>
                <td className="odd">-</td>
                <td className="odd">-</td>
                <td className="odd">-</td>
                <td className="odd">1435</td>
              </tr>
              <tr>
                <td className="even">54</td>
                <td className="even">梁紹才</td>
                <td className="even">-</td>
                <td className="even">-</td>
                <td className="even">-</td>
                <td className="even">-</td>
                <td className="even">997.5</td>
                <td className="even">-</td>
                <td className="even">997.5</td>
              </tr>
              <tr>
                <td className="odd">55</td>
                <td className="odd">鄧澄濱</td>
                <td className="odd">-</td>
                <td className="odd">-</td>
                <td className="odd">-</td>
                <td className="odd">-</td>
                <td className="odd">612.5</td>
                <td className="odd">-</td>
                <td className="odd">612.5</td>
              </tr>
            </tbody>
          </table>}

      <h3>Ladies Division</h3>
      {props.lang === 'en'
        ? <table className="table table-striped">
            <tbody>
              <tr>
                <th scope="col">POS</th>
                <th scope="col">PLAYER</th>
                <th scope="col" title="6-7 April, 2009, KSC Public Golf Course - North Course">LEG 1</th>
                <th scope="col" title="4-5 May, 2009, Long Island Golf &amp; Country Club">LEG 2</th>
                <th scope="col" title="1-2 June, 2009, Clearwater Bay Golf Club">LEG 3</th>
                <th scope="col" title="21-22 September, 2009, Yinli Foreign Investors Golf Club">LEG 4</th>
                <th scope="col" title="19-20 October, 2009, Yinli Foreign Investors Golf Club">Yinli Classic</th>
                <th scope="col">TOTAL</th>
              </tr>
              <tr>
                <td className="odd">1</td>
                <td className="odd">SANDY TAO</td>
                <td className="odd">12000</td>
                <td className="odd">8000</td>
                <td className="odd">16000</td>
                <td className="odd">20000</td>
                <td className="odd">20000</td>
                <td className="odd">76000</td>
              </tr>
              <tr>
                <td className="even">2</td>
                <td className="even">MELODY CHAN</td>
                <td className="even">5000</td>
                <td className="even">20000</td>
                <td className="even">3675</td>
                <td className="even">12000</td>
                <td className="even">8000</td>
                <td className="even">48675</td>
              </tr>
              <tr>
                <td className="odd">3</td>
                <td className="odd">BETTY NG</td>
                <td className="odd">20000</td>
                <td className="odd">12000</td>
                <td className="odd">6000</td>
                <td className="odd">4200</td>
                <td className="odd">6000</td>
                <td className="odd">48200</td>
              </tr>
              <tr>
                <td className="even">4</td>
                <td className="even">SYLVIA CHAN</td>
                <td className="even">7000</td>
                <td className="even">3350</td>
                <td className="even">16000</td>
                <td className="even">5500</td>
                <td className="even">4025</td>
                <td className="even">35875</td>
              </tr>
              <tr>
                <td className="odd">5</td>
                <td className="odd">MAY TANG</td>
                <td className="odd">4600</td>
                <td className="odd">6000</td>
                <td className="odd">5000</td>
                <td className="odd">8000</td>
                <td className="odd">4025</td>
                <td className="odd">27625</td>
              </tr>
              <tr>
                <td className="even">6</td>
                <td className="even">HO MEI DIK</td>
                <td className="even">4025</td>
                <td className="even">5000</td>
                <td className="even">3675</td>
                <td className="even">-</td>
                <td className="even">12000</td>
                <td className="even">24700</td>
              </tr>
              <tr>
                <td className="odd">7</td>
                <td className="odd">ELSA TANG</td>
                <td className="odd">3500</td>
                <td className="odd">4400</td>
                <td className="odd">2900</td>
                <td className="odd">5500</td>
                <td className="odd">5000</td>
                <td className="odd">21300</td>
              </tr>
              <tr>
                <td className="even">8</td>
                <td className="even">BONNIE NGAI</td>
                <td className="even">2875</td>
                <td className="even">3850</td>
                <td className="even">4600</td>
                <td className="even">4600</td>
                <td className="even">3500</td>
                <td className="even">19425</td>
              </tr>
              <tr>
                <td className="odd">9</td>
                <td className="odd">SANDY YIM</td>
                <td className="odd">3200</td>
                <td className="odd">3350</td>
                <td className="odd">4200</td>
                <td className="odd">3500</td>
                <td className="odd">4600</td>
                <td className="odd">18850</td>
              </tr>
              <tr>
                <td className="even">10</td>
                <td className="even">ANNIE LAU</td>
                <td className="even">7000</td>
                <td className="even">4400</td>
                <td className="even">3200</td>
                <td className="even">3850</td>
                <td className="even">-</td>
                <td className="odd">18450</td>
              </tr>
              <tr>
                <td className="odd">11</td>
                <td className="odd">JOANN HARDWICK</td>
                <td className="odd">-</td>
                <td className="odd">-</td>
                <td className="odd">8000</td>
                <td className="odd">-</td>
                <td className="odd">-</td>
                <td className="odd">8000</td>
              </tr>
              <tr>
                <td className="even">12</td>
                <td className="even">JACQUELINE JOHNSON</td>
                <td className="even">2875</td>
                <td className="even">-</td>
                <td className="even">2850</td>
                <td className="even">-</td>
                <td className="even">-</td>
                <td className="even">5725</td>
              </tr>
              <tr>
                <td className="odd">13</td>
                <td className="odd">FLORENCE YUEN</td>
                <td className="odd">4025</td>
                <td className="odd">-</td>
                <td className="odd">-</td>
                <td className="odd">-</td>
                <td className="odd">-</td>
                <td className="odd">4025</td>
              </tr>
            </tbody>
          </table>
        : <table className="table table-striped">
            <tbody>
              <tr>
                <th scope="col">排名</th>
                <th scope="col">球手</th>
                <th scope="col" title="2009年4月6-7日, 滘西洲公眾高爾夫球場 - 北場">第1站</th>
                <th scope="col" title="2009年5月4-5日, 長安高爾夫球鄉村俱樂部">第2站</th>
                <th scope="col" title="2009年6月1-2日, 清水灣高爾夫球會">第3站</th>
                <th scope="col" title="2009年9月21-22日, 銀利外商高爾夫球俱樂部">第4站</th>
                <th scope="col" title="2009年10月19-20日, 銀利外商高爾夫球俱樂部">銀利經典賽</th>
                <th scope="col">積分</th>
              </tr>
              <tr>
                <td className="odd">1</td>
                <td className="odd">涂玉華</td>
                <td className="odd">12000</td>
                <td className="odd">8000</td>
                <td className="odd">16000</td>
                <td className="odd">20000</td>
                <td className="odd">20000</td>
                <td className="odd">76000</td>
              </tr>
              <tr>
                <td className="even">2</td>
                <td className="even">陳韻如</td>
                <td className="even">5000</td>
                <td className="even">20000</td>
                <td className="even">3675</td>
                <td className="even">12000</td>
                <td className="even">8000</td>
                <td className="even">48675</td>
              </tr>
              <tr>
                <td className="odd">3</td>
                <td className="odd">吳容歡</td>
                <td className="odd">20000</td>
                <td className="odd">12000</td>
                <td className="odd">6000</td>
                <td className="odd">4200</td>
                <td className="odd">6000</td>
                <td className="odd">48200</td>
              </tr>
              <tr>
                <td className="even">4</td>
                <td className="even">陳綉晶</td>
                <td className="even">7000</td>
                <td className="even">3350</td>
                <td className="even">16000</td>
                <td className="even">5500</td>
                <td className="even">4025</td>
                <td className="even">35875</td>
              </tr>
              <tr>
                <td className="odd">5</td>
                <td className="odd">鄧月媚</td>
                <td className="odd">4600</td>
                <td className="odd">6000</td>
                <td className="odd">5000</td>
                <td className="odd">8000</td>
                <td className="odd">4025</td>
                <td className="odd">27625</td>
              </tr>
              <tr>
                <td className="even">6</td>
                <td className="even">何美廸</td>
                <td className="even">4025</td>
                <td className="even">5000</td>
                <td className="even">3675</td>
                <td className="even">-</td>
                <td className="even">12000</td>
                <td className="even">24700</td>
              </tr>
              <tr>
                <td className="odd">7</td>
                <td className="odd">鄧睎文</td>
                <td className="odd">3500</td>
                <td className="odd">4400</td>
                <td className="odd">2900</td>
                <td className="odd">5500</td>
                <td className="odd">5000</td>
                <td className="odd">21300</td>
              </tr>
              <tr>
                <td className="even">8</td>
                <td className="even">倪瑞蓮</td>
                <td className="even">2875</td>
                <td className="even">3850</td>
                <td className="even">4600</td>
                <td className="even">4600</td>
                <td className="even">3500</td>
                <td className="even">19425</td>
              </tr>
              <tr>
                <td className="odd">9</td>
                <td className="odd">嚴婉珊</td>
                <td className="odd">3200</td>
                <td className="odd">3350</td>
                <td className="odd">4200</td>
                <td className="odd">3500</td>
                <td className="odd">4600</td>
                <td className="odd">18850</td>
              </tr>
              <tr>
                <td className="even">10</td>
                <td className="even">劉朗琪</td>
                <td className="even">7000</td>
                <td className="even">4400</td>
                <td className="even">3200</td>
                <td className="even">3850</td>
                <td className="even">-</td>
                <td className="odd">18450</td>
              </tr>
              <tr>
                <td className="odd">11</td>
                <td className="odd">JOANN HARDWICK</td>
                <td className="odd">-</td>
                <td className="odd">-</td>
                <td className="odd">8000</td>
                <td className="odd">-</td>
                <td className="odd">-</td>
                <td className="odd">8000</td>
              </tr>
              <tr>
                <td className="even">12</td>
                <td className="even">JACQUELINE JOHNSON</td>
                <td className="even">2875</td>
                <td className="even">-</td>
                <td className="even">2850</td>
                <td className="even">-</td>
                <td className="even">-</td>
                <td className="even">5725</td>
              </tr>
              <tr>
                <td className="odd">13</td>
                <td className="odd">袁芝韻</td>
                <td className="odd">4025</td>
                <td className="odd">-</td>
                <td className="odd">-</td>
                <td className="odd">-</td>
                <td className="odd">-</td>
                <td className="odd">4025</td>
              </tr>
            </tbody>
          </table>}

      <h3>Senior Division</h3>
      {props.lang === 'en'
        ? <table className="table table-striped">
            <tbody>
              <tr>
                <th scope="col">POS</th>
                <th scope="col">PLAYER</th>
                <th scope="col" title="6-7 April, 2009, KSC Public Golf Course - North Course">LEG 1</th>
                <th scope="col" title="4-5 May, 2009, Long Island Golf &amp; Country Club">LEG 2</th>
                <th scope="col" title="1-2 June, 2009, Clearwater Bay Golf Club">LEG 3</th>
                <th scope="col" title="21-22 September, 2009, Yinli Foreign Investors Golf Club">LEG 4</th>
                <th scope="col" title="19-20 October, 2009, Yinli Foreign Investors Golf Club">Yinli Classic</th>
                <th scope="col">TOTAL</th>
              </tr>
              <tr>
                <td className="odd">1</td>
                <td className="odd">ALEX TANG</td>
                <td className="odd">12000</td>
                <td className="odd">20000</td>
                <td className="odd">6000</td>
                <td className="odd">12000</td>
                <td className="odd">5000</td>
                <td className="odd">55000</td>
              </tr>
              <tr>
                <td className="even">2</td>
                <td className="even">SUNG SING</td>
                <td className="even">-</td>
                <td className="even">-</td>
                <td className="even">20000</td>
                <td className="even">4200</td>
                <td className="even">20000</td>
                <td className="even">44200</td>
              </tr>
              <tr>
                <td className="odd">3</td>
                <td className="odd">DANIEL LIU</td>
                <td className="odd">6000</td>
                <td className="odd">12000</td>
                <td className="odd">4025</td>
                <td className="odd">8000</td>
                <td className="odd">7000</td>
                <td className="odd">37025</td>
              </tr>
              <tr>
                <td className="even">4</td>
                <td className="even">TOMMY KAN</td>
                <td className="even">20000</td>
                <td className="even">3500</td>
                <td className="even">-</td>
                <td className="even">5500</td>
                <td className="even">4400</td>
                <td className="even">33400</td>
              </tr>
              <tr>
                <td className="odd">5</td>
                <td className="odd">SIU KAM PIU</td>
                <td className="odd">8000</td>
                <td className="odd">4600</td>
                <td className="odd">12000</td>
                <td className="odd">3500</td>
                <td className="odd">3675</td>
                <td className="odd">31775</td>
              </tr>
              <tr>
                <td className="even">6</td>
                <td className="even">MICHAEL KAN</td>
                <td className="even">5000</td>
                <td className="even">8000</td>
                <td className="even">5000</td>
                <td className="even">5500</td>
                <td className="even">4400</td>
                <td className="even">27900</td>
              </tr>
              <tr>
                <td className="odd">7</td>
                <td className="odd">STANLEY LEUNG</td>
                <td className="odd">4200</td>
                <td className="odd">5500</td>
                <td className="odd">8000</td>
                <td className="odd">2850</td>
                <td className="odd">7000</td>
                <td className="odd">27550</td>
              </tr>
              <tr>
                <td className="even">8</td>
                <td className="even">FUNG WAI KUEN</td>
                <td className="even">-</td>
                <td className="even">-</td>
                <td className="even">-</td>
                <td className="even">20000</td>
                <td className="even">-</td>
                <td className="even">20000</td>
              </tr>
              <tr>
                <td className="odd">9</td>
                <td className="odd">LIU WAI YIN</td>
                <td className="odd">4600</td>
                <td className="odd">3850</td>
                <td className="odd">4025</td>
                <td className="odd">3850</td>
                <td className="odd">3200</td>
                <td className="odd">19525</td>
              </tr>
              <tr>
                <td className="even">10</td>
                <td className="even">ALFREDO MORALES</td>
                <td className="even">-</td>
                <td className="even">4200</td>
                <td className="even">4600</td>
                <td className="even">4600</td>
                <td className="even">3675</td>
                <td className="even">17075</td>
              </tr>
              <tr>
                <td className="odd">11</td>
                <td className="odd">LEUNG WAI KAN</td>
                <td className="odd">3850</td>
                <td className="odd">3200</td>
                <td className="odd">3500</td>
                <td className="odd">2800</td>
                <td className="odd">2900</td>
                <td className="odd">16250</td>
              </tr>
              <tr>
                <td className="even">12</td>
                <td className="even">Tang Shu Wing</td>
                <td className="even">-</td>
                <td className="even">-</td>
                <td className="even">-</td>
                <td className="even">-</td>
                <td className="even">12000</td>
                <td className="even">12000</td>
              </tr>
              <tr>
                <td className="odd">13</td>
                <td className="odd">LEE PARKER</td>
                <td className="odd">-</td>
                <td className="odd">5500</td>
                <td className="odd">-</td>
                <td className="odd">3200</td>
                <td className="odd">-</td>
                <td className="odd">8700</td>
              </tr>
              <tr>
                <td className="even">14</td>
                <td className="even">WILLIE CHAN</td>
                <td className="even">-</td>
                <td className="even">-</td>
                <td className="even">-</td>
                <td className="even">2900</td>
                <td className="even">-</td>
                <td className="even">2900</td>
              </tr>
            </tbody>
          </table>
        : <table className="table table-striped">
            <tbody>
              <tr>
                <th scope="col">排名</th>
                <th scope="col">球手</th>
                <th scope="col" title="2009年4月6-7日, 滘西洲公眾高爾夫球場 - 北場">第1站</th>
                <th scope="col" title="2009年5月4-5日, 長安高爾夫球鄉村俱樂部">第2站</th>
                <th scope="col" title="2009年6月1-2日, 清水灣高爾夫球會">第3站</th>
                <th scope="col" title="2009年9月21-22日, 銀利外商高爾夫球俱樂部">第4站</th>
                <th scope="col" title="2009年10月19-20日, 銀利外商高爾夫球俱樂部">銀利經典賽</th>
                <th scope="col">積分</th>
              </tr>
              <tr>
                <td className="odd">1</td>
                <td className="odd">鄧澄濱</td>
                <td className="odd">12000</td>
                <td className="odd">20000</td>
                <td className="odd">6000</td>
                <td className="odd">12000</td>
                <td className="odd">5000</td>
                <td className="odd">55000</td>
              </tr>
              <tr>
                <td className="even">2</td>
                <td className="even">宋謦全</td>
                <td className="even">-</td>
                <td className="even">-</td>
                <td className="even">20000</td>
                <td className="even">4200</td>
                <td className="even">20000</td>
                <td className="even">44200</td>
              </tr>
              <tr>
                <td className="odd">3</td>
                <td className="odd">廖炳光</td>
                <td className="odd">6000</td>
                <td className="odd">12000</td>
                <td className="odd">4025</td>
                <td className="odd">8000</td>
                <td className="odd">7000</td>
                <td className="odd">37025</td>
              </tr>
              <tr>
                <td className="even">4</td>
                <td className="even">簡鏡棠</td>
                <td className="even">20000</td>
                <td className="even">3500</td>
                <td className="even">-</td>
                <td className="even">5500</td>
                <td className="even">4400</td>
                <td className="even">33400</td>
              </tr>
              <tr>
                <td className="odd">5</td>
                <td className="odd">蕭金標</td>
                <td className="odd">8000</td>
                <td className="odd">4600</td>
                <td className="odd">12000</td>
                <td className="odd">3500</td>
                <td className="odd">3675</td>
                <td className="odd">31775</td>
              </tr>
              <tr>
                <td className="even">6</td>
                <td className="even">簡敬有</td>
                <td className="even">5000</td>
                <td className="even">8000</td>
                <td className="even">5000</td>
                <td className="even">5500</td>
                <td className="even">4400</td>
                <td className="even">27900</td>
              </tr>
              <tr>
                <td className="odd">7</td>
                <td className="odd">梁紹才</td>
                <td className="odd">4200</td>
                <td className="odd">5500</td>
                <td className="odd">8000</td>
                <td className="odd">2850</td>
                <td className="odd">7000</td>
                <td className="odd">27550</td>
              </tr>
              <tr>
                <td className="even">8</td>
                <td className="even">馮偉權</td>
                <td className="even">-</td>
                <td className="even">-</td>
                <td className="even">-</td>
                <td className="even">20000</td>
                <td className="even">-</td>
                <td className="even">20000</td>
              </tr>
              <tr>
                <td className="odd">9</td>
                <td className="odd">廖煒賢</td>
                <td className="odd">4600</td>
                <td className="odd">3850</td>
                <td className="odd">4025</td>
                <td className="odd">3850</td>
                <td className="odd">3200</td>
                <td className="odd">19525</td>
              </tr>
              <tr>
                <td className="even">10</td>
                <td className="even">ALFREDO MORALES</td>
                <td className="even">-</td>
                <td className="even">4200</td>
                <td className="even">4600</td>
                <td className="even">4600</td>
                <td className="even">3675</td>
                <td className="even">17075</td>
              </tr>
              <tr>
                <td className="odd">11</td>
                <td className="odd">梁維根</td>
                <td className="odd">3850</td>
                <td className="odd">3200</td>
                <td className="odd">3500</td>
                <td className="odd">2800</td>
                <td className="odd">2900</td>
                <td className="odd">16250</td>
              </tr>
              <tr>
                <td className="even">12</td>
                <td className="even">鄧樹榮</td>
                <td className="even">-</td>
                <td className="even">-</td>
                <td className="even">-</td>
                <td className="even">-</td>
                <td className="even">12000</td>
                <td className="even">12000</td>
              </tr>
              <tr>
                <td className="odd">13</td>
                <td className="odd">李柏嘉</td>
                <td className="odd">-</td>
                <td className="odd">5500</td>
                <td className="odd">-</td>
                <td className="odd">3200</td>
                <td className="odd">-</td>
                <td className="odd">8700</td>
              </tr>
              <tr>
                <td className="even">14</td>
                <td className="even">陳子強</td>
                <td className="even">-</td>
                <td className="even">-</td>
                <td className="even">-</td>
                <td className="even">2900</td>
                <td className="even">-</td>
                <td className="even">2900</td>
              </tr>
            </tbody>
          </table>}
    </div>
  );
}
export default merit;
