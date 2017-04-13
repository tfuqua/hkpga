import React from 'react';

function merit(props) {
  return (
    <div className="">
      <h3>Open Division </h3>

      {props.lang === 'en'
        ? <table className="table table-striped">
            <tbody>
              <tr>
                <th scope="col">POS</th>
                <th scope="col">PLAYER</th>
                <th scope="col" title="4-5 Jul, HK Golf Club">LEG 1</th>
                <th scope="col" title="7-8 Nov, HKPGA Classic">LEG 2</th>
                <th scope="col" title="21-22 Nov, Discovery bay Open">LEG 3</th>
                <th scope="col" title="12-13 Dec, ClearwaterBay Open">LEG 4</th>
                <th scope="col">TOTAL</th>
              </tr>
              <tr>
                <td className="odd">1</td>
                <td className="odd">&nbsp;James Stewart</td>
                <td className="odd">20000</td>
                <td className="odd">5500</td>
                <td className="odd">20000</td>
                <td className="odd">5000</td>
                <td className="odd">50500</td>
              </tr>
              <tr>
                <td className="even">2</td>
                <td className="even">&nbsp;David Freeman</td>
                <td className="even">4800</td>
                <td className="even">20000</td>
                <td className="even">12000</td>
                <td className="even">12000</td>
                <td className="even">48800</td>
              </tr>
              <tr>
                <td className="odd">3</td>
                <td className="odd">&nbsp;Yau Sui Ming</td>
                <td className="odd">12000</td>
                <td className="odd">5500</td>
                <td className="odd">5500</td>
                <td className="odd">4217</td>
                <td className="odd">27217</td>
              </tr>
              <tr>
                <td className="even">4</td>
                <td className="even">&nbsp;Vaughan Mason</td>
                <td className="even">1155</td>
                <td className="even">2275</td>
                <td className="even">&nbsp;</td>
                <td className="even">20000</td>
                <td className="even">23430</td>
              </tr>
              <tr>
                <td className="odd">5</td>
                <td className="odd">&nbsp;Tang Shing Chi</td>
                <td className="odd">7000</td>
                <td className="odd">3500</td>
                <td className="odd">8000</td>
                <td className="odd">2030</td>
                <td className="odd">20530</td>
              </tr>
              <tr>
                <td className="even">6</td>
                <td className="even">&nbsp;Wilson Choy</td>
                <td className="even">7000</td>
                <td className="even">2700</td>
                <td className="even">2550</td>
                <td className="even">8000</td>
                <td className="even">20250</td>
              </tr>
              <tr>
                <td className="odd">7</td>
                <td className="odd">&nbsp;Jovick Lee&nbsp;</td>
                <td className="odd">2750</td>
                <td className="odd">8000</td>
                <td className="odd">3517</td>
                <td className="odd">3113</td>
                <td className="odd">17380</td>
              </tr>
              <tr>
                <td className="even">8</td>
                <td className="even">&nbsp;Wong Woon Man</td>
                <td className="even">4025</td>
                <td className="even">4025</td>
                <td className="even">3517</td>
                <td className="even">4217</td>
                <td className="even">15784</td>
              </tr>
              <tr>
                <td className="odd">9</td>
                <td className="odd">&nbsp;Grant Gibson</td>
                <td className="odd">&nbsp;</td>
                <td className="odd">12000</td>
                <td className="odd">&nbsp;</td>
                <td className="odd">2380</td>
                <td className="odd">14380</td>
              </tr>
              <tr>
                <td className="even">10</td>
                <td className="even">&nbsp;Tang Man Kee</td>
                <td className="even">3113</td>
                <td className="even">2775</td>
                <td className="even">5500</td>
                <td className="even">2725</td>
                <td className="even">14113</td>
              </tr>
              <tr>
                <td className="odd">11</td>
                <td className="odd">&nbsp;Lee Man Lok&nbsp;</td>
                <td className="odd">2600</td>
                <td className="odd">2775</td>
                <td className="odd">4200</td>
                <td className="odd">3113</td>
                <td className="odd">12688</td>
              </tr>
              <tr>
                <td className="even">12</td>
                <td className="even">&nbsp;Ducky Tang&nbsp;</td>
                <td className="even">2030</td>
                <td className="even">2900</td>
                <td className="even">4600</td>
                <td className="even">2525</td>
                <td className="even">12055</td>
              </tr>
              <tr>
                <td className="odd">13</td>
                <td className="odd">&nbsp;Danny Kan&nbsp;</td>
                <td className="odd">2475</td>
                <td className="odd">2525</td>
                <td className="odd">2800</td>
                <td className="odd">3113</td>
                <td className="odd">10913</td>
              </tr>
              <tr>
                <td className="even">14</td>
                <td className="even">&nbsp;Ma Kam Fat&nbsp;</td>
                <td className="even">2275</td>
                <td className="even">2525</td>
                <td className="even">2700</td>
                <td className="even">3113</td>
                <td className="even">10613</td>
              </tr>
              <tr>
                <td className="odd">15</td>
                <td className="odd">&nbsp;Tang Shu Wing&nbsp;</td>
                <td className="odd">4800</td>
                <td className="odd">1260</td>
                <td className="odd">&nbsp;</td>
                <td className="odd">4217</td>
                <td className="odd">10277</td>
              </tr>
              <tr>
                <td className="even">16</td>
                <td className="even">&nbsp;Andrew Good&nbsp;</td>
                <td className="even">&nbsp;</td>
                <td className="even">3200</td>
                <td className="even">3517</td>
                <td className="even">2650</td>
                <td className="even">9367</td>
              </tr>
              <tr>
                <td className="odd">17</td>
                <td className="odd">&nbsp;Fung Wai Kuen</td>
                <td className="odd">2700</td>
                <td className="odd">2030</td>
                <td className="odd">2700</td>
                <td className="odd">1855</td>
                <td className="odd">9285</td>
              </tr>
              <tr>
                <td className="even">18</td>
                <td className="even">&nbsp;Kan King Yau&nbsp;</td>
                <td className="even">2030</td>
                <td className="even">1925</td>
                <td className="even">2700</td>
                <td className="even">2525</td>
                <td className="even">9180</td>
              </tr>
              <tr>
                <td className="odd">19</td>
                <td className="odd">&nbsp;Kenny Wong&nbsp;</td>
                <td className="odd">1680</td>
                <td className="odd">2275</td>
                <td className="odd">2850</td>
                <td className="odd">2205</td>
                <td className="odd">9010</td>
              </tr>
              <tr>
                <td className="even">20</td>
                <td className="even">&nbsp;Richard Kan&nbsp;</td>
                <td className="even">3113</td>
                <td className="even">2850</td>
                <td className="even">&nbsp;</td>
                <td className="even">2800</td>
                <td className="even">8763</td>
              </tr>
              <tr>
                <td className="odd">21</td>
                <td className="odd">&nbsp;Peter Downie</td>
                <td className="odd">&nbsp;</td>
                <td className="odd">2650</td>
                <td className="odd">&nbsp;</td>
                <td className="odd">6000</td>
                <td className="odd">8650</td>
              </tr>
              <tr>
                <td className="even">22</td>
                <td className="even">&nbsp;Liu Ping Kwong&nbsp;</td>
                <td className="even">1855</td>
                <td className="even">1785</td>
                <td className="even">2380</td>
                <td className="even">2100</td>
                <td className="even">8120</td>
              </tr>
              <tr>
                <td className="odd">23</td>
                <td className="odd">&nbsp;Alexander Cheng&nbsp;</td>
                <td className="odd">1330</td>
                <td className="odd">1680</td>
                <td className="odd">2310</td>
                <td className="odd">2600</td>
                <td className="odd">7920</td>
              </tr>
              <tr>
                <td className="even">24</td>
                <td className="even">&nbsp;Dominique Boulet&nbsp;</td>
                <td className="even">3113</td>
                <td className="even">4600</td>
                <td className="even">&nbsp;</td>
                <td className="even">&nbsp;</td>
                <td className="even">7713</td>
              </tr>
              <tr>
                <td className="odd">25</td>
                <td className="odd">&nbsp;Cheng Ka Yiu</td>
                <td className="odd">1330</td>
                <td className="odd">2275</td>
                <td className="odd">2450</td>
                <td className="odd">1610</td>
                <td className="odd">7665</td>
              </tr>
              <tr>
                <td className="even">26</td>
                <td className="even">&nbsp;Sung Yau Luk&nbsp;</td>
                <td className="even">2275</td>
                <td className="even">2600</td>
                <td className="even">&nbsp;</td>
                <td className="even">2725</td>
                <td className="even">7600</td>
              </tr>
              <tr>
                <td className="odd">27</td>
                <td className="odd">&nbsp;Man Hung Lap&nbsp;</td>
                <td className="odd">1330</td>
                <td className="odd">1085</td>
                <td className="odd">2550</td>
                <td className="odd">2380</td>
                <td className="odd">7345</td>
              </tr>
              <tr>
                <td className="even">28</td>
                <td className="even">&nbsp;Cheung Kin Ping&nbsp;</td>
                <td className="even">2475</td>
                <td className="even">2275</td>
                <td className="even">2550</td>
                <td className="even">&nbsp;</td>
                <td className="even">7300</td>
              </tr>
              <tr>
                <td className="odd">29</td>
                <td className="odd">&nbsp;Kavin Kam&nbsp;</td>
                <td className="odd">2600</td>
                <td className="odd">2275</td>
                <td className="odd">&nbsp;</td>
                <td className="odd">2380</td>
                <td className="odd">7255</td>
              </tr>
              <tr>
                <td className="even">30</td>
                <td className="even">&nbsp;Sung Yau Fuk&nbsp;</td>
                <td className="even">2275</td>
                <td className="even">2275</td>
                <td className="even">&nbsp;</td>
                <td className="even">2205</td>
                <td className="even">6755</td>
              </tr>
              <tr>
                <td className="odd">31</td>
                <td className="odd">&nbsp;Siu Kam Piu&nbsp;</td>
                <td className="odd">910</td>
                <td className="odd">1085</td>
                <td className="odd">2205</td>
                <td className="odd">1610</td>
                <td className="odd">5810</td>
              </tr>
              <tr>
                <td className="even">32</td>
                <td className="even">&nbsp;Jason Kwok&nbsp;</td>
                <td className="even">2800</td>
                <td className="even">&nbsp;</td>
                <td className="even">2900</td>
                <td className="even">&nbsp;</td>
                <td className="even">5700</td>
              </tr>
              <tr>
                <td className="odd">T33</td>
                <td className="odd">&nbsp;Tong Chun Po</td>
                <td className="odd">1575</td>
                <td className="odd">1925</td>
                <td className="odd">&nbsp;</td>
                <td className="odd">1330</td>
                <td className="odd">4830</td>
              </tr>
              <tr>
                <td className="even">T33</td>
                <td className="even">&nbsp;Mark Reeves&nbsp;</td>
                <td className="even">&nbsp;</td>
                <td className="even">875</td>
                <td className="even">2100</td>
                <td className="even">1800</td>
                <td className="even">4830</td>
              </tr>
              <tr>
                <td className="odd">35</td>
                <td className="odd">&nbsp;Lau Kwong Hon&nbsp;</td>
                <td className="odd">3113</td>
                <td className="odd">1400</td>
                <td className="odd">&nbsp;</td>
                <td className="odd">&nbsp;</td>
                <td className="odd">4513</td>
              </tr>
              <tr>
                <td className="even">36</td>
                <td className="even">&nbsp;Yip On Wah&nbsp;</td>
                <td className="even">630</td>
                <td className="even">1505</td>
                <td className="even">2030</td>
                <td className="even">&nbsp;</td>
                <td className="even">4165</td>
              </tr>
              <tr>
                <td className="odd">37</td>
                <td className="odd">&nbsp;Leung Fung Sang</td>
                <td className="odd">2275</td>
                <td className="odd">1785</td>
                <td className="odd">&nbsp;</td>
                <td className="odd">&nbsp;</td>
                <td className="odd">4060</td>
              </tr>
              <tr>
                <td className="even">T38</td>
                <td className="even">&nbsp;Brad Schadewitz&nbsp;</td>
                <td className="even">4025</td>
                <td className="even">&nbsp;</td>
                <td className="even">&nbsp;</td>
                <td className="even">&nbsp;</td>
                <td className="even">4025</td>
              </tr>
              <tr>
                <td className="odd">T38</td>
                <td className="odd">&nbsp;Derek Fung</td>
                <td className="odd">&nbsp;</td>
                <td className="odd">4025</td>
                <td className="odd">&nbsp;</td>
                <td className="odd">&nbsp;</td>
                <td className="odd">4025</td>
              </tr>
              <tr>
                <td className="even">40</td>
                <td className="even">&nbsp;Raymond Roessel&nbsp;</td>
                <td className="even">&nbsp;</td>
                <td className="even">&nbsp;</td>
                <td className="even">2205</td>
                <td className="even">1435</td>
                <td className="even">3640</td>
              </tr>
              <tr>
                <td className="odd">41</td>
                <td className="odd">&nbsp;Wong Hoi Fung&nbsp;</td>
                <td className="odd">&nbsp;</td>
                <td className="odd">1505</td>
                <td className="odd">&nbsp;</td>
                <td className="odd">1960</td>
                <td className="odd">3465</td>
              </tr>
              <tr>
                <td className="even">42</td>
                <td className="even">&nbsp;Cheung Kwai Hong&nbsp;</td>
                <td className="even">1470</td>
                <td className="even">&nbsp;</td>
                <td className="even">&nbsp;</td>
                <td className="even">1750</td>
                <td className="even">3220</td>
              </tr>
              <tr>
                <td className="odd">43</td>
                <td className="odd">&nbsp;Lai Wai Che&nbsp;</td>
                <td className="odd">1575</td>
                <td className="odd">1610</td>
                <td className="odd">&nbsp;</td>
                <td className="odd">&nbsp;</td>
                <td className="odd">3185</td>
              </tr>
              <tr>
                <td className="even">44</td>
                <td className="even">&nbsp;Geoffrey So&nbsp;</td>
                <td className="even">1750</td>
                <td className="even">1260</td>
                <td className="even">&nbsp;</td>
                <td className="even">&nbsp;</td>
                <td className="even">3010</td>
              </tr>
              <tr>
                <td className="odd">45</td>
                <td className="odd">&nbsp;Leung Wai Kan&nbsp;</td>
                <td className="odd">&nbsp;</td>
                <td className="odd">1260</td>
                <td className="odd">&nbsp;</td>
                <td className="odd">1610</td>
                <td className="odd">2870</td>
              </tr>
              <tr>
                <td className="even">46</td>
                <td className="even">&nbsp;Lai Wai Man&nbsp;</td>
                <td className="even">840</td>
                <td className="even">560</td>
                <td className="even">&nbsp;</td>
                <td className="even">1435</td>
                <td className="even">2835</td>
              </tr>
            </tbody>
          </table>
        : <table className="table table-striped" ng-hide="currentLanguage() == 'en'">
            <tbody>
              <tr>
                <th scope="col">排名</th>
                <th scope="col">球手</th>
                <th scope="col" title="2005年7月4-5日, 香港高爾夫球會">第1站</th>
                <th scope="col" title="2005年11月7-8日, HKPGA經典賽">第2站</th>
                <th scope="col" title="2005年11月21-22日, Discovery bay Open">第3站</th>
                <th scope="col" title="2005年12月12-13日, ClearwaterBay Open">第4站</th>
                <th scope="col">積分</th>
              </tr>
              <tr>
                <td className="odd">1</td>
                <td className="odd">&nbsp;James Stewart</td>
                <td className="odd">20000</td>
                <td className="odd">5500</td>
                <td className="odd">20000</td>
                <td className="odd">5000</td>
                <td className="odd">50500</td>
              </tr>
              <tr>
                <td className="even">2</td>
                <td className="even">&nbsp;David Freeman</td>
                <td className="even">4800</td>
                <td className="even">20000</td>
                <td className="even">12000</td>
                <td className="even">12000</td>
                <td className="even">48800</td>
              </tr>
              <tr>
                <td className="odd">3</td>
                <td className="odd">&nbsp;丘水明</td>
                <td className="odd">12000</td>
                <td className="odd">5500</td>
                <td className="odd">5500</td>
                <td className="odd">4217</td>
                <td className="odd">27217</td>
              </tr>
              <tr>
                <td className="even">4</td>
                <td className="even">&nbsp;Vaughan Mason</td>
                <td className="even">1155</td>
                <td className="even">2275</td>
                <td className="even">&nbsp;</td>
                <td className="even">20000</td>
                <td className="even">23430</td>
              </tr>
              <tr>
                <td className="odd">5</td>
                <td className="odd">&nbsp;鄧承志</td>
                <td className="odd">7000</td>
                <td className="odd">3500</td>
                <td className="odd">8000</td>
                <td className="odd">2030</td>
                <td className="odd">20530</td>
              </tr>
              <tr>
                <td className="even">6</td>
                <td className="even">&nbsp;蔡維臣</td>
                <td className="even">7000</td>
                <td className="even">2700</td>
                <td className="even">2550</td>
                <td className="even">8000</td>
                <td className="even">20250</td>
              </tr>
              <tr>
                <td className="odd">7</td>
                <td className="odd">&nbsp;李永基&nbsp;</td>
                <td className="odd">2750</td>
                <td className="odd">8000</td>
                <td className="odd">3517</td>
                <td className="odd">3113</td>
                <td className="odd">17380</td>
              </tr>
              <tr>
                <td className="even">8</td>
                <td className="even">&nbsp;黃煥民</td>
                <td className="even">4025</td>
                <td className="even">4025</td>
                <td className="even">3517</td>
                <td className="even">4217</td>
                <td className="even">15784</td>
              </tr>
              <tr>
                <td className="odd">9</td>
                <td className="odd">&nbsp;Grant Gibson</td>
                <td className="odd">&nbsp;</td>
                <td className="odd">12000</td>
                <td className="odd">&nbsp;</td>
                <td className="odd">2380</td>
                <td className="odd">14380</td>
              </tr>
              <tr>
                <td className="even">10</td>
                <td className="even">&nbsp;鄧敏祺</td>
                <td className="even">3113</td>
                <td className="even">2775</td>
                <td className="even">5500</td>
                <td className="even">2725</td>
                <td className="even">14113</td>
              </tr>
              <tr>
                <td className="odd">11</td>
                <td className="odd">&nbsp;李文樂&nbsp;</td>
                <td className="odd">2600</td>
                <td className="odd">2775</td>
                <td className="odd">4200</td>
                <td className="odd">3113</td>
                <td className="odd">12688</td>
              </tr>
              <tr>
                <td className="even">12</td>
                <td className="even">&nbsp;鄧偉俊&nbsp;</td>
                <td className="even">2030</td>
                <td className="even">2900</td>
                <td className="even">4600</td>
                <td className="even">2525</td>
                <td className="even">12055</td>
              </tr>
              <tr>
                <td className="odd">13</td>
                <td className="odd">&nbsp;簡栢堅&nbsp;</td>
                <td className="odd">2475</td>
                <td className="odd">2525</td>
                <td className="odd">2800</td>
                <td className="odd">3113</td>
                <td className="odd">10913</td>
              </tr>
              <tr>
                <td className="even">14</td>
                <td className="even">&nbsp;馬金發&nbsp;</td>
                <td className="even">2275</td>
                <td className="even">2525</td>
                <td className="even">2700</td>
                <td className="even">3113</td>
                <td className="even">10613</td>
              </tr>
              <tr>
                <td className="odd">15</td>
                <td className="odd">&nbsp;鄧樹榮&nbsp;</td>
                <td className="odd">4800</td>
                <td className="odd">1260</td>
                <td className="odd">&nbsp;</td>
                <td className="odd">4217</td>
                <td className="odd">10277</td>
              </tr>
              <tr>
                <td className="even">16</td>
                <td className="even">&nbsp;Andrew Good&nbsp;</td>
                <td className="even">&nbsp;</td>
                <td className="even">3200</td>
                <td className="even">3517</td>
                <td className="even">2650</td>
                <td className="even">9367</td>
              </tr>
              <tr>
                <td className="odd">17</td>
                <td className="odd">&nbsp;馮偉權</td>
                <td className="odd">2700</td>
                <td className="odd">2030</td>
                <td className="odd">2700</td>
                <td className="odd">1855</td>
                <td className="odd">9285</td>
              </tr>
              <tr>
                <td className="even">18</td>
                <td className="even">&nbsp;簡敬有&nbsp;</td>
                <td className="even">2030</td>
                <td className="even">1925</td>
                <td className="even">2700</td>
                <td className="even">2525</td>
                <td className="even">9180</td>
              </tr>
              <tr>
                <td className="odd">19</td>
                <td className="odd">&nbsp;黃海健&nbsp;</td>
                <td className="odd">1680</td>
                <td className="odd">2275</td>
                <td className="odd">2850</td>
                <td className="odd">2205</td>
                <td className="odd">9010</td>
              </tr>
              <tr>
                <td className="even">20</td>
                <td className="even">&nbsp;簡志強&nbsp;</td>
                <td className="even">3113</td>
                <td className="even">2850</td>
                <td className="even">&nbsp;</td>
                <td className="even">2800</td>
                <td className="even">8763</td>
              </tr>
              <tr>
                <td className="odd">21</td>
                <td className="odd">&nbsp;Peter Downie</td>
                <td className="odd">&nbsp;</td>
                <td className="odd">2650</td>
                <td className="odd">&nbsp;</td>
                <td className="odd">6000</td>
                <td className="odd">8650</td>
              </tr>
              <tr>
                <td className="even">22</td>
                <td className="even">&nbsp;廖炳光&nbsp;</td>
                <td className="even">1855</td>
                <td className="even">1785</td>
                <td className="even">2380</td>
                <td className="even">2100</td>
                <td className="even">8120</td>
              </tr>
              <tr>
                <td className="odd">23</td>
                <td className="odd">&nbsp;鄭德謙&nbsp;</td>
                <td className="odd">1330</td>
                <td className="odd">1680</td>
                <td className="odd">2310</td>
                <td className="odd">2600</td>
                <td className="odd">7920</td>
              </tr>
              <tr>
                <td className="even">24</td>
                <td className="even">&nbsp;Dominique Boulet&nbsp;</td>
                <td className="even">3113</td>
                <td className="even">4600</td>
                <td className="even">&nbsp;</td>
                <td className="even">&nbsp;</td>
                <td className="even">7713</td>
              </tr>
              <tr>
                <td className="odd">25</td>
                <td className="odd">&nbsp;鄭家耀</td>
                <td className="odd">1330</td>
                <td className="odd">2275</td>
                <td className="odd">2450</td>
                <td className="odd">1610</td>
                <td className="odd">7665</td>
              </tr>
              <tr>
                <td className="even">26</td>
                <td className="even">&nbsp;Sung Yau Luk&nbsp;</td>
                <td className="even">2275</td>
                <td className="even">2600</td>
                <td className="even">&nbsp;</td>
                <td className="even">2725</td>
                <td className="even">7600</td>
              </tr>
              <tr>
                <td className="odd">27</td>
                <td className="odd">&nbsp;萬雄立&nbsp;</td>
                <td className="odd">1330</td>
                <td className="odd">1085</td>
                <td className="odd">2550</td>
                <td className="odd">2380</td>
                <td className="odd">7345</td>
              </tr>
              <tr>
                <td className="even">28</td>
                <td className="even">&nbsp;張建平&nbsp;</td>
                <td className="even">2475</td>
                <td className="even">2275</td>
                <td className="even">2550</td>
                <td className="even">&nbsp;</td>
                <td className="even">7300</td>
              </tr>
              <tr>
                <td className="odd">29</td>
                <td className="odd">&nbsp;甘家榮&nbsp;</td>
                <td className="odd">2600</td>
                <td className="odd">2275</td>
                <td className="odd">&nbsp;</td>
                <td className="odd">2380</td>
                <td className="odd">7255</td>
              </tr>
              <tr>
                <td className="even">30</td>
                <td className="even">&nbsp;宋有福&nbsp;</td>
                <td className="even">2275</td>
                <td className="even">2275</td>
                <td className="even">&nbsp;</td>
                <td className="even">2205</td>
                <td className="even">6755</td>
              </tr>
              <tr>
                <td className="odd">31</td>
                <td className="odd">&nbsp;蕭金標&nbsp;</td>
                <td className="odd">910</td>
                <td className="odd">1085</td>
                <td className="odd">2205</td>
                <td className="odd">1610</td>
                <td className="odd">5810</td>
              </tr>
              <tr>
                <td className="even">32</td>
                <td className="even">&nbsp;郭永昌&nbsp;</td>
                <td className="even">2800</td>
                <td className="even">&nbsp;</td>
                <td className="even">2900</td>
                <td className="even">&nbsp;</td>
                <td className="even">5700</td>
              </tr>
              <tr>
                <td className="odd">T33</td>
                <td className="odd">&nbsp;唐進寶</td>
                <td className="odd">1575</td>
                <td className="odd">1925</td>
                <td className="odd">&nbsp;</td>
                <td className="odd">1330</td>
                <td className="odd">4830</td>
              </tr>
              <tr>
                <td className="even">T33</td>
                <td className="even">&nbsp;李偉斯&nbsp;</td>
                <td className="even">&nbsp;</td>
                <td className="even">875</td>
                <td className="even">2100</td>
                <td className="even">1800</td>
                <td className="even">4830</td>
              </tr>
              <tr>
                <td className="odd">35</td>
                <td className="odd">&nbsp;劉光漢&nbsp;</td>
                <td className="odd">3113</td>
                <td className="odd">1400</td>
                <td className="odd">&nbsp;</td>
                <td className="odd">&nbsp;</td>
                <td className="odd">4513</td>
              </tr>
              <tr>
                <td className="even">36</td>
                <td className="even">&nbsp;葉安華&nbsp;</td>
                <td className="even">630</td>
                <td className="even">1505</td>
                <td className="even">2030</td>
                <td className="even">&nbsp;</td>
                <td className="even">4165</td>
              </tr>
              <tr>
                <td className="odd">37</td>
                <td className="odd">&nbsp;梁逢生</td>
                <td className="odd">2275</td>
                <td className="odd">1785</td>
                <td className="odd">&nbsp;</td>
                <td className="odd">&nbsp;</td>
                <td className="odd">4060</td>
              </tr>
              <tr>
                <td className="even">T38</td>
                <td className="even">&nbsp;謝道偉&nbsp;</td>
                <td className="even">4025</td>
                <td className="even">&nbsp;</td>
                <td className="even">&nbsp;</td>
                <td className="even">&nbsp;</td>
                <td className="even">4025</td>
              </tr>
              <tr>
                <td className="odd">T38</td>
                <td className="odd">&nbsp;馮裕德</td>
                <td className="odd">&nbsp;</td>
                <td className="odd">4025</td>
                <td className="odd">&nbsp;</td>
                <td className="odd">&nbsp;</td>
                <td className="odd">4025</td>
              </tr>
              <tr>
                <td className="even">40</td>
                <td className="even">&nbsp;Raymond Roessel&nbsp;</td>
                <td className="even">&nbsp;</td>
                <td className="even">&nbsp;</td>
                <td className="even">2205</td>
                <td className="even">1435</td>
                <td className="even">3640</td>
              </tr>
              <tr>
                <td className="odd">41</td>
                <td className="odd">&nbsp;王海鋒&nbsp;</td>
                <td className="odd">&nbsp;</td>
                <td className="odd">1505</td>
                <td className="odd">&nbsp;</td>
                <td className="odd">1960</td>
                <td className="odd">3465</td>
              </tr>
              <tr>
                <td className="even">42</td>
                <td className="even">&nbsp;張桂康&nbsp;</td>
                <td className="even">1470</td>
                <td className="even">&nbsp;</td>
                <td className="even">&nbsp;</td>
                <td className="even">1750</td>
                <td className="even">3220</td>
              </tr>
              <tr>
                <td className="odd">43</td>
                <td className="odd">&nbsp;黎偉智&nbsp;</td>
                <td className="odd">1575</td>
                <td className="odd">1610</td>
                <td className="odd">&nbsp;</td>
                <td className="odd">&nbsp;</td>
                <td className="odd">3185</td>
              </tr>
              <tr>
                <td className="even">44</td>
                <td className="even">&nbsp;蘇勁濤&nbsp;</td>
                <td className="even">1750</td>
                <td className="even">1260</td>
                <td className="even">&nbsp;</td>
                <td className="even">&nbsp;</td>
                <td className="even">3010</td>
              </tr>
              <tr>
                <td className="odd">45</td>
                <td className="odd">&nbsp;梁維根&nbsp;</td>
                <td className="odd">&nbsp;</td>
                <td className="odd">1260</td>
                <td className="odd">&nbsp;</td>
                <td className="odd">1610</td>
                <td className="odd">2870</td>
              </tr>
              <tr>
                <td className="even">46</td>
                <td className="even">&nbsp;黎偉民&nbsp;</td>
                <td className="even">840</td>
                <td className="even">560</td>
                <td className="even">&nbsp;</td>
                <td className="even">1435</td>
                <td className="even">2835</td>
              </tr>
            </tbody>
          </table>}
    </div>
  );
}
export default merit;
