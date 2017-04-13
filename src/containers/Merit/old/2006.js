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
                <th scope="col" title="29-30 May, Kau Sai Chau Public Golf Course - North Course">LEG 1</th>
                <th scope="col" title="25-26 Sept, Long Island Golf &amp; Country Club - East/North Course">LEG 2</th>
                <th scope="col" title="16 Oct, Discovery Bay Golf Club - Diamond / Ruby">LEG 3</th>
                <th scope="col" title="24 Oct, The 4th Yinli - HKPGA Classic 2006, Yinli Foreign Investors Golf Club">
                  LEG 4
                </th>
                <th scope="col">TOTAL</th>
              </tr>
              <tr>
                <td className="odd">1</td>
                <td className="odd">James Stewart</td>
                <td className="odd">&nbsp;</td>
                <td className="odd">&nbsp;</td>
                <td className="odd">20000</td>
                <td className="odd">20000</td>
                <td className="odd">40000</td>
              </tr>
              <tr>
                <td className="even">2</td>
                <td className="even">&nbsp;Wong    Woon Man</td>
                <td className="even">3675</td>
                <td className="even">20000</td>
                <td className="even">4025</td>
                <td className="even">8000</td>
                <td className="even">35700</td>
              </tr>
              <tr>
                <td className="odd">3</td>
                <td className="odd">&nbsp;Lee    Man Lok</td>
                <td className="odd">20000</td>
                <td className="odd">4200</td>
                <td className="odd">2575</td>
                <td className="odd">2875</td>
                <td className="odd">29650</td>
              </tr>
              <tr>
                <td className="even">4</td>
                <td className="even">&nbsp;David    Freeman</td>
                <td className="even">8000</td>
                <td className="even">8000</td>
                <td className="even">&nbsp; </td>
                <td className="even">12000</td>
                <td className="even">28000</td>
              </tr>
              <tr>
                <td className="odd">5</td>
                <td className="odd">&nbsp;Grant    Gibson</td>
                <td className="odd">4600</td>
                <td className="odd">4800</td>
                <td className="odd">12000</td>
                <td className="odd">6000</td>
                <td className="odd">27400</td>
              </tr>
              <tr>
                <td className="even">6</td>
                <td className="even">&nbsp;Jovick    Lee</td>
                <td className="even">&nbsp; </td>
                <td className="even">12000</td>
                <td className="even">4025</td>
                <td className="even">4600</td>
                <td className="even">20625</td>
              </tr>
              <tr>
                <td className="odd">7</td>
                <td className="odd">&nbsp;Ducky    Tang</td>
                <td className="odd">12000</td>
                <td className="odd">2310</td>
                <td className="odd">3350</td>
                <td className="odd">2500</td>
                <td className="odd">20160</td>
              </tr>
              <tr>
                <td className="even">8</td>
                <td className="even">&nbsp;Tang    Shing Chi</td>
                <td className="even">2275</td>
                <td className="even">6000</td>
                <td className="even">5200</td>
                <td className="even">4025</td>
                <td className="even">17500</td>
              </tr>
              <tr>
                <td className="odd">9</td>
                <td className="odd">&nbsp;Yau    Sui Ming</td>
                <td className="odd">6000</td>
                <td className="odd">4800</td>
                <td className="odd">&nbsp; </td>
                <td className="odd">4025</td>
                <td className="odd">14825</td>
              </tr>
              <tr>
                <td className="even">10</td>
                <td className="even">&nbsp;Andrew    Good</td>
                <td className="even">5000</td>
                <td className="even">3500</td>
                <td className="even">2700</td>
                <td className="even">2675</td>
                <td className="even">13875</td>
              </tr>
              <tr>
                <td className="odd">11</td>
                <td className="odd">&nbsp;Derek    Fung</td>
                <td className="odd">&nbsp; </td>
                <td className="odd">&nbsp; </td>
                <td className="odd">8000</td>
                <td className="odd">5000</td>
                <td className="odd">13000</td>
              </tr>
              <tr>
                <td className="even">12</td>
                <td className="even">&nbsp;Wilson    Choy</td>
                <td className="even">2937.5</td>
                <td className="even">2415</td>
                <td className="even">5200</td>
                <td className="even">2275</td>
                <td className="even">12827.5</td>
              </tr>
              <tr>
                <td className="odd">13</td>
                <td className="odd">&nbsp;Cheng    Ka Yiu</td>
                <td className="odd">2937.5</td>
                <td className="odd">3850</td>
                <td className="odd">2575</td>
                <td className="odd">3350</td>
                <td className="odd">12712.5</td>
              </tr>
              <tr>
                <td className="even">14</td>
                <td className="even">&nbsp;Peter    Downie</td>
                <td className="even">2170</td>
                <td className="even">2825</td>
                <td className="even">5200</td>
                <td className="even">2415</td>
                <td className="even">12610</td>
              </tr>
              <tr>
                <td className="odd">15</td>
                <td className="odd">&nbsp;Fung    Wai Kuen</td>
                <td className="odd">2937.5</td>
                <td className="odd">3050</td>
                <td className="odd">2310</td>
                <td className="odd">3350</td>
                <td className="odd">11647.5</td>
              </tr>
              <tr>
                <td className="even">16</td>
                <td className="even">&nbsp;Danny    Kan</td>
                <td className="even">2750</td>
                <td className="even">2700</td>
                <td className="even">2875</td>
                <td className="even">2675</td>
                <td className="even">11000</td>
              </tr>
              <tr>
                <td className="odd">17</td>
                <td className="odd">&nbsp;Fung    Wai Kit</td>
                <td className="odd">4200</td>
                <td className="odd">2600</td>
                <td className="odd">1750</td>
                <td className="odd">1330</td>
                <td className="odd">9880</td>
              </tr>
              <tr>
                <td className="even">18</td>
                <td className="even">&nbsp;Lam    Chun Cheung</td>
                <td className="even">2937.5</td>
                <td className="even">2170</td>
                <td className="even">2380</td>
                <td className="even">2275</td>
                <td className="even">9762.5</td>
              </tr>
              <tr>
                <td className="odd">19</td>
                <td className="odd">&nbsp;Vaughan    Mason</td>
                <td className="odd">2100</td>
                <td className="odd">3050</td>
                <td className="odd">2700</td>
                <td className="odd">1330</td>
                <td className="odd">9180</td>
              </tr>
              <tr>
                <td className="even">20</td>
                <td className="even">&nbsp;Sammy    Ng</td>
                <td className="even">2650</td>
                <td className="even">2415</td>
                <td className="even">1960</td>
                <td className="even">2135</td>
                <td className="even">9160</td>
              </tr>
              <tr>
                <td className="odd">21</td>
                <td className="odd">&nbsp;Alexander    Cheng</td>
                <td className="odd">2470</td>
                <td className="odd">2700</td>
                <td className="odd">2205</td>
                <td className="odd">1505</td>
                <td className="odd">8880</td>
              </tr>
              <tr>
                <td className="even">22</td>
                <td className="even">&nbsp;Paul    Riley</td>
                <td className="even">2650</td>
                <td className="even">2525</td>
                <td className="even">3350</td>
                <td className="even">&nbsp; </td>
                <td className="even">8525</td>
              </tr>
              <tr>
                <td className="odd">23</td>
                <td className="odd">Sung    Hang Man</td>
                <td className="odd">&nbsp; </td>
                <td className="odd">2825</td>
                <td className="odd">2700</td>
                <td className="odd">2675</td>
                <td className="odd">8200</td>
              </tr>
              <tr>
                <td className="even">24</td>
                <td className="even">&nbsp;Mark    Smith</td>
                <td className="even">&nbsp; </td>
                <td className="even">2700</td>
                <td className="even">2475</td>
                <td className="even">2875</td>
                <td className="even">8050</td>
              </tr>
              <tr>
                <td className="odd">25</td>
                <td className="odd">&nbsp;Kavin    Kam</td>
                <td className="odd">2275</td>
                <td className="odd">&nbsp; </td>
                <td className="odd">&nbsp; </td>
                <td className="odd">1645</td>
                <td className="odd">7945</td>
              </tr>
              <tr>
                <td className="even">26</td>
                <td className="even">&nbsp;Tang    Man Kee</td>
                <td className="even">2650</td>
                <td className="even">&nbsp; </td>
                <td className="even">2875</td>
                <td className="even">1995</td>
                <td className="even">7520</td>
              </tr>
              <tr>
                <td className="odd">27</td>
                <td className="odd">&nbsp;Michael    Long</td>
                <td className="odd">1995</td>
                <td className="odd">2100</td>
                <td className="odd">2800</td>
                <td className="odd">&nbsp; </td>
                <td className="odd">6895</td>
              </tr>
              <tr>
                <td className="even">28</td>
                <td className="even">Geoffrey    So</td>
                <td className="even">&nbsp; </td>
                <td className="even">2240</td>
                <td className="even">2100</td>
                <td className="even">2135</td>
                <td className="even">6475</td>
              </tr>
              <tr>
                <td className="odd">29</td>
                <td className="odd">&nbsp;Brad    Schadewitz</td>
                <td className="odd">3675</td>
                <td className="odd">&nbsp; </td>
                <td className="odd">2475</td>
                <td className="odd">&nbsp; </td>
                <td className="odd">6150</td>
              </tr>
              <tr>
                <td className="even">30</td>
                <td className="even">Shum    Hing Nam</td>
                <td className="even">&nbsp; </td>
                <td className="even">1890</td>
                <td className="even">2205</td>
                <td className="even">1995</td>
                <td className="even">6090</td>
              </tr>
              <tr>
                <td className="odd">31</td>
                <td className="odd">Mark    Mossip</td>
                <td className="odd">&nbsp; </td>
                <td className="odd">2030</td>
                <td className="odd">2030</td>
                <td className="odd">1120</td>
                <td className="odd">5180</td>
              </tr>
              <tr>
                <td className="even">32</td>
                <td className="even">&nbsp;Kenny    Wong</td>
                <td className="even">2470</td>
                <td className="even">&nbsp; </td>
                <td className="even">&nbsp; </td>
                <td className="even">2675</td>
                <td className="even">5145</td>
              </tr>
              <tr>
                <td className="odd">33</td>
                <td className="odd">Cheung    Kin Ping</td>
                <td className="odd">&nbsp; </td>
                <td className="odd">1960</td>
                <td className="odd">1855</td>
                <td className="odd">1190</td>
                <td className="odd">5005</td>
              </tr>
              <tr>
                <td className="even">34</td>
                <td className="even">&nbsp;Wong    Hoi Fung</td>
                <td className="even">1995</td>
                <td className="even">2525</td>
                <td className="even">&nbsp; </td>
                <td className="even">&nbsp; </td>
                <td className="even">4520</td>
              </tr>
              <tr>
                <td className="odd">35</td>
                <td className="odd">&nbsp;Ma    Kam Fat</td>
                <td className="odd">2470</td>
                <td className="odd">&nbsp; </td>
                <td className="odd">&nbsp; </td>
                <td className="odd">1785</td>
                <td className="odd">4255</td>
              </tr>
              <tr>
                <td className="even">36</td>
                <td className="even">Tong    Chung Po</td>
                <td className="even">1820</td>
                <td className="even">&nbsp; </td>
                <td className="even">&nbsp; </td>
                <td className="even">1785</td>
                <td className="even">3605</td>
              </tr>
              <tr>
                <td className="odd">37</td>
                <td className="odd">&nbsp;Cheung    Kwai Hong</td>
                <td className="odd">2470</td>
                <td className="odd">&nbsp; </td>
                <td className="odd">&nbsp; </td>
                <td className="odd">1015</td>
                <td className="odd">3485</td>
              </tr>
              <tr>
                <td className="even">38</td>
                <td className="even">&nbsp;Lai    Wai Wa</td>
                <td className="even">1890</td>
                <td className="even">&nbsp; </td>
                <td className="even">&nbsp; </td>
                <td className="even">1015</td>
                <td className="even">2905</td>
              </tr>
              <tr>
                <td className="odd">39</td>
                <td className="odd">&nbsp;Jason    Kwok</td>
                <td className="odd">&nbsp; </td>
                <td className="odd">&nbsp; </td>
                <td className="odd">1855</td>
                <td className="odd">875</td>
                <td className="odd">2730</td>
              </tr>
              <tr>
                <td className="even">T40</td>
                <td className="even">Sung    Yau Fuk</td>
                <td className="even">&nbsp; </td>
                <td className="even">&nbsp; </td>
                <td className="even">&nbsp; </td>
                <td className="even">2675</td>
                <td className="even">2675</td>
              </tr>
              <tr>
                <td className="odd">T40</td>
                <td className="odd">Li    Chun Man</td>
                <td className="odd">&nbsp; </td>
                <td className="odd">&nbsp; </td>
                <td className="odd">&nbsp; </td>
                <td className="odd">2675</td>
                <td className="odd">2675</td>
              </tr>
              <tr>
                <td className="even">42</td>
                <td className="even">Yip    On Wah</td>
                <td className="even">&nbsp; </td>
                <td className="even">&nbsp; </td>
                <td className="even">&nbsp; </td>
                <td className="even">2415</td>
                <td className="even">2415</td>
              </tr>
              <tr>
                <td className="odd">43</td>
                <td className="odd">Sung    Sing</td>
                <td className="odd">&nbsp; </td>
                <td className="odd">&nbsp; </td>
                <td className="odd">&nbsp; </td>
                <td className="odd">1890</td>
                <td className="odd">1890</td>
              </tr>
              <tr>
                <td className="even">44</td>
                <td className="even">Tang    Shu Wing</td>
                <td className="even">&nbsp; </td>
                <td className="even">&nbsp; </td>
                <td className="even">&nbsp; </td>
                <td className="even">1645</td>
                <td className="even">1645</td>
              </tr>
              <tr>
                <td className="odd">45</td>
                <td className="odd">Man    Hung Lap</td>
                <td className="odd">&nbsp; </td>
                <td className="odd">&nbsp; </td>
                <td className="odd">&nbsp; </td>
                <td className="odd">1505</td>
                <td className="odd">1505</td>
              </tr>
              <tr>
                <td className="even">46</td>
                <td className="even">Lai    Wai Che</td>
                <td className="even">&nbsp; </td>
                <td className="even">&nbsp; </td>
                <td className="even">&nbsp; </td>
                <td className="even">1330</td>
                <td className="even">1330</td>
              </tr>
              <tr>
                <td className="odd">47</td>
                <td className="odd">Chiu    Tat Kwai</td>
                <td className="odd">&nbsp; </td>
                <td className="odd">&nbsp; </td>
                <td className="odd">&nbsp; </td>
                <td className="odd">875</td>
                <td className="odd">875</td>
              </tr>
              <tr>
                <td className="even">48</td>
                <td className="even">Richard    Hood</td>
                <td className="even">&nbsp; </td>
                <td className="even">&nbsp; </td>
                <td className="even">&nbsp; </td>
                <td className="even">770</td>
                <td className="even">770</td>
              </tr>
              <tr>
                <td className="odd">49</td>
                <td className="odd">Mok    Yuk Lun</td>
                <td className="odd">&nbsp; </td>
                <td className="odd">&nbsp; </td>
                <td className="odd">&nbsp; </td>
                <td className="odd">700</td>
                <td className="odd">700</td>
              </tr>
              <tr>
                <td className="even">50</td>
                <td className="even">Lai    Wai Man</td>
                <td className="even">&nbsp; </td>
                <td className="even">&nbsp; </td>
                <td className="even">&nbsp; </td>
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
                <th scope="col" title="2006年5月29-30日, 滘西洲公眾高爾夫球場 - 北場">第1站</th>
                <th scope="col" title="2006年9月25-26日, 長安高爾夫球鄉村俱樂部 - 東場/北場">第2站</th>
                <th scope="col" title="2006年10月16日, 愉景灣高爾夫球會 - 鑽石/紅寶石球場">第3站</th>
                <th scope="col" title="2006年10月24日,第四屆銀利香港職業高爾夫經典賽, 銀利外商高爾夫球俱樂部">第4站</th>
                <th scope="col">積分</th>
              </tr>
              <tr>
                <td className="odd">1</td>
                <td className="odd">James Stewart</td>
                <td className="odd">&nbsp;</td>
                <td className="odd">&nbsp;</td>
                <td className="odd">20000</td>
                <td className="odd">20000</td>
                <td className="odd">40000</td>
              </tr>
              <tr>
                <td className="even">2</td>
                <td className="even">&nbsp;黃煥民</td>
                <td className="even">3675</td>
                <td className="even">20000</td>
                <td className="even">4025</td>
                <td className="even">8000</td>
                <td className="even">35700</td>
              </tr>
              <tr>
                <td className="odd">3</td>
                <td className="odd">&nbsp;李文樂</td>
                <td className="odd">20000</td>
                <td className="odd">4200</td>
                <td className="odd">2575</td>
                <td className="odd">2875</td>
                <td className="odd">29650</td>
              </tr>
              <tr>
                <td className="even">4</td>
                <td className="even">&nbsp;David    Freeman</td>
                <td className="even">8000</td>
                <td className="even">8000</td>
                <td className="even">&nbsp; </td>
                <td className="even">12000</td>
                <td className="even">28000</td>
              </tr>
              <tr>
                <td className="odd">5</td>
                <td className="odd">&nbsp;Grant    Gibson</td>
                <td className="odd">4600</td>
                <td className="odd">4800</td>
                <td className="odd">12000</td>
                <td className="odd">6000</td>
                <td className="odd">27400</td>
              </tr>
              <tr>
                <td className="even">6</td>
                <td className="even">&nbsp;李永基</td>
                <td className="even">&nbsp; </td>
                <td className="even">12000</td>
                <td className="even">4025</td>
                <td className="even">4600</td>
                <td className="even">20625</td>
              </tr>
              <tr>
                <td className="odd">7</td>
                <td className="odd">&nbsp;鄧偉俊</td>
                <td className="odd">12000</td>
                <td className="odd">2310</td>
                <td className="odd">3350</td>
                <td className="odd">2500</td>
                <td className="odd">20160</td>
              </tr>
              <tr>
                <td className="even">8</td>
                <td className="even">&nbsp;鄧承志</td>
                <td className="even">2275</td>
                <td className="even">6000</td>
                <td className="even">5200</td>
                <td className="even">4025</td>
                <td className="even">17500</td>
              </tr>
              <tr>
                <td className="odd">9</td>
                <td className="odd">&nbsp;丘水明</td>
                <td className="odd">6000</td>
                <td className="odd">4800</td>
                <td className="odd">&nbsp; </td>
                <td className="odd">4025</td>
                <td className="odd">14825</td>
              </tr>
              <tr>
                <td className="even">10</td>
                <td className="even">&nbsp;Andrew    Good</td>
                <td className="even">5000</td>
                <td className="even">3500</td>
                <td className="even">2700</td>
                <td className="even">2675</td>
                <td className="even">13875</td>
              </tr>
              <tr>
                <td className="odd">11</td>
                <td className="odd">&nbsp;馮裕德</td>
                <td className="odd">&nbsp; </td>
                <td className="odd">&nbsp; </td>
                <td className="odd">8000</td>
                <td className="odd">5000</td>
                <td className="odd">13000</td>
              </tr>
              <tr>
                <td className="even">12</td>
                <td className="even">&nbsp;蔡維臣</td>
                <td className="even">2937.5</td>
                <td className="even">2415</td>
                <td className="even">5200</td>
                <td className="even">2275</td>
                <td className="even">12827.5</td>
              </tr>
              <tr>
                <td className="odd">13</td>
                <td className="odd">&nbsp;鄭家耀</td>
                <td className="odd">2937.5</td>
                <td className="odd">3850</td>
                <td className="odd">2575</td>
                <td className="odd">3350</td>
                <td className="odd">12712.5</td>
              </tr>
              <tr>
                <td className="even">14</td>
                <td className="even">&nbsp;Peter    Downie</td>
                <td className="even">2170</td>
                <td className="even">2825</td>
                <td className="even">5200</td>
                <td className="even">2415</td>
                <td className="even">12610</td>
              </tr>
              <tr>
                <td className="odd">15</td>
                <td className="odd">&nbsp;馮偉權</td>
                <td className="odd">2937.5</td>
                <td className="odd">3050</td>
                <td className="odd">2310</td>
                <td className="odd">3350</td>
                <td className="odd">11647.5</td>
              </tr>
              <tr>
                <td className="even">16</td>
                <td className="even">&nbsp;簡栢堅</td>
                <td className="even">2750</td>
                <td className="even">2700</td>
                <td className="even">2875</td>
                <td className="even">2675</td>
                <td className="even">11000</td>
              </tr>
              <tr>
                <td className="odd">17</td>
                <td className="odd">&nbsp;馮偉傑</td>
                <td className="odd">4200</td>
                <td className="odd">2600</td>
                <td className="odd">1750</td>
                <td className="odd">1330</td>
                <td className="odd">9880</td>
              </tr>
              <tr>
                <td className="even">18</td>
                <td className="even">&nbsp;林春祥</td>
                <td className="even">2937.5</td>
                <td className="even">2170</td>
                <td className="even">2380</td>
                <td className="even">2275</td>
                <td className="even">9762.5</td>
              </tr>
              <tr>
                <td className="odd">19</td>
                <td className="odd">&nbsp;Vaughan    Mason</td>
                <td className="odd">2100</td>
                <td className="odd">3050</td>
                <td className="odd">2700</td>
                <td className="odd">1330</td>
                <td className="odd">9180</td>
              </tr>
              <tr>
                <td className="even">20</td>
                <td className="even">&nbsp;吳坤河</td>
                <td className="even">2650</td>
                <td className="even">2415</td>
                <td className="even">1960</td>
                <td className="even">2135</td>
                <td className="even">9160</td>
              </tr>
              <tr>
                <td className="odd">21</td>
                <td className="odd">&nbsp;鄭德謙</td>
                <td className="odd">2470</td>
                <td className="odd">2700</td>
                <td className="odd">2205</td>
                <td className="odd">1505</td>
                <td className="odd">8880</td>
              </tr>
              <tr>
                <td className="even">22</td>
                <td className="even">&nbsp;Paul    Riley</td>
                <td className="even">2650</td>
                <td className="even">2525</td>
                <td className="even">3350</td>
                <td className="even">&nbsp; </td>
                <td className="even">8525</td>
              </tr>
              <tr>
                <td className="odd">23</td>
                <td className="odd">宋幸文</td>
                <td className="odd">&nbsp; </td>
                <td className="odd">2825</td>
                <td className="odd">2700</td>
                <td className="odd">2675</td>
                <td className="odd">8200</td>
              </tr>
              <tr>
                <td className="even">24</td>
                <td className="even">&nbsp;Mark    Smith</td>
                <td className="even">&nbsp; </td>
                <td className="even">2700</td>
                <td className="even">2475</td>
                <td className="even">2875</td>
                <td className="even">8050</td>
              </tr>
              <tr>
                <td className="odd">25</td>
                <td className="odd">&nbsp;甘家榮</td>
                <td className="odd">2275</td>
                <td className="odd">&nbsp; </td>
                <td className="odd">&nbsp; </td>
                <td className="odd">1645</td>
                <td className="odd">7945</td>
              </tr>
              <tr>
                <td className="even">26</td>
                <td className="even">&nbsp;鄧敏祺</td>
                <td className="even">2650</td>
                <td className="even">&nbsp; </td>
                <td className="even">2875</td>
                <td className="even">1995</td>
                <td className="even">7520</td>
              </tr>
              <tr>
                <td className="odd">27</td>
                <td className="odd">&nbsp;Michael    Long</td>
                <td className="odd">1995</td>
                <td className="odd">2100</td>
                <td className="odd">2800</td>
                <td className="odd">&nbsp; </td>
                <td className="odd">6895</td>
              </tr>
              <tr>
                <td className="even">28</td>
                <td className="even">蘇勁濤</td>
                <td className="even">&nbsp; </td>
                <td className="even">2240</td>
                <td className="even">2100</td>
                <td className="even">2135</td>
                <td className="even">6475</td>
              </tr>
              <tr>
                <td className="odd">29</td>
                <td className="odd">&nbsp;謝道偉</td>
                <td className="odd">3675</td>
                <td className="odd">&nbsp; </td>
                <td className="odd">2475</td>
                <td className="odd">&nbsp; </td>
                <td className="odd">6150</td>
              </tr>
              <tr>
                <td className="even">30</td>
                <td className="even">沈興南</td>
                <td className="even">&nbsp; </td>
                <td className="even">1890</td>
                <td className="even">2205</td>
                <td className="even">1995</td>
                <td className="even">6090</td>
              </tr>
              <tr>
                <td className="odd">31</td>
                <td className="odd">Mark    Mossip</td>
                <td className="odd">&nbsp; </td>
                <td className="odd">2030</td>
                <td className="odd">2030</td>
                <td className="odd">1120</td>
                <td className="odd">5180</td>
              </tr>
              <tr>
                <td className="even">32</td>
                <td className="even">&nbsp;黃海健</td>
                <td className="even">2470</td>
                <td className="even">&nbsp; </td>
                <td className="even">&nbsp; </td>
                <td className="even">2675</td>
                <td className="even">5145</td>
              </tr>
              <tr>
                <td className="odd">33</td>
                <td className="odd">張建平</td>
                <td className="odd">&nbsp; </td>
                <td className="odd">1960</td>
                <td className="odd">1855</td>
                <td className="odd">1190</td>
                <td className="odd">5005</td>
              </tr>
              <tr>
                <td className="even">34</td>
                <td className="even">&nbsp;王海鋒</td>
                <td className="even">1995</td>
                <td className="even">2525</td>
                <td className="even">&nbsp; </td>
                <td className="even">&nbsp; </td>
                <td className="even">4520</td>
              </tr>
              <tr>
                <td className="odd">35</td>
                <td className="odd">&nbsp;馬金發</td>
                <td className="odd">2470</td>
                <td className="odd">&nbsp; </td>
                <td className="odd">&nbsp; </td>
                <td className="odd">1785</td>
                <td className="odd">4255</td>
              </tr>
              <tr>
                <td className="even">36</td>
                <td className="even">Tong    Chung Po</td>
                <td className="even">1820</td>
                <td className="even">&nbsp; </td>
                <td className="even">&nbsp; </td>
                <td className="even">1785</td>
                <td className="even">3605</td>
              </tr>
              <tr>
                <td className="odd">37</td>
                <td className="odd">&nbsp;張桂康</td>
                <td className="odd">2470</td>
                <td className="odd">&nbsp; </td>
                <td className="odd">&nbsp; </td>
                <td className="odd">1015</td>
                <td className="odd">3485</td>
              </tr>
              <tr>
                <td className="even">38</td>
                <td className="even">&nbsp;黎偉華</td>
                <td className="even">1890</td>
                <td className="even">&nbsp; </td>
                <td className="even">&nbsp; </td>
                <td className="even">1015</td>
                <td className="even">2905</td>
              </tr>
              <tr>
                <td className="odd">39</td>
                <td className="odd">&nbsp;郭永昌</td>
                <td className="odd">&nbsp; </td>
                <td className="odd">&nbsp; </td>
                <td className="odd">1855</td>
                <td className="odd">875</td>
                <td className="odd">2730</td>
              </tr>
              <tr>
                <td className="even">T40</td>
                <td className="even">宋有福</td>
                <td className="even">&nbsp; </td>
                <td className="even">&nbsp; </td>
                <td className="even">&nbsp; </td>
                <td className="even">2675</td>
                <td className="even">2675</td>
              </tr>
              <tr>
                <td className="odd">T40</td>
                <td className="odd">李俊民</td>
                <td className="odd">&nbsp; </td>
                <td className="odd">&nbsp; </td>
                <td className="odd">&nbsp; </td>
                <td className="odd">2675</td>
                <td className="odd">2675</td>
              </tr>
              <tr>
                <td className="even">42</td>
                <td className="even">葉安華</td>
                <td className="even">&nbsp; </td>
                <td className="even">&nbsp; </td>
                <td className="even">&nbsp; </td>
                <td className="even">2415</td>
                <td className="even">2415</td>
              </tr>
              <tr>
                <td className="odd">43</td>
                <td className="odd">宋謦全</td>
                <td className="odd">&nbsp; </td>
                <td className="odd">&nbsp; </td>
                <td className="odd">&nbsp; </td>
                <td className="odd">1890</td>
                <td className="odd">1890</td>
              </tr>
              <tr>
                <td className="even">44</td>
                <td className="even">鄧樹榮</td>
                <td className="even">&nbsp; </td>
                <td className="even">&nbsp; </td>
                <td className="even">&nbsp; </td>
                <td className="even">1645</td>
                <td className="even">1645</td>
              </tr>
              <tr>
                <td className="odd">45</td>
                <td className="odd">萬雄立</td>
                <td className="odd">&nbsp; </td>
                <td className="odd">&nbsp; </td>
                <td className="odd">&nbsp; </td>
                <td className="odd">1505</td>
                <td className="odd">1505</td>
              </tr>
              <tr>
                <td className="even">46</td>
                <td className="even">黎偉智</td>
                <td className="even">&nbsp; </td>
                <td className="even">&nbsp; </td>
                <td className="even">&nbsp; </td>
                <td className="even">1330</td>
                <td className="even">1330</td>
              </tr>
              <tr>
                <td className="odd">47</td>
                <td className="odd">招達貴</td>
                <td className="odd">&nbsp; </td>
                <td className="odd">&nbsp; </td>
                <td className="odd">&nbsp; </td>
                <td className="odd">875</td>
                <td className="odd">875</td>
              </tr>
              <tr>
                <td className="even">48</td>
                <td className="even">Richard    Hood</td>
                <td className="even">&nbsp; </td>
                <td className="even">&nbsp; </td>
                <td className="even">&nbsp; </td>
                <td className="even">770</td>
                <td className="even">770</td>
              </tr>
              <tr>
                <td className="odd">49</td>
                <td className="odd">莫旭麟</td>
                <td className="odd">&nbsp; </td>
                <td className="odd">&nbsp; </td>
                <td className="odd">&nbsp; </td>
                <td className="odd">700</td>
                <td className="odd">700</td>
              </tr>
              <tr>
                <td className="even">50</td>
                <td className="even">黎偉民</td>
                <td className="even">&nbsp; </td>
                <td className="even">&nbsp; </td>
                <td className="even">&nbsp; </td>
                <td className="even">630</td>
                <td className="even">630</td>
              </tr>
            </tbody>
          </table>}
    </div>
  );
}
export default merit;
