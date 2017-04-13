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
                <th scope="col" title="28-29 April, 2008, Clearwater Bay Golf Club">LEG 1</th>
                <th scope="col" title="27-28 May, 2008, The Jockey Club KSC Public Golf Course">LEG 2</th>
                <th scope="col" title="8-9 September, 2008, Discovery Bay Golf Club - Jade / Ruby Course">LEG 3</th>
                <th scope="col" title="20-21 October, 2008, Yinli Foreign Investors Golf Club">LEG 4</th>
                <th scope="col">TOTAL</th>
              </tr>
              <tr>
                <td className="odd">1</td>
                <td className="odd">Wong Woon Man</td>
                <td className="odd">4600</td>
                <td className="odd">12000</td>
                <td className="odd">6000</td>
                <td className="odd">20000</td>
                <td className="odd">42600</td>
              </tr>
              <tr>
                <td className="even">2</td>
                <td className="even">David Freeman</td>
                <td className="even">10000</td>
                <td className="even">20000</td>
                <td className="even">8000</td>
                <td className="even">4400</td>
                <td className="even">42400</td>
              </tr>
              <tr>
                <td className="odd">3</td>
                <td className="odd">Tang Shing Chi</td>
                <td className="odd">20000</td>
                <td className="odd">1680</td>
                <td className="odd">12000</td>
                <td className="odd">2700</td>
                <td className="odd">36380</td>
              </tr>
              <tr>
                <td className="even">4</td>
                <td className="even">Grant Gibson</td>
                <td className="even">5000</td>
                <td className="even">5000</td>
                <td className="even">20000</td>
                <td className="even">6333.3</td>
                <td className="even">36333.3</td>
              </tr>
              <tr>
                <td className="odd">5</td>
                <td className="odd">Derek Fung</td>
                <td className="odd">6000</td>
                <td className="odd">8000</td>
                <td className="odd">3500</td>
                <td className="odd">12000</td>
                <td className="odd">29500</td>
              </tr>
              <tr>
                <td className="even">6</td>
                <td className="even">Tang Man Kee</td>
                <td className="even">3350</td>
                <td className="even">4400</td>
                <td className="even">2850</td>
                <td className="even">6333.3</td>
                <td className="even">16933.3</td>
              </tr>
              <tr>
                <td className="odd">7</td>
                <td className="odd">Dominique Boulet</td>
                <td className="odd">10000</td>
                <td className="odd">4400</td>
                <td className="odd">2345</td>
                <td className="odd">&nbsp;</td>
                <td className="odd">16745</td>
              </tr>
              <tr>
                <td className="even">8</td>
                <td className="even">Lee Man Lok</td>
                <td className="even">3850</td>
                <td className="even">6000</td>
                <td className="even">3200</td>
                <td className="even">2650</td>
                <td className="even">15700</td>
              </tr>
              <tr>
                <td className="odd">9</td>
                <td className="odd">Ducky Tang</td>
                <td className="odd">2700</td>
                <td className="odd">2750</td>
                <td className="odd">5000</td>
                <td className="odd">2475</td>
                <td className="odd">12925</td>
              </tr>
              <tr>
                <td className="even">10</td>
                <td className="even">Paul Riley</td>
                <td className="even">&nbsp;</td>
                <td className="even">2700</td>
                <td className="even">2675</td>
                <td className="even">6333.3</td>
                <td className="even">11708.3</td>
              </tr>
              <tr>
                <td className="odd">11</td>
                <td className="odd">Liu Kai Mung</td>
                <td className="odd">2650</td>
                <td className="odd">2650</td>
                <td className="odd">1890</td>
                <td className="odd">4400</td>
                <td className="odd">11590</td>
              </tr>
              <tr>
                <td className="even">12</td>
                <td className="even">Wilson Choy</td>
                <td className="even">2500</td>
                <td className="even">2500</td>
                <td className="even">2475</td>
                <td className="even">3850</td>
                <td className="even">11325</td>
              </tr>
              <tr>
                <td className="odd">13</td>
                <td className="odd">James Stewart</td>
                <td className="odd">2750</td>
                <td className="odd">&nbsp;</td>
                <td className="odd">4400</td>
                <td className="odd">3350</td>
                <td className="odd">10500</td>
              </tr>
              <tr>
                <td className="even">14</td>
                <td className="even">Vaughan Mason</td>
                <td className="even">3350</td>
                <td className="even">2527</td>
                <td className="even">1820</td>
                <td className="even">2800</td>
                <td className="even">10497</td>
              </tr>
              <tr>
                <td className="odd">15</td>
                <td className="odd">Andrew Good</td>
                <td className="odd">&nbsp;</td>
                <td className="odd">3112.5</td>
                <td className="odd">3850</td>
                <td className="odd">3350</td>
                <td className="odd">10312.5</td>
              </tr>
              <tr>
                <td className="even">16</td>
                <td className="even">Sung Hang Man</td>
                <td className="even">2310</td>
                <td className="even">3112.5</td>
                <td className="even">2675</td>
                <td className="even">1575</td>
                <td className="even">9672.5</td>
              </tr>
              <tr>
                <td className="odd">17</td>
                <td className="odd">Cheng KaYiu</td>
                <td className="odd">2800</td>
                <td className="odd">2527</td>
                <td className="odd">2100</td>
                <td className="odd">2205</td>
                <td className="odd">9632</td>
              </tr>
              <tr>
                <td className="even">18</td>
                <td className="even">Li Chun Man</td>
                <td className="even">2100</td>
                <td className="even">2800</td>
                <td className="even">2675</td>
                <td className="even">1400</td>
                <td className="even">8975</td>
              </tr>
              <tr>
                <td className="odd">19</td>
                <td className="odd">Fung Wai Kuen&nbsp;</td>
                <td className="odd">4200</td>
                <td className="odd">2415</td>
                <td className="odd">2100</td>
                <td className="odd">&nbsp;</td>
                <td className="odd">8715</td>
              </tr>
              <tr>
                <td className="even">20</td>
                <td className="even">Eric Ma</td>
                <td className="even">&nbsp;</td>
                <td className="even">3850</td>
                <td className="even">2100</td>
                <td className="even">2575</td>
                <td className="even">8525</td>
              </tr>
              <tr>
                <td className="odd">21</td>
                <td className="odd">Mark Mossip</td>
                <td className="odd">2100</td>
                <td className="odd">1995</td>
                <td className="odd">2475</td>
                <td className="odd">1925</td>
                <td className="odd">8495</td>
              </tr>
              <tr>
                <td className="even">22</td>
                <td className="even">Cheung Kin Ping</td>
                <td className="even">2875</td>
                <td className="even">1995</td>
                <td className="even">2100</td>
                <td className="even">1295</td>
                <td className="even">8265</td>
              </tr>
              <tr>
                <td className="odd">23</td>
                <td className="odd">Danny Kan</td>
                <td className="odd">&nbsp;</td>
                <td className="odd">3112.5</td>
                <td className="odd">2900</td>
                <td className="odd">2205</td>
                <td className="odd">8217.5</td>
              </tr>
              <tr>
                <td className="even">24</td>
                <td className="even">Shum Hing Nam</td>
                <td className="even">1750</td>
                <td className="even">2415</td>
                <td className="even">2675</td>
                <td className="even">1120</td>
                <td className="even">7960</td>
              </tr>
              <tr>
                <td className="odd">25</td>
                <td className="odd">Alexander Cheng</td>
                <td className="odd">2310</td>
                <td className="odd">2275</td>
                <td className="odd">&nbsp;</td>
                <td className="odd">2575</td>
                <td className="odd">7160</td>
              </tr>
              <tr>
                <td className="even">26</td>
                <td className="even">Wong Hoi Kin</td>
                <td className="even">2310</td>
                <td className="even">1855</td>
                <td className="even">1540</td>
                <td className="even">1190</td>
                <td className="even">6895</td>
              </tr>
              <tr>
                <td className="odd">27</td>
                <td className="odd">Geoffrey So</td>
                <td className="odd">1540</td>
                <td className="odd">1750</td>
                <td className="odd">1715</td>
                <td className="odd">1750</td>
                <td className="odd">6755</td>
              </tr>
              <tr>
                <td className="even">28</td>
                <td className="even">Richard Kan</td>
                <td className="even">2600</td>
                <td className="even">2170</td>
                <td className="even">&nbsp;</td>
                <td className="even">1925</td>
                <td className="even">6695</td>
              </tr>
              <tr>
                <td className="odd">29</td>
                <td className="odd">Jason Kwok</td>
                <td className="odd">1960</td>
                <td className="odd">&nbsp;</td>
                <td className="odd">2100</td>
                <td className="odd">2380</td>
                <td className="odd">6440</td>
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
                <td className="odd">31</td>
                <td className="odd">Tony Lee</td>
                <td className="odd">1365</td>
                <td className="odd">2275</td>
                <td className="odd">1155</td>
                <td className="odd">1050</td>
                <td className="odd">5845</td>
              </tr>
              <tr>
                <td className="even">T32</td>
                <td className="even">Fung Wai Kit</td>
                <td className="even">1540</td>
                <td className="even">&nbsp;</td>
                <td className="even">2345</td>
                <td className="even">1925</td>
                <td className="even">5810</td>
              </tr>
              <tr>
                <td className="odd">T32</td>
                <td className="odd">Ma Kin Man</td>
                <td className="odd">2100</td>
                <td className="odd">2100</td>
                <td className="odd">1610</td>
                <td className="odd">&nbsp;</td>
                <td className="odd">5810</td>
              </tr>
              <tr>
                <td className="even">34</td>
                <td className="even">Kevin Hind</td>
                <td className="even">2875</td>
                <td className="even">&nbsp;</td>
                <td className="even">&nbsp;</td>
                <td className="even">2800</td>
                <td className="even">5675</td>
              </tr>
              <tr>
                <td className="odd">35</td>
                <td className="odd">Jovick Lee</td>
                <td className="odd">&nbsp;</td>
                <td className="odd">&nbsp;</td>
                <td className="odd">2675</td>
                <td className="odd">2900</td>
                <td className="odd">5575</td>
              </tr>
              <tr>
                <td className="even">36</td>
                <td className="even">Lam Chun Cheung</td>
                <td className="even">2500</td>
                <td className="even">&nbsp;</td>
                <td className="even">&nbsp;</td>
                <td className="even">2475</td>
                <td className="even">4975</td>
              </tr>
              <tr>
                <td className="odd">37</td>
                <td className="odd">Lim Choon Shin</td>
                <td className="odd">&nbsp;</td>
                <td className="odd">&nbsp;</td>
                <td className="odd">2675</td>
                <td className="odd">2205</td>
                <td className="odd">4880</td>
              </tr>
              <tr>
                <td className="even">T38</td>
                <td className="even">Lai Wai Man</td>
                <td className="even">1365</td>
                <td className="even">1540</td>
                <td className="even">1050</td>
                <td className="even">700</td>
                <td className="even">4655</td>
              </tr>
              <tr>
                <td className="odd">T38</td>
                <td className="odd">Stephen Hong</td>
                <td className="odd">1680</td>
                <td className="odd">&nbsp;</td>
                <td className="odd">1400</td>
                <td className="odd">1575</td>
                <td className="odd">4655</td>
              </tr>
              <tr>
                <td className="even">40</td>
                <td className="even">Tong Chun Po</td>
                <td className="even">1855</td>
                <td className="even">&nbsp;</td>
                <td className="even">1155</td>
                <td className="even">1575</td>
                <td className="even">4585</td>
              </tr>
              <tr>
                <td className="odd">41</td>
                <td className="odd">Trevor Ball</td>
                <td className="odd">&nbsp;</td>
                <td className="odd">&nbsp;</td>
                <td className="odd">4400</td>
                <td className="odd">&nbsp;</td>
                <td className="odd">4400</td>
              </tr>
              <tr>
                <td className="even">42</td>
                <td className="even">Sammy Ng</td>
                <td className="even">&nbsp;</td>
                <td className="even">1855</td>
                <td className="even">1715</td>
                <td className="even">&nbsp;</td>
                <td className="even">3570</td>
              </tr>
              <tr>
                <td className="odd">43</td>
                <td className="odd">Wong Hoi Fung</td>
                <td className="odd">1855</td>
                <td className="odd">&nbsp;</td>
                <td className="odd">&nbsp;</td>
                <td className="odd">1295</td>
                <td className="odd">3150</td>
              </tr>
              <tr>
                <td className="even">44</td>
                <td className="even">Brad Schadewitz</td>
                <td className="even">&nbsp;</td>
                <td className="even">3112.5</td>
                <td className="even">&nbsp;</td>
                <td className="even">&nbsp;</td>
                <td className="even">3112.5</td>
              </tr>
              <tr>
                <td className="odd">45</td>
                <td className="odd">Michael Long</td>
                <td className="odd">1540</td>
                <td className="odd">&nbsp;</td>
                <td className="odd">1470</td>
                <td className="odd">&nbsp;</td>
                <td className="odd">3010</td>
              </tr>
              <tr>
                <td className="even">46</td>
                <td className="even">Sung Yau Fuk</td>
                <td className="even">&nbsp;</td>
                <td className="even">&nbsp;</td>
                <td className="even">&nbsp;</td>
                <td className="even">2800</td>
                <td className="even">2800</td>
              </tr>
              <tr>
                <td className="odd">47</td>
                <td className="odd">Sung Sing</td>
                <td className="odd">&nbsp;</td>
                <td className="odd">&nbsp;</td>
                <td className="odd">&nbsp;</td>
                <td className="odd">2205</td>
                <td className="odd">2205</td>
              </tr>
              <tr>
                <td className="even">48</td>
                <td className="even">Cheung Kwai Hong</td>
                <td className="even">&nbsp;</td>
                <td className="even">&nbsp;</td>
                <td className="even">&nbsp;</td>
                <td className="even">1925</td>
                <td className="even">1925</td>
              </tr>
              <tr>
                <td className="odd">49</td>
                <td className="odd">Lai Wai Che</td>
                <td className="odd">&nbsp;</td>
                <td className="odd">&nbsp;</td>
                <td className="odd">&nbsp;</td>
                <td className="odd">1575</td>
                <td className="odd">1575</td>
              </tr>
              <tr>
                <td className="even">50</td>
                <td className="even">Alfonso Morales</td>
                <td className="even">&nbsp;</td>
                <td className="even">&nbsp;</td>
                <td className="even">1260</td>
                <td className="even">&nbsp;</td>
                <td className="even">1260</td>
              </tr>
              <tr>
                <td className="odd">51</td>
                <td className="odd">Kavin Kam</td>
                <td className="odd">&nbsp;</td>
                <td className="odd">&nbsp;</td>
                <td className="odd">&nbsp;</td>
                <td className="odd">945</td>
                <td className="odd">945</td>
              </tr>
              <tr>
                <td className="even">52</td>
                <td className="even">Man Hung Lap</td>
                <td className="even">&nbsp;</td>
                <td className="even">&nbsp;</td>
                <td className="even">&nbsp;</td>
                <td className="even">840</td>
                <td className="even">840</td>
              </tr>
              <tr>
                <td className="odd">53</td>
                <td className="odd">Mok Yuk Lun</td>
                <td className="odd">&nbsp;</td>
                <td className="odd">&nbsp;</td>
                <td className="odd">&nbsp;</td>
                <td className="odd">770</td>
                <td className="odd">770</td>
              </tr>
            </tbody>
          </table>
        : <table className="table table-striped">
            <tbody>
              <tr>
                <th scope="col">排名</th>
                <th scope="col">球手</th>
                <th scope="col" title="2008年4月28-29日, 清水灣高爾夫球鄉村俱樂部">第1站</th>
                <th scope="col" title="2008年5月27-28日, 滘西洲公眾高爾夫球場 - 北場">第2站</th>
                <th scope="col" title="2008年9月8-9日, 愉景灣高爾夫球會 - 翡翠/紅寶石球場">第3站</th>
                <th scope="col" title="2008年10月20-21日, 銀利外商高爾夫球俱樂部">第4站</th>
                <th scope="col">積分</th>
              </tr>
              <tr>
                <td className="odd">1</td>
                <td className="odd">黃煥民</td>
                <td className="odd">4600</td>
                <td className="odd">12000</td>
                <td className="odd">6000</td>
                <td className="odd">20000</td>
                <td className="odd">42600</td>
              </tr>
              <tr>
                <td className="even">2</td>
                <td className="even">David Freeman</td>
                <td className="even">10000</td>
                <td className="even">20000</td>
                <td className="even">8000</td>
                <td className="even">4400</td>
                <td className="even">42400</td>
              </tr>
              <tr>
                <td className="odd">3</td>
                <td className="odd">鄧承志</td>
                <td className="odd">20000</td>
                <td className="odd">1680</td>
                <td className="odd">12000</td>
                <td className="odd">2700</td>
                <td className="odd">36380</td>
              </tr>
              <tr>
                <td className="even">4</td>
                <td className="even">Grant Gibson</td>
                <td className="even">5000</td>
                <td className="even">5000</td>
                <td className="even">20000</td>
                <td className="even">6333.3</td>
                <td className="even">36333.3</td>
              </tr>
              <tr>
                <td className="odd">5</td>
                <td className="odd">馮裕德</td>
                <td className="odd">6000</td>
                <td className="odd">8000</td>
                <td className="odd">3500</td>
                <td className="odd">12000</td>
                <td className="odd">29500</td>
              </tr>
              <tr>
                <td className="even">6</td>
                <td className="even">鄧敏祺</td>
                <td className="even">3350</td>
                <td className="even">4400</td>
                <td className="even">2850</td>
                <td className="even">6333.3</td>
                <td className="even">16933.3</td>
              </tr>
              <tr>
                <td className="odd">7</td>
                <td className="odd">Dominique Boulet</td>
                <td className="odd">10000</td>
                <td className="odd">4400</td>
                <td className="odd">2345</td>
                <td className="odd">&nbsp;</td>
                <td className="odd">16745</td>
              </tr>
              <tr>
                <td className="even">8</td>
                <td className="even">李文樂</td>
                <td className="even">3850</td>
                <td className="even">6000</td>
                <td className="even">3200</td>
                <td className="even">2650</td>
                <td className="even">15700</td>
              </tr>
              <tr>
                <td className="odd">9</td>
                <td className="odd">鄧偉俊</td>
                <td className="odd">2700</td>
                <td className="odd">2750</td>
                <td className="odd">5000</td>
                <td className="odd">2475</td>
                <td className="odd">12925</td>
              </tr>
              <tr>
                <td className="even">10</td>
                <td className="even">Paul Riley</td>
                <td className="even">&nbsp;</td>
                <td className="even">2700</td>
                <td className="even">2675</td>
                <td className="even">6333.3</td>
                <td className="even">11708.3</td>
              </tr>
              <tr>
                <td className="odd">11</td>
                <td className="odd">廖鍇夢</td>
                <td className="odd">2650</td>
                <td className="odd">2650</td>
                <td className="odd">1890</td>
                <td className="odd">4400</td>
                <td className="odd">11590</td>
              </tr>
              <tr>
                <td className="even">12</td>
                <td className="even">蔡維臣</td>
                <td className="even">2500</td>
                <td className="even">2500</td>
                <td className="even">2475</td>
                <td className="even">3850</td>
                <td className="even">11325</td>
              </tr>
              <tr>
                <td className="odd">13</td>
                <td className="odd">James Stewart</td>
                <td className="odd">2750</td>
                <td className="odd">&nbsp;</td>
                <td className="odd">4400</td>
                <td className="odd">3350</td>
                <td className="odd">10500</td>
              </tr>
              <tr>
                <td className="even">14</td>
                <td className="even">Vaughan Mason</td>
                <td className="even">3350</td>
                <td className="even">2527</td>
                <td className="even">1820</td>
                <td className="even">2800</td>
                <td className="even">10497</td>
              </tr>
              <tr>
                <td className="odd">15</td>
                <td className="odd">Andrew Good</td>
                <td className="odd">&nbsp;</td>
                <td className="odd">3112.5</td>
                <td className="odd">3850</td>
                <td className="odd">3350</td>
                <td className="odd">10312.5</td>
              </tr>
              <tr>
                <td className="even">16</td>
                <td className="even">宋幸文</td>
                <td className="even">2310</td>
                <td className="even">3112.5</td>
                <td className="even">2675</td>
                <td className="even">1575</td>
                <td className="even">9672.5</td>
              </tr>
              <tr>
                <td className="odd">17</td>
                <td className="odd">鄭家耀</td>
                <td className="odd">2800</td>
                <td className="odd">2527</td>
                <td className="odd">2100</td>
                <td className="odd">2205</td>
                <td className="odd">9632</td>
              </tr>
              <tr>
                <td className="even">18</td>
                <td className="even">李俊民</td>
                <td className="even">2100</td>
                <td className="even">2800</td>
                <td className="even">2675</td>
                <td className="even">1400</td>
                <td className="even">8975</td>
              </tr>
              <tr>
                <td className="odd">19</td>
                <td className="odd">馮偉權&nbsp;</td>
                <td className="odd">4200</td>
                <td className="odd">2415</td>
                <td className="odd">2100</td>
                <td className="odd">&nbsp;</td>
                <td className="odd">8715</td>
              </tr>
              <tr>
                <td className="even">20</td>
                <td className="even">Eric Ma</td>
                <td className="even">&nbsp;</td>
                <td className="even">3850</td>
                <td className="even">2100</td>
                <td className="even">2575</td>
                <td className="even">8525</td>
              </tr>
              <tr>
                <td className="odd">21</td>
                <td className="odd">Mark Mossip</td>
                <td className="odd">2100</td>
                <td className="odd">1995</td>
                <td className="odd">2475</td>
                <td className="odd">1925</td>
                <td className="odd">8495</td>
              </tr>
              <tr>
                <td className="even">22</td>
                <td className="even">張建平</td>
                <td className="even">2875</td>
                <td className="even">1995</td>
                <td className="even">2100</td>
                <td className="even">1295</td>
                <td className="even">8265</td>
              </tr>
              <tr>
                <td className="odd">23</td>
                <td className="odd">簡栢堅</td>
                <td className="odd">&nbsp;</td>
                <td className="odd">3112.5</td>
                <td className="odd">2900</td>
                <td className="odd">2205</td>
                <td className="odd">8217.5</td>
              </tr>
              <tr>
                <td className="even">24</td>
                <td className="even">沈興南</td>
                <td className="even">1750</td>
                <td className="even">2415</td>
                <td className="even">2675</td>
                <td className="even">1120</td>
                <td className="even">7960</td>
              </tr>
              <tr>
                <td className="odd">25</td>
                <td className="odd">鄭德謙</td>
                <td className="odd">2310</td>
                <td className="odd">2275</td>
                <td className="odd">&nbsp;</td>
                <td className="odd">2575</td>
                <td className="odd">7160</td>
              </tr>
              <tr>
                <td className="even">26</td>
                <td className="even">黃海健</td>
                <td className="even">2310</td>
                <td className="even">1855</td>
                <td className="even">1540</td>
                <td className="even">1190</td>
                <td className="even">6895</td>
              </tr>
              <tr>
                <td className="odd">27</td>
                <td className="odd">蘇勁濤</td>
                <td className="odd">1540</td>
                <td className="odd">1750</td>
                <td className="odd">1715</td>
                <td className="odd">1750</td>
                <td className="odd">6755</td>
              </tr>
              <tr>
                <td className="even">28</td>
                <td className="even">簡志強</td>
                <td className="even">2600</td>
                <td className="even">2170</td>
                <td className="even">&nbsp;</td>
                <td className="even">1925</td>
                <td className="even">6695</td>
              </tr>
              <tr>
                <td className="odd">29</td>
                <td className="odd">郭永昌</td>
                <td className="odd">1960</td>
                <td className="odd">&nbsp;</td>
                <td className="odd">2100</td>
                <td className="odd">2380</td>
                <td className="odd">6440</td>
              </tr>
              <tr>
                <td className="even">&nbsp;</td>
                <td className="even">&nbsp;</td>
                <td className="even">&nbsp;</td>
                <td className="even">&nbsp;</td>
                <td className="even">&nbsp;</td>
                <td className="even">&nbsp;</td>
                <td className="even">&nbsp;</td>
              </tr>
              <tr>
                <td className="odd">31</td>
                <td className="odd">李應東</td>
                <td className="odd">1365</td>
                <td className="odd">2275</td>
                <td className="odd">1155</td>
                <td className="odd">1050</td>
                <td className="odd">5845</td>
              </tr>
              <tr>
                <td className="even">T32</td>
                <td className="even">馮偉傑</td>
                <td className="even">1540</td>
                <td className="even">&nbsp;</td>
                <td className="even">2345</td>
                <td className="even">1925</td>
                <td className="even">5810</td>
              </tr>
              <tr>
                <td className="odd">T32</td>
                <td className="odd">馬健民</td>
                <td className="odd">2100</td>
                <td className="odd">2100</td>
                <td className="odd">1610</td>
                <td className="odd">&nbsp;</td>
                <td className="odd">5810</td>
              </tr>
              <tr>
                <td className="even">34</td>
                <td className="even">Kevin Hind</td>
                <td className="even">2875</td>
                <td className="even">&nbsp;</td>
                <td className="even">&nbsp;</td>
                <td className="even">2800</td>
                <td className="even">5675</td>
              </tr>
              <tr>
                <td className="odd">35</td>
                <td className="odd">李永基</td>
                <td className="odd">&nbsp;</td>
                <td className="odd">&nbsp;</td>
                <td className="odd">2675</td>
                <td className="odd">2900</td>
                <td className="odd">5575</td>
              </tr>
              <tr>
                <td className="even">36</td>
                <td className="even">林春祥</td>
                <td className="even">2500</td>
                <td className="even">&nbsp;</td>
                <td className="even">&nbsp;</td>
                <td className="even">2475</td>
                <td className="even">4975</td>
              </tr>
              <tr>
                <td className="odd">37</td>
                <td className="odd">Lim Choon Shin</td>
                <td className="odd">&nbsp;</td>
                <td className="odd">&nbsp;</td>
                <td className="odd">2675</td>
                <td className="odd">2205</td>
                <td className="odd">4880</td>
              </tr>
              <tr>
                <td className="even">T38</td>
                <td className="even">黎偉民</td>
                <td className="even">1365</td>
                <td className="even">1540</td>
                <td className="even">1050</td>
                <td className="even">700</td>
                <td className="even">4655</td>
              </tr>
              <tr>
                <td className="odd">T38</td>
                <td className="odd">方鯨霖</td>
                <td className="odd">1680</td>
                <td className="odd">&nbsp;</td>
                <td className="odd">1400</td>
                <td className="odd">1575</td>
                <td className="odd">4655</td>
              </tr>
              <tr>
                <td className="even">40</td>
                <td className="even">唐進寶</td>
                <td className="even">1855</td>
                <td className="even">&nbsp;</td>
                <td className="even">1155</td>
                <td className="even">1575</td>
                <td className="even">4585</td>
              </tr>
              <tr>
                <td className="odd">41</td>
                <td className="odd">Trevor Ball</td>
                <td className="odd">&nbsp;</td>
                <td className="odd">&nbsp;</td>
                <td className="odd">4400</td>
                <td className="odd">&nbsp;</td>
                <td className="odd">4400</td>
              </tr>
              <tr>
                <td className="even">42</td>
                <td className="even">吳坤河</td>
                <td className="even">&nbsp;</td>
                <td className="even">1855</td>
                <td className="even">1715</td>
                <td className="even">&nbsp;</td>
                <td className="even">3570</td>
              </tr>
              <tr>
                <td className="odd">43</td>
                <td className="odd">王海鋒</td>
                <td className="odd">1855</td>
                <td className="odd">&nbsp;</td>
                <td className="odd">&nbsp;</td>
                <td className="odd">1295</td>
                <td className="odd">3150</td>
              </tr>
              <tr>
                <td className="even">44</td>
                <td className="even">Brad Schadewitz</td>
                <td className="even">&nbsp;</td>
                <td className="even">3112.5</td>
                <td className="even">&nbsp;</td>
                <td className="even">&nbsp;</td>
                <td className="even">3112.5</td>
              </tr>
              <tr>
                <td className="odd">45</td>
                <td className="odd">Michael Long</td>
                <td className="odd">1540</td>
                <td className="odd">&nbsp;</td>
                <td className="odd">1470</td>
                <td className="odd">&nbsp;</td>
                <td className="odd">3010</td>
              </tr>
              <tr>
                <td className="even">46</td>
                <td className="even">宋有福</td>
                <td className="even">&nbsp;</td>
                <td className="even">&nbsp;</td>
                <td className="even">&nbsp;</td>
                <td className="even">2800</td>
                <td className="even">2800</td>
              </tr>
              <tr>
                <td className="odd">47</td>
                <td className="odd">宋謦全</td>
                <td className="odd">&nbsp;</td>
                <td className="odd">&nbsp;</td>
                <td className="odd">&nbsp;</td>
                <td className="odd">2205</td>
                <td className="odd">2205</td>
              </tr>
              <tr>
                <td className="even">48</td>
                <td className="even">張桂康</td>
                <td className="even">&nbsp;</td>
                <td className="even">&nbsp;</td>
                <td className="even">&nbsp;</td>
                <td className="even">1925</td>
                <td className="even">1925</td>
              </tr>
              <tr>
                <td className="odd">49</td>
                <td className="odd">黎偉智</td>
                <td className="odd">&nbsp;</td>
                <td className="odd">&nbsp;</td>
                <td className="odd">&nbsp;</td>
                <td className="odd">1575</td>
                <td className="odd">1575</td>
              </tr>
              <tr>
                <td className="even">50</td>
                <td className="even">Alfonso Morales</td>
                <td className="even">&nbsp;</td>
                <td className="even">&nbsp;</td>
                <td className="even">1260</td>
                <td className="even">&nbsp;</td>
                <td className="even">1260</td>
              </tr>
              <tr>
                <td className="odd">51</td>
                <td className="odd">甘家榮</td>
                <td className="odd">&nbsp;</td>
                <td className="odd">&nbsp;</td>
                <td className="odd">&nbsp;</td>
                <td className="odd">945</td>
                <td className="odd">945</td>
              </tr>
              <tr>
                <td className="even">52</td>
                <td className="even">萬雄立</td>
                <td className="even">&nbsp;</td>
                <td className="even">&nbsp;</td>
                <td className="even">&nbsp;</td>
                <td className="even">840</td>
                <td className="even">840</td>
              </tr>
              <tr>
                <td className="odd">53</td>
                <td className="odd">莫旭麟</td>
                <td className="odd">&nbsp;</td>
                <td className="odd">&nbsp;</td>
                <td className="odd">&nbsp;</td>
                <td className="odd">770</td>
                <td className="odd">770</td>
              </tr>
            </tbody>

          </table>}
    </div>
  );
}
export default merit;
