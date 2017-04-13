import React from 'react';

function merit(props) {
  return (
    <div className="" id="merit-page">
      <h3>Open Division </h3>

      {props.lang === 'en'
        ? <table className="table table-striped">
            <tbody>
              <tr>
                <th scope="col">POS</th>
                <th scope="col">PLAYER</th>
                <th scope="col" title="17-18 May, DiscoveryBay Golf Club">LEG 1</th>
                <th scope="col" title="6-9 Sept, 2004 AVIVA HKPGA Championship">LEG 2</th>
                <th scope="col" title="18-19 Oct, Yinli Golf Club">LEG 3</th>
                <th scope="col" title="15-16 Nov, K.S.C. Golf Course">LEG 4</th>
                <th scope="col">TOTAL</th>
              </tr>
              <tr>
                <td className="odd">1</td>
                <td className="odd">&nbsp;Derek Fung</td>
                <td className="odd">20000</td>
                <td className="odd">10000</td>
                <td className="odd">3500</td>
                <td className="odd">20000</td>
                <td className="odd">53500</td>
              </tr>
              <tr>
                <td className="even">2</td>
                <td className="even">&nbsp;Dominique Boulet</td>
                <td className="even">3850</td>
                <td className="even">20000</td>
                <td className="even">20000</td>
                <td className="even">3850</td>
                <td className="even">47700</td>
              </tr>
              <tr>
                <td className="odd">3</td>
                <td className="odd">&nbsp;James Stewart</td>
                <td className="odd">2600</td>
                <td className="odd">10000</td>
                <td className="odd">12000</td>
                <td className="odd">3850</td>
                <td className="odd">28450</td>
              </tr>
              <tr>
                <td className="even">4</td>
                <td className="even">&nbsp;Yau Sui Ming</td>
                <td className="even">10000</td>
                <td className="even">4216</td>
                <td className="even">8000</td>
                <td className="even">2850</td>
                <td className="even">25066</td>
              </tr>
              <tr>
                <td className="odd">5</td>
                <td className="odd">&nbsp;Kavin Kam</td>
                <td className="odd">5000</td>
                <td className="odd">2575</td>
                <td className="odd">3850</td>
                <td className="odd">12000</td>
                <td className="odd">23425</td>
              </tr>
              <tr>
                <td className="even">6</td>
                <td className="even">&nbsp;Tang Shing Chi</td>
                <td className="even">2500</td>
                <td className="even">5500</td>
                <td className="even">4200</td>
                <td className="even">5500</td>
                <td className="even">17700</td>
              </tr>
              <tr>
                <td className="odd">7</td>
                <td className="odd">&nbsp;Wong Woon Man</td>
                <td className="odd">2500</td>
                <td className="odd">5500</td>
                <td className="odd">6000</td>
                <td className="odd">2675</td>
                <td className="odd">16675</td>
              </tr>
              <tr>
                <td className="even">8</td>
                <td className="even">&nbsp;Tang Man Kee</td>
                <td className="even">6000</td>
                <td className="even">2775</td>
                <td className="even">4600</td>
                <td className="even">2750</td>
                <td className="even">16125</td>
              </tr>
              <tr>
                <td className="odd">9</td>
                <td className="odd">&nbsp;Danny Kan</td>
                <td className="odd">1925</td>
                <td className="odd">1925</td>
                <td className="odd">2450</td>
                <td className="odd">8000</td>
                <td className="odd">14300</td>
              </tr>
              <tr>
                <td className="even">10</td>
                <td className="even">&nbsp;Wilson Choy</td>
                <td className="even">4600</td>
                <td className="even">2675</td>
                <td className="even">2310</td>
                <td className="even">4600</td>
                <td className="even">14185</td>
              </tr>
              <tr>
                <td className="odd">11</td>
                <td className="odd">&nbsp;Richard Kan</td>
                <td className="odd">3050</td>
                <td className="odd">2675</td>
                <td className="odd">5000</td>
                <td className="odd">2850</td>
                <td className="odd">13575</td>
              </tr>
              <tr>
                <td className="even">12</td>
                <td className="even">&nbsp;Peter Downie</td>
                <td className="even">10000</td>
                <td className="even">455</td>
                <td className="even">2775</td>
                <td className="even">&nbsp;</td>
                <td className="even">13230</td>
              </tr>
              <tr>
                <td className="odd">13</td>
                <td className="odd">&nbsp;Andrew Good</td>
                <td className="odd">3850</td>
                <td className="odd">2850</td>
                <td className="odd">2170</td>
                <td className="odd">3850</td>
                <td className="odd">12720</td>
              </tr>
              <tr>
                <td className="even">14</td>
                <td className="even">&nbsp;Lee Wing Kei</td>
                <td className="even">3050</td>
                <td className="even">4216</td>
                <td className="even">2310</td>
                <td className="even">1960</td>
                <td className="even">11536</td>
              </tr>
              <tr>
                <td className="odd">15</td>
                <td className="odd">&nbsp;Ma Kam Fat</td>
                <td className="odd">2310</td>
                <td className="odd">2275</td>
                <td className="odd">2575</td>
                <td className="odd">2600</td>
                <td className="odd">9760</td>
              </tr>
              <tr>
                <td className="even">16</td>
                <td className="even">&nbsp;Kan King Yau</td>
                <td className="even">2750</td>
                <td className="even">2575</td>
                <td className="even">1820</td>
                <td className="even">1890</td>
                <td className="even">9035</td>
              </tr>
              <tr>
                <td className="odd">17</td>
                <td className="odd">&nbsp;Tong Chun Po</td>
                <td className="odd">1680</td>
                <td className="odd">2443</td>
                <td className="odd">2775</td>
                <td className="odd">2100</td>
                <td className="odd">8998</td>
              </tr>
              <tr>
                <td className="even">18</td>
                <td className="even">&nbsp;Lee Man Lok</td>
                <td className="even">2065</td>
                <td className="even">1365</td>
                <td className="even">2775</td>
                <td className="even">2675</td>
                <td className="even">8880</td>
              </tr>
              <tr>
                <td className="odd">19</td>
                <td className="odd">&nbsp;Liu Ping Kwong</td>
                <td className="odd">2065</td>
                <td className="odd">1925</td>
                <td className="odd">2900</td>
                <td className="odd">1820</td>
                <td className="odd">8710</td>
              </tr>
              <tr>
                <td className="even">20</td>
                <td className="even">&nbsp;Cheung Kin Ping</td>
                <td className="even">2500</td>
                <td className="even">1575</td>
                <td className="even">1680</td>
                <td className="even">2850</td>
                <td className="even">8605</td>
              </tr>
              <tr>
                <td className="odd">21</td>
                <td className="odd">&nbsp;Sung Yau Fuk</td>
                <td className="odd">2380</td>
                <td className="odd">1050</td>
                <td className="odd">2575</td>
                <td className="odd">2240</td>
                <td className="odd">8245</td>
              </tr>
              <tr>
                <td className="even">22</td>
                <td className="even">&nbsp;Siu Kam Piu</td>
                <td className="even">1925</td>
                <td className="even">2170</td>
                <td className="even">1960</td>
                <td className="even">2100</td>
                <td className="even">8155</td>
              </tr>
              <tr>
                <td className="odd">23</td>
                <td className="odd">&nbsp;Vaughan Mason</td>
                <td className="odd">&nbsp;</td>
                <td className="odd">802</td>
                <td className="odd">1820</td>
                <td className="odd">5500</td>
                <td className="odd">8125</td>
              </tr>
              <tr>
                <td className="even">24</td>
                <td className="even">&nbsp;Lau Kwong Hon</td>
                <td className="even">2825</td>
                <td className="even">1925</td>
                <td className="even">2575</td>
                <td className="even">&nbsp;</td>
                <td className="even">7325</td>
              </tr>
              <tr>
                <td className="odd">25</td>
                <td className="odd">&nbsp;Lee Kam Chuen</td>
                <td className="odd">3850</td>
                <td className="odd">1775</td>
                <td className="odd">&nbsp;</td>
                <td className="odd">&nbsp;</td>
                <td className="odd">6625</td>
              </tr>
              <tr>
                <td className="even">26</td>
                <td className="even">&nbsp;Liu Wai Yin</td>
                <td className="even">1540</td>
                <td className="even">50</td>
                <td className="even">2575</td>
                <td className="even">1750</td>
                <td className="even">5915</td>
              </tr>
              <tr>
                <td className="odd">27</td>
                <td className="odd">&nbsp;Mark Reeves</td>
                <td className="odd">&nbsp;</td>
                <td className="odd">&nbsp;</td>
                <td className="odd">3200</td>
                <td className="odd">2450</td>
                <td className="odd">5650</td>
              </tr>
              <tr>
                <td className="even">28</td>
                <td className="even">&nbsp;Brad Schadewitz</td>
                <td className="even">2825</td>
                <td className="even">315</td>
                <td className="even">2310</td>
                <td className="even">&nbsp;</td>
                <td className="even">5450</td>
              </tr>
              <tr>
                <td className="odd">29</td>
                <td className="odd">&nbsp;Sung Yau Luk</td>
                <td className="odd">2650</td>
                <td className="odd">2443</td>
                <td className="odd">&nbsp;</td>
                <td className="odd">&nbsp;</td>
                <td className="odd">5093</td>
              </tr>
              <tr>
                <td className="even">30</td>
                <td className="even">&nbsp;Kenny Wong</td>
                <td className="even">2205</td>
                <td className="even">140</td>
                <td className="even">&nbsp;</td>
                <td className="even">2550</td>
                <td className="even">4895</td>
              </tr>
              <tr>
                <td className="odd">31</td>
                <td className="odd">&nbsp;Mok Yuk Lun</td>
                <td className="odd">2700</td>
                <td className="odd">50</td>
                <td className="odd">1820</td>
                <td className="odd">&nbsp;</td>
                <td className="odd">4570</td>
              </tr>
              <tr>
                <td className="even">32</td>
                <td className="even">&nbsp;Tommy Kan</td>
                <td className="even">&nbsp;</td>
                <td className="even">315</td>
                <td className="even">2100</td>
                <td className="even">2100</td>
                <td className="even">4515</td>
              </tr>
              <tr>
                <td className="odd">33</td>
                <td className="odd">&nbsp;Lai Wai Che</td>
                <td className="odd">&nbsp;</td>
                <td className="odd">1190</td>
                <td className="odd">2775</td>
                <td className="odd">&nbsp;</td>
                <td className="odd">3965</td>
              </tr>
              <tr>
                <td className="even">34</td>
                <td className="even">&nbsp;Alex Tang</td>
                <td className="even">2205</td>
                <td className="even">1365</td>
                <td className="even">&nbsp;</td>
                <td className="even">&nbsp;</td>
                <td className="even">3570</td>
              </tr>
              <tr>
                <td className="odd">35</td>
                <td className="odd">&nbsp;Michael Long</td>
                <td className="odd">&nbsp;</td>
                <td className="odd">1190</td>
                <td className="odd">&nbsp;</td>
                <td className="odd">2345</td>
                <td className="odd">3535</td>
              </tr>
              <tr>
                <td className="even">36</td>
                <td className="even">&nbsp;Trevor Ball</td>
                <td className="even">&nbsp;</td>
                <td className="even">&nbsp;</td>
                <td className="even">&nbsp;</td>
                <td className="even">3200</td>
                <td className="even">3200</td>
              </tr>
              <tr>
                <td className="odd">37</td>
                <td className="odd">&nbsp;Lai Wai Man</td>
                <td className="odd">1610</td>
                <td className="odd">50</td>
                <td className="odd">1470</td>
                <td className="odd">&nbsp;</td>
                <td className="odd">3130</td>
              </tr>
              <tr>
                <td className="even">38</td>
                <td className="even">&nbsp;Cheung Kwai Hong</td>
                <td className="even">&nbsp;</td>
                <td className="even">140</td>
                <td className="even">&nbsp;</td>
                <td className="even">2500</td>
                <td className="even">2640</td>
              </tr>
              <tr>
                <td className="odd">39</td>
                <td className="odd">&nbsp;Tang Shu Wing</td>
                <td className="odd">&nbsp;</td>
                <td className="odd">560</td>
                <td className="odd">2030</td>
                <td className="odd">&nbsp;</td>
                <td className="odd">2590</td>
              </tr>
              <tr>
                <td className="even">40</td>
                <td className="even">&nbsp;Jason Kwok</td>
                <td className="even">&nbsp;</td>
                <td className="even">&nbsp;</td>
                <td className="even">&nbsp;</td>
                <td className="even">2345</td>
                <td className="even">2345</td>
              </tr>
              <tr>
                <td className="odd">41</td>
                <td className="odd">&nbsp;Lee Parker</td>
                <td className="odd">1820</td>
                <td className="odd">50</td>
                <td className="odd">&nbsp;</td>
                <td className="odd">&nbsp;</td>
                <td className="odd">1870</td>
              </tr>
              <tr>
                <td className="even">42</td>
                <td className="even">&nbsp;Man Hung Lap</td>
                <td className="even">1750</td>
                <td className="even">&nbsp;</td>
                <td className="even">&nbsp;</td>
                <td className="even">&nbsp;</td>
                <td className="even">1750</td>
              </tr>
              <tr>
                <td className="odd">43</td>
                <td className="odd">&nbsp;Geoffrey So</td>
                <td className="odd">&nbsp;</td>
                <td className="odd">50</td>
                <td className="odd">1610</td>
                <td className="odd">&nbsp;</td>
                <td className="odd">1660</td>
              </tr>
              <tr>
                <td className="even">44</td>
                <td className="even">&nbsp;Leung Sing Choi</td>
                <td className="even">&nbsp;</td>
                <td className="even">50</td>
                <td className="even">1540</td>
                <td className="even">&nbsp;</td>
                <td className="even">1590</td>
              </tr>
              <tr>
                <td className="odd">45</td>
                <td className="odd">&nbsp;Lai Wai Sing</td>
                <td className="odd">&nbsp;</td>
                <td className="odd">&nbsp;</td>
                <td className="odd">1400</td>
                <td className="odd">&nbsp;</td>
                <td className="odd">1400</td>
              </tr>
              <tr>
                <td className="even">46</td>
                <td className="even">&nbsp;Leung Hon Man</td>
                <td className="even">&nbsp;</td>
                <td className="even">700</td>
                <td className="even">&nbsp;</td>
                <td className="even">&nbsp;</td>
                <td className="even">700</td>
              </tr>
              <tr>
                <td className="odd">47</td>
                <td className="odd">&nbsp;Cheng Man Ngar</td>
                <td className="odd">&nbsp;</td>
                <td className="odd">50</td>
                <td className="odd">&nbsp;</td>
                <td className="odd">&nbsp;</td>
                <td className="odd">50</td>
              </tr>
              <tr>
                <td className="even">48</td>
                <td className="even">&nbsp;Lai Wai Wa</td>
                <td className="even">&nbsp;</td>
                <td className="even">50</td>
                <td className="even">&nbsp;</td>
                <td className="even">&nbsp;</td>
                <td className="even">50</td>
              </tr>
              <tr>
                <td className="odd">49</td>
                <td className="odd">&nbsp;Leung Wai Kan</td>
                <td className="odd">&nbsp;</td>
                <td className="odd">50</td>
                <td className="odd">&nbsp;</td>
                <td className="odd">&nbsp;</td>
                <td className="odd">50</td>
              </tr>
              <tr>
                <td className="even">50</td>
                <td className="even">&nbsp;Kan For Tai</td>
                <td className="even">&nbsp;</td>
                <td className="even">50</td>
                <td className="even">&nbsp;</td>
                <td className="even">&nbsp;</td>
                <td className="even">50</td>
              </tr>
            </tbody>
          </table>
        : <table className="table table-striped">
            <tbody>
              <tr>
                <th scope="col">排名</th>
                <th scope="col">球手</th>
                <th scope="col" title="2004年5月17-18日, DiscoveryBay Golf Club">第1站</th>
                <th scope="col" title="2004年9月6-9日, 2004 AVIVA HKPGA Championship">第2站</th>
                <th scope="col" title="2004年10月18-19日, Yinli Golf Club">第3站</th>
                <th scope="col" title="2004年11月15-16日, K.S.C. Golf Course">第4站</th>
                <th scope="col">積分</th>
              </tr>
              <tr>
                <td className="odd">1</td>
                <td className="odd">&nbsp;馮裕德</td>
                <td className="odd">20000</td>
                <td className="odd">10000</td>
                <td className="odd">3500</td>
                <td className="odd">20000</td>
                <td className="odd">53500</td>
              </tr>
              <tr>
                <td className="even">2</td>
                <td className="even">&nbsp;Dominique Boulet</td>
                <td className="even">3850</td>
                <td className="even">20000</td>
                <td className="even">20000</td>
                <td className="even">3850</td>
                <td className="even">47700</td>
              </tr>
              <tr>
                <td className="odd">3</td>
                <td className="odd">&nbsp;James Stewart</td>
                <td className="odd">2600</td>
                <td className="odd">10000</td>
                <td className="odd">12000</td>
                <td className="odd">3850</td>
                <td className="odd">28450</td>
              </tr>
              <tr>
                <td className="even">4</td>
                <td className="even">&nbsp;丘水明</td>
                <td className="even">10000</td>
                <td className="even">4216</td>
                <td className="even">8000</td>
                <td className="even">2850</td>
                <td className="even">25066</td>
              </tr>
              <tr>
                <td className="odd">5</td>
                <td className="odd">&nbsp;甘家榮</td>
                <td className="odd">5000</td>
                <td className="odd">2575</td>
                <td className="odd">3850</td>
                <td className="odd">12000</td>
                <td className="odd">23425</td>
              </tr>
              <tr>
                <td className="even">6</td>
                <td className="even">&nbsp;鄧承志</td>
                <td className="even">2500</td>
                <td className="even">5500</td>
                <td className="even">4200</td>
                <td className="even">5500</td>
                <td className="even">17700</td>
              </tr>
              <tr>
                <td className="odd">7</td>
                <td className="odd">&nbsp;黃煥民</td>
                <td className="odd">2500</td>
                <td className="odd">5500</td>
                <td className="odd">6000</td>
                <td className="odd">2675</td>
                <td className="odd">16675</td>
              </tr>
              <tr>
                <td className="even">8</td>
                <td className="even">&nbsp;鄧敏祺</td>
                <td className="even">6000</td>
                <td className="even">2775</td>
                <td className="even">4600</td>
                <td className="even">2750</td>
                <td className="even">16125</td>
              </tr>
              <tr>
                <td className="odd">9</td>
                <td className="odd">&nbsp;簡栢堅</td>
                <td className="odd">1925</td>
                <td className="odd">1925</td>
                <td className="odd">2450</td>
                <td className="odd">8000</td>
                <td className="odd">14300</td>
              </tr>
              <tr>
                <td className="even">10</td>
                <td className="even">&nbsp;蔡維臣</td>
                <td className="even">4600</td>
                <td className="even">2675</td>
                <td className="even">2310</td>
                <td className="even">4600</td>
                <td className="even">14185</td>
              </tr>
              <tr>
                <td className="odd">11</td>
                <td className="odd">&nbsp;簡志強</td>
                <td className="odd">3050</td>
                <td className="odd">2675</td>
                <td className="odd">5000</td>
                <td className="odd">2850</td>
                <td className="odd">13575</td>
              </tr>
              <tr>
                <td className="even">12</td>
                <td className="even">&nbsp;Peter Downie</td>
                <td className="even">10000</td>
                <td className="even">455</td>
                <td className="even">2775</td>
                <td className="even">&nbsp;</td>
                <td className="even">13230</td>
              </tr>
              <tr>
                <td className="odd">13</td>
                <td className="odd">&nbsp;Andrew Good</td>
                <td className="odd">3850</td>
                <td className="odd">2850</td>
                <td className="odd">2170</td>
                <td className="odd">3850</td>
                <td className="odd">12720</td>
              </tr>
              <tr>
                <td className="even">14</td>
                <td className="even">&nbsp;李永基</td>
                <td className="even">3050</td>
                <td className="even">4216</td>
                <td className="even">2310</td>
                <td className="even">1960</td>
                <td className="even">11536</td>
              </tr>
              <tr>
                <td className="odd">15</td>
                <td className="odd">&nbsp;馬金發</td>
                <td className="odd">2310</td>
                <td className="odd">2275</td>
                <td className="odd">2575</td>
                <td className="odd">2600</td>
                <td className="odd">9760</td>
              </tr>
              <tr>
                <td className="even">16</td>
                <td className="even">&nbsp;簡敬有</td>
                <td className="even">2750</td>
                <td className="even">2575</td>
                <td className="even">1820</td>
                <td className="even">1890</td>
                <td className="even">9035</td>
              </tr>
              <tr>
                <td className="odd">17</td>
                <td className="odd">&nbsp;唐進寶</td>
                <td className="odd">1680</td>
                <td className="odd">2443</td>
                <td className="odd">2775</td>
                <td className="odd">2100</td>
                <td className="odd">8998</td>
              </tr>
              <tr>
                <td className="even">18</td>
                <td className="even">&nbsp;李文樂</td>
                <td className="even">2065</td>
                <td className="even">1365</td>
                <td className="even">2775</td>
                <td className="even">2675</td>
                <td className="even">8880</td>
              </tr>
              <tr>
                <td className="odd">19</td>
                <td className="odd">&nbsp;廖炳光</td>
                <td className="odd">2065</td>
                <td className="odd">1925</td>
                <td className="odd">2900</td>
                <td className="odd">1820</td>
                <td className="odd">8710</td>
              </tr>
              <tr>
                <td className="even">20</td>
                <td className="even">&nbsp;張建平</td>
                <td className="even">2500</td>
                <td className="even">1575</td>
                <td className="even">1680</td>
                <td className="even">2850</td>
                <td className="even">8605</td>
              </tr>
              <tr>
                <td className="odd">21</td>
                <td className="odd">&nbsp;宋有福</td>
                <td className="odd">2380</td>
                <td className="odd">1050</td>
                <td className="odd">2575</td>
                <td className="odd">2240</td>
                <td className="odd">8245</td>
              </tr>
              <tr>
                <td className="even">22</td>
                <td className="even">&nbsp;蕭金標</td>
                <td className="even">1925</td>
                <td className="even">2170</td>
                <td className="even">1960</td>
                <td className="even">2100</td>
                <td className="even">8155</td>
              </tr>
              <tr>
                <td className="odd">23</td>
                <td className="odd">&nbsp;Vaughan Mason</td>
                <td className="odd">&nbsp;</td>
                <td className="odd">802</td>
                <td className="odd">1820</td>
                <td className="odd">5500</td>
                <td className="odd">8125</td>
              </tr>
              <tr>
                <td className="even">24</td>
                <td className="even">&nbsp;劉光漢</td>
                <td className="even">2825</td>
                <td className="even">1925</td>
                <td className="even">2575</td>
                <td className="even">&nbsp;</td>
                <td className="even">7325</td>
              </tr>
              <tr>
                <td className="odd">25</td>
                <td className="odd">&nbsp;李錦泉</td>
                <td className="odd">3850</td>
                <td className="odd">1775</td>
                <td className="odd">&nbsp;</td>
                <td className="odd">&nbsp;</td>
                <td className="odd">6625</td>
              </tr>
              <tr>
                <td className="even">26</td>
                <td className="even">&nbsp;廖煒賢</td>
                <td className="even">1540</td>
                <td className="even">50</td>
                <td className="even">2575</td>
                <td className="even">1750</td>
                <td className="even">5915</td>
              </tr>
              <tr>
                <td className="odd">27</td>
                <td className="odd">&nbsp;李偉斯</td>
                <td className="odd">&nbsp;</td>
                <td className="odd">&nbsp;</td>
                <td className="odd">3200</td>
                <td className="odd">2450</td>
                <td className="odd">5650</td>
              </tr>
              <tr>
                <td className="even">28</td>
                <td className="even">&nbsp;謝道偉</td>
                <td className="even">2825</td>
                <td className="even">315</td>
                <td className="even">2310</td>
                <td className="even">&nbsp;</td>
                <td className="even">5450</td>
              </tr>
              <tr>
                <td className="odd">29</td>
                <td className="odd">&nbsp;Sung Yau Luk</td>
                <td className="odd">2650</td>
                <td className="odd">2443</td>
                <td className="odd">&nbsp;</td>
                <td className="odd">&nbsp;</td>
                <td className="odd">5093</td>
              </tr>
              <tr>
                <td className="even">30</td>
                <td className="even">&nbsp;黃海健</td>
                <td className="even">2205</td>
                <td className="even">140</td>
                <td className="even">&nbsp;</td>
                <td className="even">2550</td>
                <td className="even">4895</td>
              </tr>
              <tr>
                <td className="odd">31</td>
                <td className="odd">&nbsp;莫旭麟</td>
                <td className="odd">2700</td>
                <td className="odd">50</td>
                <td className="odd">1820</td>
                <td className="odd">&nbsp;</td>
                <td className="odd">4570</td>
              </tr>
              <tr>
                <td className="even">32</td>
                <td className="even">&nbsp;簡鏡棠</td>
                <td className="even">&nbsp;</td>
                <td className="even">315</td>
                <td className="even">2100</td>
                <td className="even">2100</td>
                <td className="even">4515</td>
              </tr>
              <tr>
                <td className="odd">33</td>
                <td className="odd">&nbsp;黎偉智</td>
                <td className="odd">&nbsp;</td>
                <td className="odd">1190</td>
                <td className="odd">2775</td>
                <td className="odd">&nbsp;</td>
                <td className="odd">3965</td>
              </tr>
              <tr>
                <td className="even">34</td>
                <td className="even">&nbsp;鄧澄濱</td>
                <td className="even">2205</td>
                <td className="even">1365</td>
                <td className="even">&nbsp;</td>
                <td className="even">&nbsp;</td>
                <td className="even">3570</td>
              </tr>
              <tr>
                <td className="odd">35</td>
                <td className="odd">&nbsp;Michael Long</td>
                <td className="odd">&nbsp;</td>
                <td className="odd">1190</td>
                <td className="odd">&nbsp;</td>
                <td className="odd">2345</td>
                <td className="odd">3535</td>
              </tr>
              <tr>
                <td className="even">36</td>
                <td className="even">&nbsp;Trevor Ball</td>
                <td className="even">&nbsp;</td>
                <td className="even">&nbsp;</td>
                <td className="even">&nbsp;</td>
                <td className="even">3200</td>
                <td className="even">3200</td>
              </tr>
              <tr>
                <td className="odd">37</td>
                <td className="odd">&nbsp;黎偉民</td>
                <td className="odd">1610</td>
                <td className="odd">50</td>
                <td className="odd">1470</td>
                <td className="odd">&nbsp;</td>
                <td className="odd">3130</td>
              </tr>
              <tr>
                <td className="even">38</td>
                <td className="even">&nbsp;張桂康</td>
                <td className="even">&nbsp;</td>
                <td className="even">140</td>
                <td className="even">&nbsp;</td>
                <td className="even">2500</td>
                <td className="even">2640</td>
              </tr>
              <tr>
                <td className="odd">39</td>
                <td className="odd">&nbsp;鄧樹榮</td>
                <td className="odd">&nbsp;</td>
                <td className="odd">560</td>
                <td className="odd">2030</td>
                <td className="odd">&nbsp;</td>
                <td className="odd">2590</td>
              </tr>
              <tr>
                <td className="even">40</td>
                <td className="even">&nbsp;郭永昌</td>
                <td className="even">&nbsp;</td>
                <td className="even">&nbsp;</td>
                <td className="even">&nbsp;</td>
                <td className="even">2345</td>
                <td className="even">2345</td>
              </tr>
              <tr>
                <td className="odd">41</td>
                <td className="odd">&nbsp;李柏嘉</td>
                <td className="odd">1820</td>
                <td className="odd">50</td>
                <td className="odd">&nbsp;</td>
                <td className="odd">&nbsp;</td>
                <td className="odd">1870</td>
              </tr>
              <tr>
                <td className="even">42</td>
                <td className="even">&nbsp;萬雄立</td>
                <td className="even">1750</td>
                <td className="even">&nbsp;</td>
                <td className="even">&nbsp;</td>
                <td className="even">&nbsp;</td>
                <td className="even">1750</td>
              </tr>
              <tr>
                <td className="odd">43</td>
                <td className="odd">&nbsp;蘇勁濤</td>
                <td className="odd">&nbsp;</td>
                <td className="odd">50</td>
                <td className="odd">1610</td>
                <td className="odd">&nbsp;</td>
                <td className="odd">1660</td>
              </tr>
              <tr>
                <td className="even">44</td>
                <td className="even">&nbsp;梁勝財</td>
                <td className="even">&nbsp;</td>
                <td className="even">50</td>
                <td className="even">1540</td>
                <td className="even">&nbsp;</td>
                <td className="even">1590</td>
              </tr>
              <tr>
                <td className="odd">45</td>
                <td className="odd">&nbsp;Lai Wai Sing</td>
                <td className="odd">&nbsp;</td>
                <td className="odd">&nbsp;</td>
                <td className="odd">1400</td>
                <td className="odd">&nbsp;</td>
                <td className="odd">1400</td>
              </tr>
              <tr>
                <td className="even">46</td>
                <td className="even">&nbsp;梁漢文</td>
                <td className="even">&nbsp;</td>
                <td className="even">700</td>
                <td className="even">&nbsp;</td>
                <td className="even">&nbsp;</td>
                <td className="even">700</td>
              </tr>
              <tr>
                <td className="odd">47</td>
                <td className="odd">&nbsp;鄭文雅</td>
                <td className="odd">&nbsp;</td>
                <td className="odd">50</td>
                <td className="odd">&nbsp;</td>
                <td className="odd">&nbsp;</td>
                <td className="odd">50</td>
              </tr>
              <tr>
                <td className="even">48</td>
                <td className="even">&nbsp;黎偉華</td>
                <td className="even">&nbsp;</td>
                <td className="even">50</td>
                <td className="even">&nbsp;</td>
                <td className="even">&nbsp;</td>
                <td className="even">50</td>
              </tr>
              <tr>
                <td className="odd">49</td>
                <td className="odd">&nbsp;梁維根</td>
                <td className="odd">&nbsp;</td>
                <td className="odd">50</td>
                <td className="odd">&nbsp;</td>
                <td className="odd">&nbsp;</td>
                <td className="odd">50</td>
              </tr>
              <tr>
                <td className="even">50</td>
                <td className="even">&nbsp;簡伙泰</td>
                <td className="even">&nbsp;</td>
                <td className="even">50</td>
                <td className="even">&nbsp;</td>
                <td className="even">&nbsp;</td>
                <td className="even">50</td>
              </tr>
            </tbody>
          </table>}
    </div>
  );
}
export default merit;
