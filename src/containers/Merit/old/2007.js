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
                <th scope="col" title="14 - 15 May, Clearwater Bay Golf Club">LEG 1</th>
                <th scope="col" title="25-26 June, Discovery Bay Golf Club - Diamond / Ruby">LEG 2</th>
                <th scope="col" title="17-18 Sept, Kau Sai Chau Public Golf Course - North Course">LEG 3</th>
                <th
                  scope="col"
                  title="17-18 Oct, The 5th Yinli - HKPGA Classic 2007, Yinli Foreign Investors Golf Club">
                  LEG 4
                </th>
                <th scope="col">TOTAL</th>
              </tr>
              <tr>
                <td className="odd">1</td>
                <td className="odd">DEREK FUNG</td>
                <td className="odd">20000</td>
                <td className="odd">5000</td>
                <td className="odd">20000</td>
                <td className="odd">12000</td>
                <td className="odd">57000</td>
              </tr>
              <tr>
                <td className="even">2</td>
                <td className="even">DAVID FREEMAN&nbsp;&nbsp;</td>
                <td className="even">4412.5</td>
                <td className="even">20000</td>
                <td className="even">7000</td>
                <td className="even">20000</td>
                <td className="even">51412.5</td>
              </tr>
              <tr>
                <td className="odd">3</td>
                <td className="odd">ANDREW GOOD&nbsp;</td>
                <td className="odd">10000</td>
                <td className="odd">6000</td>
                <td className="odd">4200</td>
                <td className="odd">2775</td>
                <td className="odd">22975</td>
              </tr>
              <tr>
                <td className="even">4</td>
                <td className="even">JAMES STEWART&nbsp;&nbsp;</td>
                <td className="even">2800</td>
                <td className="even">4216.6</td>
                <td className="even">12000</td>
                <td className="even">2443.3</td>
                <td className="even">21459.9</td>
              </tr>
              <tr>
                <td className="odd">5</td>
                <td className="odd">WONG WOON MAN&nbsp;&nbsp;</td>
                <td className="odd">4412.5</td>
                <td className="odd">10000</td>
                <td className="odd">4600</td>
                <td className="odd">2030</td>
                <td className="odd">21042.5</td>
              </tr>
              <tr>
                <td className="even">6</td>
                <td className="even">DOMINIQUE BOULET&nbsp;</td>
                <td className="even">10000</td>
                <td className="even">4217</td>
                <td className="even"> </td>
                <td className="even">6000</td>
                <td className="even">20217</td>
              </tr>
              <tr>
                <td className="odd">7</td>
                <td className="odd">GRANT GIBSON&nbsp;</td>
                <td className="odd">4412.5</td>
                <td className="odd">3500</td>
                <td className="odd">7000</td>
                <td className="odd">4700</td>
                <td className="odd">19612.5</td>
              </tr>
              <tr>
                <td className="even">8</td>
                <td className="even">TANG SHING CHI</td>
                <td className="even"> </td>
                <td className="even">10000</td>
                <td className="even">5000</td>
                <td className="even">3350</td>
                <td className="even">18350</td>
              </tr>
              <tr>
                <td className="odd">9</td>
                <td className="odd">JOVICK LEE&nbsp;</td>
                <td className="odd">3200</td>
                <td className="odd">4216.6</td>
                <td className="odd"> </td>
                <td className="odd">8000</td>
                <td className="odd">15416.6</td>
              </tr>
              <tr>
                <td className="even">10</td>
                <td className="even">PAUL RILEY&nbsp;</td>
                <td className="even">4412.5</td>
                <td className="even">2100</td>
                <td className="even">3350</td>
                <td className="even">4700</td>
                <td className="even">14562.5</td>
              </tr>
              <tr>
                <td className="odd">11</td>
                <td className="odd">ERIC MA</td>
                <td className="odd">2475</td>
                <td className="odd">2675</td>
                <td className="odd">3850</td>
                <td className="odd">2240</td>
                <td className="odd">11240</td>
              </tr>
              <tr>
                <td className="even">12</td>
                <td className="even">PETER DOWNIE</td>
                <td className="even">6000</td>
                <td className="even">2525</td>
                <td className="even"> </td>
                <td className="even">2625</td>
                <td className="even">11150</td>
              </tr>
              <tr>
                <td className="odd">13</td>
                <td className="odd">DUCKY TANG</td>
                <td className="odd">2800</td>
                <td className="odd">2750</td>
                <td className="odd">2850</td>
                <td className="odd">2443.3</td>
                <td className="odd">10843.3</td>
              </tr>
              <tr>
                <td className="even">14</td>
                <td className="even">SUNG HANG MAN</td>
                <td className="even">3200</td>
                <td className="even">2825</td>
                <td className="even">2550</td>
                <td className="even">2240</td>
                <td className="even">10815</td>
              </tr>
              <tr>
                <td className="odd">15</td>
                <td className="odd">CHENG KA YIU&nbsp;</td>
                <td className="odd">2380</td>
                <td className="odd">2675</td>
                <td className="odd">3350</td>
                <td className="odd">1890</td>
                <td className="odd">10295</td>
              </tr>
              <tr>
                <td className="even">16</td>
                <td className="even">MARK SMITH</td>
                <td className="even">2575</td>
                <td className="even">2900</td>
                <td className="even">2475</td>
                <td className="even">1750</td>
                <td className="even">9700</td>
              </tr>
              <tr>
                <td className="odd">17</td>
                <td className="odd">DANNY KAN</td>
                <td className="odd">2170</td>
                <td className="odd">2275</td>
                <td className="odd">2310</td>
                <td className="odd">2625</td>
                <td className="odd">9380</td>
              </tr>
              <tr>
                <td className="even">18</td>
                <td className="even">LEE MAN LOK</td>
                <td className="even">2675</td>
                <td className="even">1890</td>
                <td className="even">2750</td>
                <td className="even">2030</td>
                <td className="even">9345</td>
              </tr>
              <tr>
                <td className="odd">19</td>
                <td className="odd">ALEXANDER CHENG</td>
                <td className="odd">2800</td>
                <td className="odd">1995</td>
                <td className="odd">2310</td>
                <td className="odd">2030</td>
                <td className="odd">9135</td>
              </tr>
              <tr>
                <td className="even">20</td>
                <td className="even">LAM CHUN CHEUNG&nbsp;</td>
                <td className="even">2675</td>
                <td className="even">2450</td>
                <td className="even">2100</td>
                <td className="even">1820</td>
                <td className="even">9045</td>
              </tr>
              <tr>
                <td className="odd">21</td>
                <td className="odd">RICHARD KAN</td>
                <td className="odd">3200</td>
                <td className="odd"> </td>
                <td className="odd">2675</td>
                <td className="odd">2775</td>
                <td className="odd">8650</td>
              </tr>
              <tr>
                <td className="even">22</td>
                <td className="even">SHUM HING NAM</td>
                <td className="even">1960</td>
                <td className="even">2825</td>
                <td className="even">2600</td>
                <td className="even">1260</td>
                <td className="even">8645</td>
              </tr>
              <tr>
                <td className="odd">23</td>
                <td className="odd">FUNG WAI KIT</td>
                <td className="odd">1540</td>
                <td className="odd">2525</td>
                <td className="odd">1855</td>
                <td className="odd">2625</td>
                <td className="odd">8545</td>
              </tr>
              <tr>
                <td className="even">24</td>
                <td className="even">LI CHUN MAN</td>
                <td className="even">1960</td>
                <td className="even">1820</td>
                <td className="even">1855</td>
                <td className="even">2625</td>
                <td className="even">8260</td>
              </tr>
              <tr>
                <td className="odd">25</td>
                <td className="odd">LIM CHOON SHIN</td>
                <td className="odd">2275</td>
                <td className="odd">2600</td>
                <td className="odd"> </td>
                <td className="odd">3350</td>
                <td className="odd">8225</td>
              </tr>
              <tr>
                <td className="even">26</td>
                <td className="even">TANG MAN KEE</td>
                <td className="even">2475</td>
                <td className="even">3200</td>
                <td className="even">2475</td>
                <td className="even"> </td>
                <td className="even">8150</td>
              </tr>
              <tr>
                <td className="odd">27</td>
                <td className="odd">FUNG WAI KUEN</td>
                <td className="odd">2100</td>
                <td className="odd"> </td>
                <td className="odd">2850</td>
                <td className="odd">2875</td>
                <td className="odd">7825</td>
              </tr>
              <tr>
                <td className="even">28</td>
                <td className="even">SAMMY NG</td>
                <td className="even">1470</td>
                <td className="even">2275</td>
                <td className="even">2675</td>
                <td className="even">1400</td>
                <td className="even">7820</td>
              </tr>
              <tr>
                <td className="odd">29</td>
                <td className="odd">MA KIN MAN</td>
                <td className="odd">2275</td>
                <td className="odd">2275</td>
                <td className="odd">2100</td>
                <td className="odd">1050</td>
                <td className="odd">7700</td>
              </tr>
              <tr>
                <td className="even">30</td>
                <td className="even">CHEUNG KIN PING</td>
                <td className="even">1960</td>
                <td className="even"> </td>
                <td className="even">2310</td>
                <td className="even">2875</td>
                <td className="even">7145</td>
              </tr>
              <tr>
                <td className="odd">31</td>
                <td className="odd">BRAD SCHADEWITZ</td>
                <td className="odd"> </td>
                <td className="odd"> </td>
                <td className="odd">2850</td>
                <td className="odd">4025</td>
                <td className="odd">6875</td>
              </tr>
              <tr>
                <td className="even">32</td>
                <td className="even">VAUGHAN MASON</td>
                <td className="even"> </td>
                <td className="even">2275</td>
                <td className="even">2100</td>
                <td className="even">1610</td>
                <td className="even">5985</td>
              </tr>
              <tr>
                <td className="odd">33</td>
                <td className="odd">TONG CHUN PO</td>
                <td className="odd">1400</td>
                <td className="odd"> </td>
                <td className="odd">1960</td>
                <td className="odd">2443.3</td>
                <td className="odd">5803.3</td>
              </tr>
              <tr>
                <td className="even">&nbsp; </td>
                <td className="even">&nbsp;</td>
                <td className="even">&nbsp;</td>
                <td className="even">&nbsp;</td>
                <td className="even">&nbsp;</td>
                <td className="even">&nbsp;</td>
                <td className="even">&nbsp;</td>
              </tr>
              <tr>
                <td className="odd">35</td>
                <td className="odd">WONG HOI KIN</td>
                <td className="odd">1785</td>
                <td className="odd">1715</td>
                <td className="odd"> </td>
                <td className="odd">1400</td>
                <td className="odd">4900</td>
              </tr>
              <tr>
                <td className="even">36</td>
                <td className="even">WILSON CHOY&nbsp;</td>
                <td className="even">2575</td>
                <td className="even"> </td>
                <td className="even"> </td>
                <td className="even">2240</td>
                <td className="even">4815</td>
              </tr>
              <tr>
                <td className="odd">37</td>
                <td className="odd">GEOFFREY SO&nbsp;</td>
                <td className="odd"> </td>
                <td className="odd">1995</td>
                <td className="odd">1540</td>
                <td className="odd">980</td>
                <td className="odd">4515</td>
              </tr>
              <tr>
                <td className="even">38</td>
                <td className="even">YAU SUI MING&nbsp;</td>
                <td className="even"> </td>
                <td className="even"> </td>
                <td className="even"> </td>
                <td className="even">4025</td>
                <td className="even">4025</td>
              </tr>
              <tr>
                <td className="odd">39</td>
                <td className="odd">MARK MOSSIP</td>
                <td className="odd">1785</td>
                <td className="odd">1715</td>
                <td className="odd"> </td>
                <td className="odd"> </td>
                <td className="odd">3500</td>
              </tr>
              <tr>
                <td className="even">40</td>
                <td className="even">WONG HOI FUNG</td>
                <td className="even">1680</td>
                <td className="even">1610</td>
                <td className="even"> </td>
                <td className="even"> </td>
                <td className="even">3290</td>
              </tr>
              <tr>
                <td className="odd">41</td>
                <td className="odd">LAI WAI WA</td>
                <td className="odd"> </td>
                <td className="odd"> </td>
                <td className="odd">1750</td>
                <td className="odd">1155</td>
                <td className="odd">2905</td>
              </tr>
              <tr>
                <td className="even">42</td>
                <td className="even">ALFREDO MORALES&nbsp;</td>
                <td className="even"> </td>
                <td className="even">1470</td>
                <td className="even"> </td>
                <td className="even">875</td>
                <td className="even">2345</td>
              </tr>
              <tr>
                <td className="odd">43</td>
                <td className="odd">LAI WAI MAN</td>
                <td className="odd"> </td>
                <td className="odd"> </td>
                <td className="odd">1610</td>
                <td className="odd">560</td>
                <td className="odd">2170</td>
              </tr>
              <tr>
                <td className="even">T44</td>
                <td className="even">CHEUNG KWAI HONG</td>
                <td className="even"> </td>
                <td className="even"> </td>
                <td className="even"> </td>
                <td className="even">1610</td>
                <td className="even">1610</td>
              </tr>
              <tr>
                <td className="odd">T44</td>
                <td className="odd">MICHAEL LONG</td>
                <td className="odd">1610</td>
                <td className="odd"> </td>
                <td className="odd"> </td>
                <td className="odd"> </td>
                <td className="odd">1610</td>
              </tr>
              <tr>
                <td className="even">T44</td>
                <td className="even">TANG SHU WING</td>
                <td className="even"> </td>
                <td className="even"> </td>
                <td className="even"> </td>
                <td className="even">1610</td>
                <td className="even">1610</td>
              </tr>
              <tr>
                <td className="odd">47</td>
                <td className="odd">ALFONSO MORALES&nbsp;</td>
                <td className="odd"> </td>
                <td className="odd">1540</td>
                <td className="odd"> </td>
                <td className="odd"> </td>
                <td className="odd">1540</td>
              </tr>
              <tr>
                <td className="even">48</td>
                <td className="even">SUNG YAU FUK</td>
                <td className="even"> </td>
                <td className="even"> </td>
                <td className="even"> </td>
                <td className="even">1400</td>
                <td className="even">1400</td>
              </tr>
              <tr>
                <td className="odd">49</td>
                <td className="odd">MAN HUNG LAP</td>
                <td className="odd"> </td>
                <td className="odd"> </td>
                <td className="odd"> </td>
                <td className="odd">875</td>
                <td className="odd">875</td>
              </tr>
              <tr>
                <td className="even">50</td>
                <td className="even">YIP ON WAH</td>
                <td className="even"> </td>
                <td className="even"> </td>
                <td className="even"> </td>
                <td className="even">770</td>
                <td className="even">770</td>
              </tr>
              <tr>
                <td className="odd">51</td>
                <td className="odd">CHIU TAT KWAI</td>
                <td className="odd"> </td>
                <td className="odd"> </td>
                <td className="odd"> </td>
                <td className="odd">700</td>
                <td className="odd">700</td>
              </tr>
              <tr>
                <td className="even">52</td>
                <td className="even">KAVIN KAM</td>
                <td className="even"> </td>
                <td className="even"> </td>
                <td className="even"> </td>
                <td className="even">630</td>
                <td className="even">630</td>
              </tr>
            </tbody>
          </table>
        : <table className="table table-striped">
            <tbody>
              <tr>
                <th scope="col">排名</th>
                <th scope="col">球手</th>
                <th scope="col" title="2007年5月14-15日, 清水灣高爾夫球鄉村俱樂部">第1站</th>
                <th scope="col" title="2007年6月25-26日, 愉景灣高爾夫球會 - 鑽石/紅寶石球場">第2站</th>
                <th scope="col" title="2007年9月17-18日, 滘西洲公眾高爾夫球場 - 北場">第3站</th>
                <th scope="col" title="2007年10月17-18日,第五屆銀利香港職業高爾夫經典賽, 銀利外商高爾夫球俱樂部">第4站</th>
                <th scope="col">積分</th>
              </tr>
              <tr>
                <td className="odd">1</td>
                <td className="odd">馮裕德</td>
                <td className="odd">20000</td>
                <td className="odd">5000</td>
                <td className="odd">20000</td>
                <td className="odd">12000</td>
                <td className="odd">57000</td>
              </tr>
              <tr>
                <td className="even">2</td>
                <td className="even">DAVID FREEMAN&nbsp;&nbsp;</td>
                <td className="even">4412.5</td>
                <td className="even">20000</td>
                <td className="even">7000</td>
                <td className="even">20000</td>
                <td className="even">51412.5</td>
              </tr>
              <tr>
                <td className="odd">3</td>
                <td className="odd">ANDREW GOOD&nbsp;</td>
                <td className="odd">10000</td>
                <td className="odd">6000</td>
                <td className="odd">4200</td>
                <td className="odd">2775</td>
                <td className="odd">22975</td>
              </tr>
              <tr>
                <td className="even">4</td>
                <td className="even">JAMES STEWART&nbsp;&nbsp;</td>
                <td className="even">2800</td>
                <td className="even">4216.6</td>
                <td className="even">12000</td>
                <td className="even">2443.3</td>
                <td className="even">21459.9</td>
              </tr>
              <tr>
                <td className="odd">5</td>
                <td className="odd">黃煥民&nbsp;&nbsp;</td>
                <td className="odd">4412.5</td>
                <td className="odd">10000</td>
                <td className="odd">4600</td>
                <td className="odd">2030</td>
                <td className="odd">21042.5</td>
              </tr>
              <tr>
                <td className="even">6</td>
                <td className="even">DOMINIQUE BOULET&nbsp;</td>
                <td className="even">10000</td>
                <td className="even">4217</td>
                <td className="even"> </td>
                <td className="even">6000</td>
                <td className="even">20217</td>
              </tr>
              <tr>
                <td className="odd">7</td>
                <td className="odd">GRANT GIBSON&nbsp;</td>
                <td className="odd">4412.5</td>
                <td className="odd">3500</td>
                <td className="odd">7000</td>
                <td className="odd">4700</td>
                <td className="odd">19612.5</td>
              </tr>
              <tr>
                <td className="even">8</td>
                <td className="even">鄧承志</td>
                <td className="even"> </td>
                <td className="even">10000</td>
                <td className="even">5000</td>
                <td className="even">3350</td>
                <td className="even">18350</td>
              </tr>
              <tr>
                <td className="odd">9</td>
                <td className="odd">李永基&nbsp;</td>
                <td className="odd">3200</td>
                <td className="odd">4216.6</td>
                <td className="odd"> </td>
                <td className="odd">8000</td>
                <td className="odd">15416.6</td>
              </tr>
              <tr>
                <td className="even">10</td>
                <td className="even">PAUL RILEY&nbsp;</td>
                <td className="even">4412.5</td>
                <td className="even">2100</td>
                <td className="even">3350</td>
                <td className="even">4700</td>
                <td className="even">14562.5</td>
              </tr>
              <tr>
                <td className="odd">11</td>
                <td className="odd">ERIC MA</td>
                <td className="odd">2475</td>
                <td className="odd">2675</td>
                <td className="odd">3850</td>
                <td className="odd">2240</td>
                <td className="odd">11240</td>
              </tr>
              <tr>
                <td className="even">12</td>
                <td className="even">PETER DOWNIE</td>
                <td className="even">6000</td>
                <td className="even">2525</td>
                <td className="even"> </td>
                <td className="even">2625</td>
                <td className="even">11150</td>
              </tr>
              <tr>
                <td className="odd">13</td>
                <td className="odd">鄧偉俊</td>
                <td className="odd">2800</td>
                <td className="odd">2750</td>
                <td className="odd">2850</td>
                <td className="odd">2443.3</td>
                <td className="odd">10843.3</td>
              </tr>
              <tr>
                <td className="even">14</td>
                <td className="even">宋幸文</td>
                <td className="even">3200</td>
                <td className="even">2825</td>
                <td className="even">2550</td>
                <td className="even">2240</td>
                <td className="even">10815</td>
              </tr>
              <tr>
                <td className="odd">15</td>
                <td className="odd">鄭家耀&nbsp;</td>
                <td className="odd">2380</td>
                <td className="odd">2675</td>
                <td className="odd">3350</td>
                <td className="odd">1890</td>
                <td className="odd">10295</td>
              </tr>
              <tr>
                <td className="even">16</td>
                <td className="even">MARK SMITH</td>
                <td className="even">2575</td>
                <td className="even">2900</td>
                <td className="even">2475</td>
                <td className="even">1750</td>
                <td className="even">9700</td>
              </tr>
              <tr>
                <td className="odd">17</td>
                <td className="odd">簡栢堅</td>
                <td className="odd">2170</td>
                <td className="odd">2275</td>
                <td className="odd">2310</td>
                <td className="odd">2625</td>
                <td className="odd">9380</td>
              </tr>
              <tr>
                <td className="even">18</td>
                <td className="even">李文樂</td>
                <td className="even">2675</td>
                <td className="even">1890</td>
                <td className="even">2750</td>
                <td className="even">2030</td>
                <td className="even">9345</td>
              </tr>
              <tr>
                <td className="odd">19</td>
                <td className="odd">鄭德謙</td>
                <td className="odd">2800</td>
                <td className="odd">1995</td>
                <td className="odd">2310</td>
                <td className="odd">2030</td>
                <td className="odd">9135</td>
              </tr>
              <tr>
                <td className="even">20</td>
                <td className="even">林春祥&nbsp;</td>
                <td className="even">2675</td>
                <td className="even">2450</td>
                <td className="even">2100</td>
                <td className="even">1820</td>
                <td className="even">9045</td>
              </tr>
              <tr>
                <td className="odd">21</td>
                <td className="odd">簡志強</td>
                <td className="odd">3200</td>
                <td className="odd"> </td>
                <td className="odd">2675</td>
                <td className="odd">2775</td>
                <td className="odd">8650</td>
              </tr>
              <tr>
                <td className="even">22</td>
                <td className="even">沈興南</td>
                <td className="even">1960</td>
                <td className="even">2825</td>
                <td className="even">2600</td>
                <td className="even">1260</td>
                <td className="even">8645</td>
              </tr>
              <tr>
                <td className="odd">23</td>
                <td className="odd">馮偉傑</td>
                <td className="odd">1540</td>
                <td className="odd">2525</td>
                <td className="odd">1855</td>
                <td className="odd">2625</td>
                <td className="odd">8545</td>
              </tr>
              <tr>
                <td className="even">24</td>
                <td className="even">李俊民</td>
                <td className="even">1960</td>
                <td className="even">1820</td>
                <td className="even">1855</td>
                <td className="even">2625</td>
                <td className="even">8260</td>
              </tr>
              <tr>
                <td className="odd">25</td>
                <td className="odd">LIM CHOON SHIN</td>
                <td className="odd">2275</td>
                <td className="odd">2600</td>
                <td className="odd"> </td>
                <td className="odd">3350</td>
                <td className="odd">8225</td>
              </tr>
              <tr>
                <td className="even">26</td>
                <td className="even">鄧敏祺</td>
                <td className="even">2475</td>
                <td className="even">3200</td>
                <td className="even">2475</td>
                <td className="even"> </td>
                <td className="even">8150</td>
              </tr>
              <tr>
                <td className="odd">27</td>
                <td className="odd">馮偉權</td>
                <td className="odd">2100</td>
                <td className="odd"> </td>
                <td className="odd">2850</td>
                <td className="odd">2875</td>
                <td className="odd">7825</td>
              </tr>
              <tr>
                <td className="even">28</td>
                <td className="even">吳坤河</td>
                <td className="even">1470</td>
                <td className="even">2275</td>
                <td className="even">2675</td>
                <td className="even">1400</td>
                <td className="even">7820</td>
              </tr>
              <tr>
                <td className="odd">29</td>
                <td className="odd">馬健民</td>
                <td className="odd">2275</td>
                <td className="odd">2275</td>
                <td className="odd">2100</td>
                <td className="odd">1050</td>
                <td className="odd">7700</td>
              </tr>
              <tr>
                <td className="even">30</td>
                <td className="even">張建平</td>
                <td className="even">1960</td>
                <td className="even"> </td>
                <td className="even">2310</td>
                <td className="even">2875</td>
                <td className="even">7145</td>
              </tr>
              <tr>
                <td className="odd">31</td>
                <td className="odd">謝道偉</td>
                <td className="odd"> </td>
                <td className="odd"> </td>
                <td className="odd">2850</td>
                <td className="odd">4025</td>
                <td className="odd">6875</td>
              </tr>
              <tr>
                <td className="even">32</td>
                <td className="even">VAUGHAN MASON</td>
                <td className="even"> </td>
                <td className="even">2275</td>
                <td className="even">2100</td>
                <td className="even">1610</td>
                <td className="even">5985</td>
              </tr>
              <tr>
                <td className="odd">33</td>
                <td className="odd">唐進寶</td>
                <td className="odd">1400</td>
                <td className="odd"> </td>
                <td className="odd">1960</td>
                <td className="odd">2443.3</td>
                <td className="odd">5803.3</td>
              </tr>
              <tr>
                <td className="even">&nbsp; </td>
                <td className="even">&nbsp;</td>
                <td className="even">&nbsp;</td>
                <td className="even">&nbsp;</td>
                <td className="even">&nbsp;</td>
                <td className="even">&nbsp;</td>
                <td className="even">&nbsp;</td>
              </tr>
              <tr>
                <td className="odd">35</td>
                <td className="odd">黃海健</td>
                <td className="odd">1785</td>
                <td className="odd">1715</td>
                <td className="odd"> </td>
                <td className="odd">1400</td>
                <td className="odd">4900</td>
              </tr>
              <tr>
                <td className="even">36</td>
                <td className="even">蔡維臣&nbsp;</td>
                <td className="even">2575</td>
                <td className="even"> </td>
                <td className="even"> </td>
                <td className="even">2240</td>
                <td className="even">4815</td>
              </tr>
              <tr>
                <td className="odd">37</td>
                <td className="odd">蘇勁濤&nbsp;</td>
                <td className="odd"> </td>
                <td className="odd">1995</td>
                <td className="odd">1540</td>
                <td className="odd">980</td>
                <td className="odd">4515</td>
              </tr>
              <tr>
                <td className="even">38</td>
                <td className="even">丘水明&nbsp;</td>
                <td className="even"> </td>
                <td className="even"> </td>
                <td className="even"> </td>
                <td className="even">4025</td>
                <td className="even">4025</td>
              </tr>
              <tr>
                <td className="odd">39</td>
                <td className="odd">MARK MOSSIP</td>
                <td className="odd">1785</td>
                <td className="odd">1715</td>
                <td className="odd"> </td>
                <td className="odd"> </td>
                <td className="odd">3500</td>
              </tr>
              <tr>
                <td className="even">40</td>
                <td className="even">王海鋒</td>
                <td className="even">1680</td>
                <td className="even">1610</td>
                <td className="even"> </td>
                <td className="even"> </td>
                <td className="even">3290</td>
              </tr>
              <tr>
                <td className="odd">41</td>
                <td className="odd">黎偉華</td>
                <td className="odd"> </td>
                <td className="odd"> </td>
                <td className="odd">1750</td>
                <td className="odd">1155</td>
                <td className="odd">2905</td>
              </tr>
              <tr>
                <td className="even">42</td>
                <td className="even">ALFREDO MORALES&nbsp;</td>
                <td className="even"> </td>
                <td className="even">1470</td>
                <td className="even"> </td>
                <td className="even">875</td>
                <td className="even">2345</td>
              </tr>
              <tr>
                <td className="odd">43</td>
                <td className="odd">黎偉民</td>
                <td className="odd"> </td>
                <td className="odd"> </td>
                <td className="odd">1610</td>
                <td className="odd">560</td>
                <td className="odd">2170</td>
              </tr>
              <tr>
                <td className="even">T44</td>
                <td className="even">張桂康</td>
                <td className="even"> </td>
                <td className="even"> </td>
                <td className="even"> </td>
                <td className="even">1610</td>
                <td className="even">1610</td>
              </tr>
              <tr>
                <td className="odd">T44</td>
                <td className="odd">MICHAEL LONG</td>
                <td className="odd">1610</td>
                <td className="odd"> </td>
                <td className="odd"> </td>
                <td className="odd"> </td>
                <td className="odd">1610</td>
              </tr>
              <tr>
                <td className="even">T44</td>
                <td className="even">鄧樹榮</td>
                <td className="even"> </td>
                <td className="even"> </td>
                <td className="even"> </td>
                <td className="even">1610</td>
                <td className="even">1610</td>
              </tr>
              <tr>
                <td className="odd">47</td>
                <td className="odd">ALFONSO MORALES&nbsp;</td>
                <td className="odd"> </td>
                <td className="odd">1540</td>
                <td className="odd"> </td>
                <td className="odd"> </td>
                <td className="odd">1540</td>
              </tr>
              <tr>
                <td className="even">48</td>
                <td className="even">宋有福</td>
                <td className="even"> </td>
                <td className="even"> </td>
                <td className="even"> </td>
                <td className="even">1400</td>
                <td className="even">1400</td>
              </tr>
              <tr>
                <td className="odd">49</td>
                <td className="odd">萬雄立</td>
                <td className="odd"> </td>
                <td className="odd"> </td>
                <td className="odd"> </td>
                <td className="odd">875</td>
                <td className="odd">875</td>
              </tr>
              <tr>
                <td className="even">50</td>
                <td className="even">葉安華</td>
                <td className="even"> </td>
                <td className="even"> </td>
                <td className="even"> </td>
                <td className="even">770</td>
                <td className="even">770</td>
              </tr>
              <tr>
                <td className="odd">51</td>
                <td className="odd">招達貴</td>
                <td className="odd"> </td>
                <td className="odd"> </td>
                <td className="odd"> </td>
                <td className="odd">700</td>
                <td className="odd">700</td>
              </tr>
              <tr>
                <td className="even">52</td>
                <td className="even">甘家榮</td>
                <td className="even"> </td>
                <td className="even"> </td>
                <td className="even"> </td>
                <td className="even">630</td>
                <td className="even">630</td>
              </tr>
            </tbody>
          </table>}
    </div>
  );
}
export default merit;
