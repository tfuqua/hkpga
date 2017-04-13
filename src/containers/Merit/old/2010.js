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
                <th scope="col" title="19 April, 2010, KSC Public Golf Course - North Course">LEG 1</th>
                <th scope="col" title="24-25 May, 2010, The Hong Kong Golf Club">LEG 2</th>
                <th scope="col" title="30-31, Aug, 2010, Discovery Bay Golf Club">LEG 3</th>
                <th scope="col" title="28-30 September, 2010, KSC Public Golf Course - North Course">LEG 4</th>
                <th scope="col" title="11-12 Oct, 2010, Yinli Foreign Investors Golf Club">LEG 5</th>
                <th scope="col">TOTAL</th>
              </tr>
              <tr>
                <td className="odd">1</td>
                <td className="odd">Wong Woon Man</td>
                <td className="odd">4237.5</td>
                <td className="odd">1885</td>
                <td className="odd">15850</td>
                <td className="odd">23775</td>
                <td className="odd">7293.3</td>
                <td className="odd">53040.8</td>
              </tr>
              <tr>
                <td className="even">2</td>
                <td className="even">Grant Gibson</td>
                <td className="even">767.5</td>
                <td className="even">15850</td>
                <td className="even">3390</td>
                <td className="even">16275</td>
                <td className="even">3745</td>
                <td className="even">40027.5</td>
              </tr>
              <tr>
                <td className="odd">3</td>
                <td className="odd">Andrew Good</td>
                <td className="odd">1784</td>
                <td className="odd">1380</td>
                <td className="odd">4515</td>
                <td className="odd">6150</td>
                <td className="odd">7293.3</td>
                <td className="odd">21122.3</td>
              </tr>
              <tr>
                <td className="even">4</td>
                <td className="even">Jang Chel Hoo&nbsp;</td>
                <td className="even">-</td>
                <td className="even">-</td>
                <td className="even">1173.3</td>
                <td className="even">1552.5</td>
                <td className="even">15850</td>
                <td className="even">18575.8</td>
              </tr>
              <tr>
                <td className="odd">5</td>
                <td className="odd">Ducky Tang</td>
                <td className="odd">7925</td>
                <td className="odd">870</td>
                <td className="odd">8475</td>
                <td className="odd">-</td>
                <td className="odd">1065</td>
                <td className="odd">18335</td>
              </tr>
              <tr>
                <td className="even">6</td>
                <td className="even">Dominique Boulet</td>
                <td className="even">870</td>
                <td className="even">10850</td>
                <td className="even">2540</td>
                <td className="even">3127.5</td>
                <td className="even">-</td>
                <td className="even">17387.5</td>
              </tr>
              <tr>
                <td className="odd">7</td>
                <td className="odd">Jovick Lee</td>
                <td className="odd">-</td>
                <td className="odd">3745</td>
                <td className="odd">1173.3</td>
                <td className="odd">8273</td>
                <td className="odd">1570</td>
                <td className="odd">14761.3</td>
              </tr>
              <tr>
                <td className="even">8</td>
                <td className="even">Tang Man Kee</td>
                <td className="even">1784</td>
                <td className="even">1380</td>
                <td className="even">4515</td>
                <td className="even">4725</td>
                <td className="even">1885</td>
                <td className="even">14289</td>
              </tr>
              <tr>
                <td className="odd">9</td>
                <td className="odd">Liu Kai Mung</td>
                <td className="odd">767.5</td>
                <td className="odd">2910</td>
                <td className="odd">1410</td>
                <td className="odd">1665</td>
                <td className="odd">7293.3</td>
                <td className="odd">14045.8</td>
              </tr>
              <tr>
                <td className="even">10</td>
                <td className="even">Fung Wai Kuen</td>
                <td className="even">1042.5</td>
                <td className="even">1213.3</td>
                <td className="even">8475</td>
                <td className="even">2115</td>
                <td className="even">750</td>
                <td className="even">13595.8</td>
              </tr>
              <tr>
                <td className="odd">11</td>
                <td className="odd">Tang Shing Chi</td>
                <td className="odd">870</td>
                <td className="odd">4930</td>
                <td className="odd">1583.3</td>
                <td className="odd">2438</td>
                <td className="odd">3745</td>
                <td className="odd">13566.3</td>
              </tr>
              <tr>
                <td className="even">12</td>
                <td className="even">James Stewart&nbsp;</td>
                <td className="even">457.5</td>
                <td className="even">1140</td>
                <td className="even">1095</td>
                <td className="even">8273</td>
                <td className="even">1885</td>
                <td className="even">12850.5</td>
              </tr>
              <tr>
                <td className="odd">13</td>
                <td className="odd">Jimmy Ko**</td>
                <td className="odd">661</td>
                <td className="odd">6100</td>
                <td className="odd">750</td>
                <td className="odd">2115</td>
                <td className="odd">1410</td>
                <td className="odd">11036</td>
              </tr>
              <tr>
                <td className="even">14</td>
                <td className="even">Cheng Ka Yiu</td>
                <td className="even">661</td>
                <td className="even">1065</td>
                <td className="even">2540</td>
                <td className="even">3765</td>
                <td className="even">960</td>
                <td className="even">8991</td>
              </tr>
              <tr>
                <td className="odd">15</td>
                <td className="odd">Eric Ma</td>
                <td className="odd">1784</td>
                <td className="odd">1570</td>
                <td className="odd">2540</td>
                <td className="odd">1890</td>
                <td className="odd">750</td>
                <td className="odd">8534</td>
              </tr>
              <tr>
                <td className="even">16</td>
                <td className="even">Sung Hang Man</td>
                <td className="even">406.6</td>
                <td className="even">3745</td>
                <td className="even">750</td>
                <td className="even">1815</td>
                <td className="even">1410</td>
                <td className="even">8126.6</td>
              </tr>
              <tr>
                <td className="odd">17</td>
                <td className="odd">Wong Ching Kwan</td>
                <td className="odd">4237.5</td>
                <td className="odd">810</td>
                <td className="odd">700</td>
                <td className="odd">990</td>
                <td className="odd">813.3</td>
                <td className="odd">7550.8</td>
              </tr>
              <tr>
                <td className="even">18</td>
                <td className="even">Michael Cheung</td>
                <td className="even">1784</td>
                <td className="even">1885</td>
                <td className="even">827.5</td>
                <td className="even">1755</td>
                <td className="even">1213.3</td>
                <td className="even">7464.8</td>
              </tr>
              <tr>
                <td className="odd">19</td>
                <td className="odd">Fung Wai Kit</td>
                <td className="odd">406.6</td>
                <td className="odd">650</td>
                <td className="odd">700</td>
                <td className="odd">3127.5</td>
                <td className="odd">2540</td>
                <td className="odd">7424.1</td>
              </tr>
              <tr>
                <td className="even">20</td>
                <td className="even">Timothy Tang</td>
                <td className="even">-</td>
                <td className="even">-</td>
                <td className="even">-</td>
                <td className="even">4725</td>
                <td className="even">2540</td>
                <td className="even">7265</td>
              </tr>
              <tr>
                <td className="odd">21</td>
                <td className="odd">Akashi Shintaro</td>
                <td className="odd">457.5</td>
                <td className="odd">760</td>
                <td className="odd">1410</td>
                <td className="odd">1980</td>
                <td className="odd">2540</td>
                <td className="odd">7147.5</td>
              </tr>
              <tr>
                <td className="even">22</td>
                <td className="even">Wilson Choy</td>
                <td className="even">577.5</td>
                <td className="even">2355</td>
                <td className="even">1173.3</td>
                <td className="even">1552.5</td>
                <td className="even">1140</td>
                <td className="even">6798.3</td>
              </tr>
              <tr>
                <td className="odd">23</td>
                <td className="odd">Lee Man Lok</td>
                <td className="odd">1042.5</td>
                <td className="odd">1380</td>
                <td className="odd">827.5</td>
                <td className="odd">2700</td>
                <td className="odd">813.3</td>
                <td className="odd">6763.3</td>
              </tr>
              <tr>
                <td className="even">24</td>
                <td className="even">Paul Riley</td>
                <td className="even">457.5</td>
                <td className="even">1065</td>
                <td className="even">570</td>
                <td className="even">2438</td>
                <td className="even">1213.3</td>
                <td className="even">5743.8</td>
              </tr>
              <tr>
                <td className="odd">25</td>
                <td className="odd">Derek Fung</td>
                <td className="odd">1784</td>
                <td className="odd">2355</td>
                <td className="odd">1583.3</td>
                <td className="odd">-</td>
                <td className="odd">-</td>
                <td className="odd">5722.3</td>
              </tr>
              <tr>
                <td className="even">26</td>
                <td className="even">Cheung Kwai Hong</td>
                <td className="even">502.5</td>
                <td className="even">650</td>
                <td className="even">1095</td>
                <td className="even">2250</td>
                <td className="even">1213.3</td>
                <td className="even">5710.8</td>
              </tr>
              <tr>
                <td className="odd">27</td>
                <td className="odd">Jason Kwok</td>
                <td className="odd">406.6</td>
                <td className="odd">960</td>
                <td className="odd">1800</td>
                <td className="odd">1065</td>
                <td className="odd">1410</td>
                <td className="odd">5641.6</td>
              </tr>
              <tr>
                <td className="even">28</td>
                <td className="even">Lee Kwok Yan</td>
                <td className="even">375</td>
                <td className="even">1213.3</td>
                <td className="even">1320</td>
                <td className="even">1260</td>
                <td className="even">1065</td>
                <td className="even">5233.3</td>
              </tr>
              <tr>
                <td className="odd">29</td>
                <td className="odd">Lam Chun Cheung</td>
                <td className="odd">375</td>
                <td className="odd">570</td>
                <td className="odd">1970</td>
                <td className="odd">1552.5</td>
                <td className="odd">710</td>
                <td className="odd">5177.5</td>
              </tr>
              <tr>
                <td className="even">30</td>
                <td className="even">Alexander Cheng</td>
                <td className="even">555</td>
                <td className="even">1065</td>
                <td className="even">1035</td>
                <td className="even">1552.5</td>
                <td className="even">960</td>
                <td className="even">5167.5</td>
              </tr>
              <tr>
                <td className="odd">31</td>
                <td className="odd">Ernie Lee&nbsp;</td>
                <td className="odd">661</td>
                <td className="odd">730</td>
                <td className="odd">750</td>
                <td className="odd">1395</td>
                <td className="odd">1410</td>
                <td className="odd">4946</td>
              </tr>
              <tr>
                <td className="even">32</td>
                <td className="even">Wong Hoi Kin</td>
                <td className="even">310</td>
                <td className="even">1680</td>
                <td className="even">915</td>
                <td className="even">885</td>
                <td className="even">900</td>
                <td className="even">4690</td>
              </tr>
              <tr>
                <td className="odd">33</td>
                <td className="odd">Mark Mossip</td>
                <td className="odd">457.5</td>
                <td className="odd">960</td>
                <td className="odd">915</td>
                <td className="odd">1185</td>
                <td className="odd">813.3</td>
                <td className="odd">4330.8</td>
              </tr>
              <tr>
                <td className="even">34</td>
                <td className="even">Sammy Ng</td>
                <td className="even">-</td>
                <td className="even">650</td>
                <td className="even">1035</td>
                <td className="even">1710</td>
                <td className="even">640</td>
                <td className="even">4035</td>
              </tr>
              <tr>
                <td className="odd">35</td>
                <td className="odd">Danny Kan</td>
                <td className="odd">577.5</td>
                <td className="odd">550</td>
                <td className="odd">827.5</td>
                <td className="odd">1155</td>
                <td className="odd">870</td>
                <td className="odd">3980</td>
              </tr>
              <tr>
                <td className="even">36</td>
                <td className="even">Man Hung Lap</td>
                <td className="even">310</td>
                <td className="even">570</td>
                <td className="even">990</td>
                <td className="even">945</td>
                <td className="even">1065</td>
                <td className="even">3880</td>
              </tr>
              <tr>
                <td className="odd">37</td>
                <td className="odd">Shum Hing Nam</td>
                <td className="odd">325</td>
                <td className="odd">-</td>
                <td className="odd">1260</td>
                <td className="odd">1395</td>
                <td className="odd">750</td>
                <td className="odd">3730</td>
              </tr>
              <tr>
                <td className="even">38</td>
                <td className="even">Ma Kin Man</td>
                <td className="even">350</td>
                <td className="even">760</td>
                <td className="even">590</td>
                <td className="even">1260</td>
                <td className="even">580</td>
                <td className="even">3540</td>
              </tr>
              <tr>
                <td className="odd">39</td>
                <td className="odd">Kan King Yau&nbsp;</td>
                <td className="odd">-</td>
                <td className="odd">790</td>
                <td className="odd">-</td>
                <td className="odd">990</td>
                <td className="odd">1680</td>
                <td className="odd">3460</td>
              </tr>
              <tr>
                <td className="even">40</td>
                <td className="even">Tony Lee</td>
                <td className="even">375</td>
                <td className="even">550</td>
                <td className="even">550</td>
                <td className="even">1260</td>
                <td className="even">580</td>
                <td className="even">3315</td>
              </tr>
              <tr>
                <td className="odd">41</td>
                <td className="odd">Alex Tang</td>
                <td className="odd">-</td>
                <td className="odd">650</td>
                <td className="odd">1583.3</td>
                <td className="odd">-</td>
                <td className="odd">1065</td>
                <td className="odd">3298.3</td>
              </tr>
              <tr>
                <td className="even">&nbsp; </td>
                <td className="even">&nbsp;</td>
                <td className="even">&nbsp;</td>
                <td className="even">&nbsp;</td>
                <td className="even">&nbsp;</td>
                <td className="even">&nbsp;</td>
                <td className="even">&nbsp;</td>
                <td className="even">&nbsp;</td>
              </tr>
              <tr>
                <td className="odd">43</td>
                <td className="odd">Taylor Chiang&nbsp;</td>
                <td className="odd">335</td>
                <td className="odd">550</td>
                <td className="odd">610</td>
                <td className="odd">825</td>
                <td className="odd">550</td>
                <td className="odd">2870</td>
              </tr>
              <tr>
                <td className="even">44</td>
                <td className="even">Daniel Liu</td>
                <td className="even">-</td>
                <td className="even">960</td>
                <td className="even">-</td>
                <td className="even">1110</td>
                <td className="even">680</td>
                <td className="even">2750</td>
              </tr>
              <tr>
                <td className="odd">45</td>
                <td className="odd">Li Chun Man</td>
                <td className="odd">532.5</td>
                <td className="odd">870</td>
                <td className="odd">-</td>
                <td className="odd">1110</td>
                <td className="odd">-</td>
                <td className="odd">2512.5</td>
              </tr>
              <tr>
                <td className="even">46</td>
                <td className="even">Tong Chun Po</td>
                <td className="even">-</td>
                <td className="even">1065</td>
                <td className="even">-</td>
                <td className="even">1395</td>
                <td className="even">-</td>
                <td className="even">2460</td>
              </tr>
              <tr>
                <td className="odd">47</td>
                <td className="odd">Stephen Hong</td>
                <td className="odd">502.5</td>
                <td className="odd">-</td>
                <td className="odd">960</td>
                <td className="odd">855</td>
                <td className="odd">-</td>
                <td className="odd">2317.5</td>
              </tr>
              <tr>
                <td className="even">48</td>
                <td className="even">Vaughan Mason</td>
                <td className="even">661</td>
                <td className="even">710</td>
                <td className="even">827.5</td>
                <td className="even">-</td>
                <td className="even">-</td>
                <td className="even">2198.5</td>
              </tr>
              <tr>
                <td className="odd">49</td>
                <td className="odd">Lai Wai Man</td>
                <td className="odd">-</td>
                <td className="odd">550</td>
                <td className="odd">660</td>
                <td className="odd">825</td>
                <td className="odd">-</td>
                <td className="odd">2035</td>
              </tr>
              <tr>
                <td className="even">50</td>
                <td className="even">Geoffrey So</td>
                <td className="even">350</td>
                <td className="even">550</td>
                <td className="even">-</td>
                <td className="even">1035</td>
                <td className="even">-</td>
                <td className="even">1935</td>
              </tr>
              <tr>
                <td className="odd">51</td>
                <td className="odd">Kam Hui</td>
                <td className="odd">661</td>
                <td className="odd">1213.3</td>
                <td className="odd">-</td>
                <td className="odd">-</td>
                <td className="odd">-</td>
                <td className="odd">1874.3</td>
              </tr>
              <tr>
                <td className="even">52</td>
                <td className="even">Brad Schadewitz</td>
                <td className="even">-</td>
                <td className="even">1500</td>
                <td className="even">-</td>
                <td className="even">-</td>
                <td className="even">-</td>
                <td className="even">1500</td>
              </tr>
              <tr>
                <td className="odd">53</td>
                <td className="odd">Siu Kam Piu</td>
                <td className="odd">-</td>
                <td className="odd">870</td>
                <td className="odd">-</td>
                <td className="odd">-</td>
                <td className="odd">610</td>
                <td className="odd">1480</td>
              </tr>
              <tr>
                <td className="even">T54</td>
                <td className="even">James Robbins&nbsp;</td>
                <td className="even">-</td>
                <td className="even">-</td>
                <td className="even">550</td>
                <td className="even">825</td>
                <td className="even">-</td>
                <td className="even">1375</td>
              </tr>
              <tr>
                <td className="odd">T54</td>
                <td className="odd">Liu Wai Yin</td>
                <td className="odd">-</td>
                <td className="odd">-</td>
                <td className="odd">-</td>
                <td className="odd">825</td>
                <td className="odd">550</td>
                <td className="odd">1375</td>
              </tr>
              <tr>
                <td className="even">56</td>
                <td className="even">Michael Long</td>
                <td className="even">-</td>
                <td className="even">650</td>
                <td className="even">660</td>
                <td className="even">-</td>
                <td className="even">-</td>
                <td className="even">1310</td>
              </tr>
              <tr>
                <td className="odd">57</td>
                <td className="odd">Stanley Leung&nbsp;</td>
                <td className="odd">-</td>
                <td className="odd">570</td>
                <td className="odd">-</td>
                <td className="odd">-</td>
                <td className="odd">680</td>
                <td className="odd">1250</td>
              </tr>
              <tr>
                <td className="even">58</td>
                <td className="even">Tang Shu Wing</td>
                <td className="even">-</td>
                <td className="even">-</td>
                <td className="even">-</td>
                <td className="even">-</td>
                <td className="even">960</td>
                <td className="even">960</td>
              </tr>
            </tbody>
          </table>
        : <table className="table table-striped">
            <tbody>
              <tr>
                <th scope="col">排名</th>
                <th scope="col">球手</th>
                <th scope="col" title="2010年4月19日, 滘西洲公眾高爾夫球場 - 北場">第1站</th>
                <th scope="col" title="2010年5月24-25日, 香港高爾夫球會">第2站</th>
                <th scope="col" title="2010年8月30-31日, 愉景灣高爾夫球會">第3站</th>
                <th scope="col" title="2010年9月28-30日, 滘西洲公眾高爾夫球場 - 北場">第4站</th>
                <th scope="col" title="2010年10月11-12日, 銀利高爾夫球會">第5站</th>
                <th scope="col">積分</th>
              </tr>
              <tr>
                <td className="odd">1</td>
                <td className="odd">Wong Woon Man</td>
                <td className="odd">4237.5</td>
                <td className="odd">1885</td>
                <td className="odd">15850</td>
                <td className="odd">23775</td>
                <td className="odd">7293.3</td>
                <td className="odd">53040.8</td>
              </tr>
              <tr>
                <td className="even">2</td>
                <td className="even">Grant Gibson</td>
                <td className="even">767.5</td>
                <td className="even">15850</td>
                <td className="even">3390</td>
                <td className="even">16275</td>
                <td className="even">3745</td>
                <td className="even">40027.5</td>
              </tr>
              <tr>
                <td className="odd">3</td>
                <td className="odd">Andrew Good</td>
                <td className="odd">1784</td>
                <td className="odd">1380</td>
                <td className="odd">4515</td>
                <td className="odd">6150</td>
                <td className="odd">7293.3</td>
                <td className="odd">21122.3</td>
              </tr>
              <tr>
                <td className="even">4</td>
                <td className="even">Jang Chel Hoo&nbsp;</td>
                <td className="even">-</td>
                <td className="even">-</td>
                <td className="even">1173.3</td>
                <td className="even">1552.5</td>
                <td className="even">15850</td>
                <td className="even">18575.8</td>
              </tr>
              <tr>
                <td className="odd">5</td>
                <td className="odd">Ducky Tang</td>
                <td className="odd">7925</td>
                <td className="odd">870</td>
                <td className="odd">8475</td>
                <td className="odd">-</td>
                <td className="odd">1065</td>
                <td className="odd">18335</td>
              </tr>
              <tr>
                <td className="even">6</td>
                <td className="even">Dominique Boulet</td>
                <td className="even">870</td>
                <td className="even">10850</td>
                <td className="even">2540</td>
                <td className="even">3127.5</td>
                <td className="even">-</td>
                <td className="even">17387.5</td>
              </tr>
              <tr>
                <td className="odd">7</td>
                <td className="odd">Jovick Lee</td>
                <td className="odd">-</td>
                <td className="odd">3745</td>
                <td className="odd">1173.3</td>
                <td className="odd">8273</td>
                <td className="odd">1570</td>
                <td className="odd">14761.3</td>
              </tr>
              <tr>
                <td className="even">8</td>
                <td className="even">Tang Man Kee</td>
                <td className="even">1784</td>
                <td className="even">1380</td>
                <td className="even">4515</td>
                <td className="even">4725</td>
                <td className="even">1885</td>
                <td className="even">14289</td>
              </tr>
              <tr>
                <td className="odd">9</td>
                <td className="odd">Liu Kai Mung</td>
                <td className="odd">767.5</td>
                <td className="odd">2910</td>
                <td className="odd">1410</td>
                <td className="odd">1665</td>
                <td className="odd">7293.3</td>
                <td className="odd">14045.8</td>
              </tr>
              <tr>
                <td className="even">10</td>
                <td className="even">Fung Wai Kuen</td>
                <td className="even">1042.5</td>
                <td className="even">1213.3</td>
                <td className="even">8475</td>
                <td className="even">2115</td>
                <td className="even">750</td>
                <td className="even">13595.8</td>
              </tr>
              <tr>
                <td className="odd">11</td>
                <td className="odd">Tang Shing Chi</td>
                <td className="odd">870</td>
                <td className="odd">4930</td>
                <td className="odd">1583.3</td>
                <td className="odd">2438</td>
                <td className="odd">3745</td>
                <td className="odd">13566.3</td>
              </tr>
              <tr>
                <td className="even">12</td>
                <td className="even">James Stewart&nbsp;</td>
                <td className="even">457.5</td>
                <td className="even">1140</td>
                <td className="even">1095</td>
                <td className="even">8273</td>
                <td className="even">1885</td>
                <td className="even">12850.5</td>
              </tr>
              <tr>
                <td className="odd">13</td>
                <td className="odd">Jimmy Ko**</td>
                <td className="odd">661</td>
                <td className="odd">6100</td>
                <td className="odd">750</td>
                <td className="odd">2115</td>
                <td className="odd">1410</td>
                <td className="odd">11036</td>
              </tr>
              <tr>
                <td className="even">14</td>
                <td className="even">Cheng Ka Yiu</td>
                <td className="even">661</td>
                <td className="even">1065</td>
                <td className="even">2540</td>
                <td className="even">3765</td>
                <td className="even">960</td>
                <td className="even">8991</td>
              </tr>
              <tr>
                <td className="odd">15</td>
                <td className="odd">Eric Ma</td>
                <td className="odd">1784</td>
                <td className="odd">1570</td>
                <td className="odd">2540</td>
                <td className="odd">1890</td>
                <td className="odd">750</td>
                <td className="odd">8534</td>
              </tr>
              <tr>
                <td className="even">16</td>
                <td className="even">Sung Hang Man</td>
                <td className="even">406.6</td>
                <td className="even">3745</td>
                <td className="even">750</td>
                <td className="even">1815</td>
                <td className="even">1410</td>
                <td className="even">8126.6</td>
              </tr>
              <tr>
                <td className="odd">17</td>
                <td className="odd">Wong Ching Kwan</td>
                <td className="odd">4237.5</td>
                <td className="odd">810</td>
                <td className="odd">700</td>
                <td className="odd">990</td>
                <td className="odd">813.3</td>
                <td className="odd">7550.8</td>
              </tr>
              <tr>
                <td className="even">18</td>
                <td className="even">Michael Cheung</td>
                <td className="even">1784</td>
                <td className="even">1885</td>
                <td className="even">827.5</td>
                <td className="even">1755</td>
                <td className="even">1213.3</td>
                <td className="even">7464.8</td>
              </tr>
              <tr>
                <td className="odd">19</td>
                <td className="odd">Fung Wai Kit</td>
                <td className="odd">406.6</td>
                <td className="odd">650</td>
                <td className="odd">700</td>
                <td className="odd">3127.5</td>
                <td className="odd">2540</td>
                <td className="odd">7424.1</td>
              </tr>
              <tr>
                <td className="even">20</td>
                <td className="even">Timothy Tang</td>
                <td className="even">-</td>
                <td className="even">-</td>
                <td className="even">-</td>
                <td className="even">4725</td>
                <td className="even">2540</td>
                <td className="even">7265</td>
              </tr>
              <tr>
                <td className="odd">21</td>
                <td className="odd">Akashi Shintaro</td>
                <td className="odd">457.5</td>
                <td className="odd">760</td>
                <td className="odd">1410</td>
                <td className="odd">1980</td>
                <td className="odd">2540</td>
                <td className="odd">7147.5</td>
              </tr>
              <tr>
                <td className="even">22</td>
                <td className="even">Wilson Choy</td>
                <td className="even">577.5</td>
                <td className="even">2355</td>
                <td className="even">1173.3</td>
                <td className="even">1552.5</td>
                <td className="even">1140</td>
                <td className="even">6798.3</td>
              </tr>
              <tr>
                <td className="odd">23</td>
                <td className="odd">Lee Man Lok</td>
                <td className="odd">1042.5</td>
                <td className="odd">1380</td>
                <td className="odd">827.5</td>
                <td className="odd">2700</td>
                <td className="odd">813.3</td>
                <td className="odd">6763.3</td>
              </tr>
              <tr>
                <td className="even">24</td>
                <td className="even">Paul Riley</td>
                <td className="even">457.5</td>
                <td className="even">1065</td>
                <td className="even">570</td>
                <td className="even">2438</td>
                <td className="even">1213.3</td>
                <td className="even">5743.8</td>
              </tr>
              <tr>
                <td className="odd">25</td>
                <td className="odd">Derek Fung</td>
                <td className="odd">1784</td>
                <td className="odd">2355</td>
                <td className="odd">1583.3</td>
                <td className="odd">-</td>
                <td className="odd">-</td>
                <td className="odd">5722.3</td>
              </tr>
              <tr>
                <td className="even">26</td>
                <td className="even">Cheung Kwai Hong</td>
                <td className="even">502.5</td>
                <td className="even">650</td>
                <td className="even">1095</td>
                <td className="even">2250</td>
                <td className="even">1213.3</td>
                <td className="even">5710.8</td>
              </tr>
              <tr>
                <td className="odd">27</td>
                <td className="odd">Jason Kwok</td>
                <td className="odd">406.6</td>
                <td className="odd">960</td>
                <td className="odd">1800</td>
                <td className="odd">1065</td>
                <td className="odd">1410</td>
                <td className="odd">5641.6</td>
              </tr>
              <tr>
                <td className="even">28</td>
                <td className="even">Lee Kwok Yan</td>
                <td className="even">375</td>
                <td className="even">1213.3</td>
                <td className="even">1320</td>
                <td className="even">1260</td>
                <td className="even">1065</td>
                <td className="even">5233.3</td>
              </tr>
              <tr>
                <td className="odd">29</td>
                <td className="odd">Lam Chun Cheung</td>
                <td className="odd">375</td>
                <td className="odd">570</td>
                <td className="odd">1970</td>
                <td className="odd">1552.5</td>
                <td className="odd">710</td>
                <td className="odd">5177.5</td>
              </tr>
              <tr>
                <td className="even">30</td>
                <td className="even">Alexander Cheng</td>
                <td className="even">555</td>
                <td className="even">1065</td>
                <td className="even">1035</td>
                <td className="even">1552.5</td>
                <td className="even">960</td>
                <td className="even">5167.5</td>
              </tr>
              <tr>
                <td className="odd">31</td>
                <td className="odd">Ernie Lee&nbsp;</td>
                <td className="odd">661</td>
                <td className="odd">730</td>
                <td className="odd">750</td>
                <td className="odd">1395</td>
                <td className="odd">1410</td>
                <td className="odd">4946</td>
              </tr>
              <tr>
                <td className="even">32</td>
                <td className="even">Wong Hoi Kin</td>
                <td className="even">310</td>
                <td className="even">1680</td>
                <td className="even">915</td>
                <td className="even">885</td>
                <td className="even">900</td>
                <td className="even">4690</td>
              </tr>
              <tr>
                <td className="odd">33</td>
                <td className="odd">Mark Mossip</td>
                <td className="odd">457.5</td>
                <td className="odd">960</td>
                <td className="odd">915</td>
                <td className="odd">1185</td>
                <td className="odd">813.3</td>
                <td className="odd">4330.8</td>
              </tr>
              <tr>
                <td className="even">34</td>
                <td className="even">Sammy Ng</td>
                <td className="even">-</td>
                <td className="even">650</td>
                <td className="even">1035</td>
                <td className="even">1710</td>
                <td className="even">640</td>
                <td className="even">4035</td>
              </tr>
              <tr>
                <td className="odd">35</td>
                <td className="odd">Danny Kan</td>
                <td className="odd">577.5</td>
                <td className="odd">550</td>
                <td className="odd">827.5</td>
                <td className="odd">1155</td>
                <td className="odd">870</td>
                <td className="odd">3980</td>
              </tr>
              <tr>
                <td className="even">36</td>
                <td className="even">Man Hung Lap</td>
                <td className="even">310</td>
                <td className="even">570</td>
                <td className="even">990</td>
                <td className="even">945</td>
                <td className="even">1065</td>
                <td className="even">3880</td>
              </tr>
              <tr>
                <td className="odd">37</td>
                <td className="odd">Shum Hing Nam</td>
                <td className="odd">325</td>
                <td className="odd">-</td>
                <td className="odd">1260</td>
                <td className="odd">1395</td>
                <td className="odd">750</td>
                <td className="odd">3730</td>
              </tr>
              <tr>
                <td className="even">38</td>
                <td className="even">Ma Kin Man</td>
                <td className="even">350</td>
                <td className="even">760</td>
                <td className="even">590</td>
                <td className="even">1260</td>
                <td className="even">580</td>
                <td className="even">3540</td>
              </tr>
              <tr>
                <td className="odd">39</td>
                <td className="odd">Kan King Yau&nbsp;</td>
                <td className="odd">-</td>
                <td className="odd">790</td>
                <td className="odd">-</td>
                <td className="odd">990</td>
                <td className="odd">1680</td>
                <td className="odd">3460</td>
              </tr>
              <tr>
                <td className="even">40</td>
                <td className="even">Tony Lee</td>
                <td className="even">375</td>
                <td className="even">550</td>
                <td className="even">550</td>
                <td className="even">1260</td>
                <td className="even">580</td>
                <td className="even">3315</td>
              </tr>
              <tr>
                <td className="odd">41</td>
                <td className="odd">Alex Tang</td>
                <td className="odd">-</td>
                <td className="odd">650</td>
                <td className="odd">1583.3</td>
                <td className="odd">-</td>
                <td className="odd">1065</td>
                <td className="odd">3298.3</td>
              </tr>
              <tr>
                <td className="even">&nbsp; </td>
                <td className="even">&nbsp;</td>
                <td className="even">&nbsp;</td>
                <td className="even">&nbsp;</td>
                <td className="even">&nbsp;</td>
                <td className="even">&nbsp;</td>
                <td className="even">&nbsp;</td>
                <td className="even">&nbsp;</td>
              </tr>
              <tr>
                <td className="odd">43</td>
                <td className="odd">Taylor Chiang&nbsp;</td>
                <td className="odd">335</td>
                <td className="odd">550</td>
                <td className="odd">610</td>
                <td className="odd">825</td>
                <td className="odd">550</td>
                <td className="odd">2870</td>
              </tr>
              <tr>
                <td className="even">44</td>
                <td className="even">Daniel Liu</td>
                <td className="even">-</td>
                <td className="even">960</td>
                <td className="even">-</td>
                <td className="even">1110</td>
                <td className="even">680</td>
                <td className="even">2750</td>
              </tr>
              <tr>
                <td className="odd">45</td>
                <td className="odd">Li Chun Man</td>
                <td className="odd">532.5</td>
                <td className="odd">870</td>
                <td className="odd">-</td>
                <td className="odd">1110</td>
                <td className="odd">-</td>
                <td className="odd">2512.5</td>
              </tr>
              <tr>
                <td className="even">46</td>
                <td className="even">Tong Chun Po</td>
                <td className="even">-</td>
                <td className="even">1065</td>
                <td className="even">-</td>
                <td className="even">1395</td>
                <td className="even">-</td>
                <td className="even">2460</td>
              </tr>
              <tr>
                <td className="odd">47</td>
                <td className="odd">Stephen Hong</td>
                <td className="odd">502.5</td>
                <td className="odd">-</td>
                <td className="odd">960</td>
                <td className="odd">855</td>
                <td className="odd">-</td>
                <td className="odd">2317.5</td>
              </tr>
              <tr>
                <td className="even">48</td>
                <td className="even">Vaughan Mason</td>
                <td className="even">661</td>
                <td className="even">710</td>
                <td className="even">827.5</td>
                <td className="even">-</td>
                <td className="even">-</td>
                <td className="even">2198.5</td>
              </tr>
              <tr>
                <td className="odd">49</td>
                <td className="odd">Lai Wai Man</td>
                <td className="odd">-</td>
                <td className="odd">550</td>
                <td className="odd">660</td>
                <td className="odd">825</td>
                <td className="odd">-</td>
                <td className="odd">2035</td>
              </tr>
              <tr>
                <td className="even">50</td>
                <td className="even">Geoffrey So</td>
                <td className="even">350</td>
                <td className="even">550</td>
                <td className="even">-</td>
                <td className="even">1035</td>
                <td className="even">-</td>
                <td className="even">1935</td>
              </tr>
              <tr>
                <td className="odd">51</td>
                <td className="odd">Kam Hui</td>
                <td className="odd">661</td>
                <td className="odd">1213.3</td>
                <td className="odd">-</td>
                <td className="odd">-</td>
                <td className="odd">-</td>
                <td className="odd">1874.3</td>
              </tr>
              <tr>
                <td className="even">52</td>
                <td className="even">Brad Schadewitz</td>
                <td className="even">-</td>
                <td className="even">1500</td>
                <td className="even">-</td>
                <td className="even">-</td>
                <td className="even">-</td>
                <td className="even">1500</td>
              </tr>
              <tr>
                <td className="odd">53</td>
                <td className="odd">Siu Kam Piu</td>
                <td className="odd">-</td>
                <td className="odd">870</td>
                <td className="odd">-</td>
                <td className="odd">-</td>
                <td className="odd">610</td>
                <td className="odd">1480</td>
              </tr>
              <tr>
                <td className="even">T54</td>
                <td className="even">James Robbins&nbsp;</td>
                <td className="even">-</td>
                <td className="even">-</td>
                <td className="even">550</td>
                <td className="even">825</td>
                <td className="even">-</td>
                <td className="even">1375</td>
              </tr>
              <tr>
                <td className="odd">T54</td>
                <td className="odd">Liu Wai Yin</td>
                <td className="odd">-</td>
                <td className="odd">-</td>
                <td className="odd">-</td>
                <td className="odd">825</td>
                <td className="odd">550</td>
                <td className="odd">1375</td>
              </tr>
              <tr>
                <td className="even">56</td>
                <td className="even">Michael Long</td>
                <td className="even">-</td>
                <td className="even">650</td>
                <td className="even">660</td>
                <td className="even">-</td>
                <td className="even">-</td>
                <td className="even">1310</td>
              </tr>
              <tr>
                <td className="odd">57</td>
                <td className="odd">Stanley Leung&nbsp;</td>
                <td className="odd">-</td>
                <td className="odd">570</td>
                <td className="odd">-</td>
                <td className="odd">-</td>
                <td className="odd">680</td>
                <td className="odd">1250</td>
              </tr>
              <tr>
                <td className="even">58</td>
                <td className="even">Tang Shu Wing</td>
                <td className="even">-</td>
                <td className="even">-</td>
                <td className="even">-</td>
                <td className="even">-</td>
                <td className="even">960</td>
                <td className="even">960</td>
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
                <th scope="col" title="19-20 April, 2010, KSC Public Golf Course - North Course">LEG 1</th>
                <th scope="col" title="17-18 May, 2010, Long Island Golf &amp; Country Club">LEG 2</th>
                <th scope="col" title="24-25 May, 2010,  Hong Kong Golf Club - New Course">LEG 3</th>
                <th scope="col" title="23-24 Aug, 2010, Discovery Bay Golf Club">LEG 4</th>
                <th scope="col" title="7-8 Oct, 2010, Yinli Foreign Investors Golf Club">LEG 5</th>
                <th scope="col">TOTAL</th>
              </tr>
              <tr>
                <td className="odd">1</td>
                <td className="odd">Ho Mei Dik</td>
                <td className="odd">3745</td>
                <td className="odd">15850</td>
                <td className="odd">15850</td>
                <td className="odd">3745</td>
                <td className="odd">3390</td>
                <td className="odd">42580</td>
              </tr>
              <tr>
                <td className="even">2</td>
                <td className="even">Melody Chan</td>
                <td className="even">15850</td>
                <td className="even">-</td>
                <td className="even">4930</td>
                <td className="even">10850</td>
                <td className="even">6100</td>
                <td className="even">37730</td>
              </tr>
              <tr>
                <td className="odd">3</td>
                <td className="odd">Betty Ng</td>
                <td className="odd">3745</td>
                <td className="odd">10850</td>
                <td className="odd">3745</td>
                <td className="odd">5515</td>
                <td className="odd">13350</td>
                <td className="odd">37205</td>
              </tr>
              <tr>
                <td className="even">4</td>
                <td className="even">Jannet Sheng</td>
                <td className="even">10850</td>
                <td className="even">6100</td>
                <td className="even">2510</td>
                <td className="even">3745</td>
                <td className="even">13350</td>
                <td className="even">36555</td>
              </tr>
              <tr>
                <td className="odd">5</td>
                <td className="odd">Annie Lau</td>
                <td className="odd">-</td>
                <td className="odd">4930</td>
                <td className="odd">3745</td>
                <td className="odd">15850</td>
                <td className="odd">2910</td>
                <td className="odd">27435</td>
              </tr>
              <tr>
                <td className="even">6</td>
                <td className="even">Bonnie Ngai</td>
                <td className="even">4930</td>
                <td className="even">4100</td>
                <td className="even">6100</td>
                <td className="even">-</td>
                <td className="even">4100</td>
                <td className="even">19230</td>
              </tr>
              <tr>
                <td className="odd">7</td>
                <td className="odd">Elsa Tang</td>
                <td className="odd">-</td>
                <td className="odd">3390</td>
                <td className="odd">10850</td>
                <td className="odd">-</td>
                <td className="odd">4930</td>
                <td className="odd">19170</td>
              </tr>
              <tr>
                <td className="even">8</td>
                <td className="even">Sylvia Chan</td>
                <td className="even">6100</td>
                <td className="even">2910</td>
                <td className="even">2910</td>
                <td className="even">-</td>
                <td className="even">-</td>
                <td className="even">11920</td>
              </tr>
              <tr>
                <td className="odd">9</td>
                <td className="odd">May Tang</td>
                <td className="odd">-</td>
                <td className="odd">-</td>
                <td className="odd">-</td>
                <td className="odd">5515</td>
                <td className="odd">-</td>
                <td className="odd">5515</td>
              </tr>
              <tr>
                <td className="even">10</td>
                <td className="even">Sandy Yim</td>
                <td className="even">-</td>
                <td className="even">2510</td>
                <td className="even">-</td>
                <td className="even">-</td>
                <td className="even">2510</td>
                <td className="even">5020</td>
              </tr>
            </tbody>
          </table>
        : <table className="table table-striped">
            <tbody>
              <tr>
                <th scope="col">排名</th>
                <th scope="col">球手</th>
                <th scope="col" title="2010年4月19-20日, 滘西洲公眾高爾夫球場 - 北場">第1站</th>
                <th scope="col" title="2010年5月17-18日, 長安高爾夫球鄉村俱樂部">第2站</th>
                <th scope="col" title="2010年5月24-25日, Hong Kong Golf Club - New Course">第3站</th>
                <th scope="col" title="2010年8月23-24日, 愉景灣高爾夫球會">第4站</th>
                <th scope="col" title="2010年10月7-8日, 銀利高爾夫球會">第5站</th>
                <th scope="col">積分</th>
              </tr>
              <tr>
                <td className="odd">1</td>
                <td className="odd">Ho Mei Dik</td>
                <td className="odd">3745</td>
                <td className="odd">15850</td>
                <td className="odd">15850</td>
                <td className="odd">3745</td>
                <td className="odd">3390</td>
                <td className="odd">42580</td>
              </tr>
              <tr>
                <td className="even">2</td>
                <td className="even">Melody Chan</td>
                <td className="even">15850</td>
                <td className="even">-</td>
                <td className="even">4930</td>
                <td className="even">10850</td>
                <td className="even">6100</td>
                <td className="even">37730</td>
              </tr>
              <tr>
                <td className="odd">3</td>
                <td className="odd">Betty Ng</td>
                <td className="odd">3745</td>
                <td className="odd">10850</td>
                <td className="odd">3745</td>
                <td className="odd">5515</td>
                <td className="odd">13350</td>
                <td className="odd">37205</td>
              </tr>
              <tr>
                <td className="even">4</td>
                <td className="even">Jannet Sheng</td>
                <td className="even">10850</td>
                <td className="even">6100</td>
                <td className="even">2510</td>
                <td className="even">3745</td>
                <td className="even">13350</td>
                <td className="even">36555</td>
              </tr>
              <tr>
                <td className="odd">5</td>
                <td className="odd">Annie Lau</td>
                <td className="odd">-</td>
                <td className="odd">4930</td>
                <td className="odd">3745</td>
                <td className="odd">15850</td>
                <td className="odd">2910</td>
                <td className="odd">27435</td>
              </tr>
              <tr>
                <td className="even">6</td>
                <td className="even">Bonnie Ngai</td>
                <td className="even">4930</td>
                <td className="even">4100</td>
                <td className="even">6100</td>
                <td className="even">-</td>
                <td className="even">4100</td>
                <td className="even">19230</td>
              </tr>
              <tr>
                <td className="odd">7</td>
                <td className="odd">Elsa Tang</td>
                <td className="odd">-</td>
                <td className="odd">3390</td>
                <td className="odd">10850</td>
                <td className="odd">-</td>
                <td className="odd">4930</td>
                <td className="odd">19170</td>
              </tr>
              <tr>
                <td className="even">8</td>
                <td className="even">Sylvia Chan</td>
                <td className="even">6100</td>
                <td className="even">2910</td>
                <td className="even">2910</td>
                <td className="even">-</td>
                <td className="even">-</td>
                <td className="even">11920</td>
              </tr>
              <tr>
                <td className="odd">9</td>
                <td className="odd">May Tang</td>
                <td className="odd">-</td>
                <td className="odd">-</td>
                <td className="odd">-</td>
                <td className="odd">5515</td>
                <td className="odd">-</td>
                <td className="odd">5515</td>
              </tr>
              <tr>
                <td className="even">10</td>
                <td className="even">Sandy Yim</td>
                <td className="even">-</td>
                <td className="even">2510</td>
                <td className="even">-</td>
                <td className="even">-</td>
                <td className="even">2510</td>
                <td className="even">5020</td>
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
                <th scope="col" title="19-20 April, 2010, KSC Public Golf Course - North Course">LEG 1</th>
                <th scope="col" title="17-18 May, 2010, Long Island Golf &amp; Country Club">LEG 2</th>
                <th scope="col" title="23-24 Aug, 2010, Discovery Bay Golf Club">LEG 3</th>
                <th scope="col" title="7-8 Oct, 2010, Yinli Foreign Investors Golf Club">LEG 4</th>
                <th scope="col">TOTAL</th>
              </tr>
              <tr>
                <td className="odd">1</td>
                <td className="odd">Tang Man Kee</td>
                <td className="odd">-</td>
                <td className="odd">15850</td>
                <td className="odd">10850</td>
                <td className="odd">15850</td>
                <td className="odd">42550</td>
              </tr>
              <tr>
                <td className="even">2</td>
                <td className="even">Alex Tang&nbsp;</td>
                <td className="even">15850</td>
                <td className="even">8475</td>
                <td className="even">6100</td>
                <td className="even">3150</td>
                <td className="even">33575</td>
              </tr>
              <tr>
                <td className="odd">3</td>
                <td className="odd">Liu Kai Mung&nbsp;</td>
                <td className="odd">-</td>
                <td className="odd">2710</td>
                <td className="odd">15850</td>
                <td className="odd">10850</td>
                <td className="odd">29410</td>
              </tr>
              <tr>
                <td className="even">4</td>
                <td className="even">Daniel Liu</td>
                <td className="even">10850</td>
                <td className="even">8475</td>
                <td className="even">4100</td>
                <td className="even">1583.3</td>
                <td className="even">25008.3</td>
              </tr>
              <tr>
                <td className="odd">5</td>
                <td className="odd">Michael Kan</td>
                <td className="odd">2910</td>
                <td className="odd">3745</td>
                <td className="odd">3390</td>
                <td className="odd">2355</td>
                <td className="odd">12400</td>
              </tr>
              <tr>
                <td className="even">6</td>
                <td className="even">Fung Wai Kuen</td>
                <td className="even">-</td>
                <td className="even">4930</td>
                <td className="even">-</td>
                <td className="even">6100</td>
                <td className="even">11030</td>
              </tr>
              <tr>
                <td className="odd">7</td>
                <td className="odd">Liu Wai Yin</td>
                <td className="odd">4100</td>
                <td className="odd">1800</td>
                <td className="odd">2910</td>
                <td className="odd">1440</td>
                <td className="odd">10250</td>
              </tr>
              <tr>
                <td className="even">8</td>
                <td className="even">Richard Kan</td>
                <td className="even">3390</td>
                <td className="even">2710</td>
                <td className="even">-</td>
                <td className="even">3150</td>
                <td className="even">9250</td>
              </tr>
              <tr>
                <td className="odd">9</td>
                <td className="odd">Siu Kam Piu</td>
                <td className="odd">4930</td>
                <td className="odd">2200</td>
                <td className="odd">-</td>
                <td className="odd">1970</td>
                <td className="odd">9100</td>
              </tr>
              <tr>
                <td className="even">10</td>
                <td className="even">Tommy Kan</td>
                <td className="even">6100</td>
                <td className="even">-</td>
                <td className="even">-</td>
                <td className="even">1800</td>
                <td className="even">7900</td>
              </tr>
              <tr>
                <td className="odd">11</td>
                <td className="odd">Stanley Leung&nbsp;</td>
                <td className="odd">-</td>
                <td className="odd">3745</td>
                <td className="odd">2510</td>
                <td className="odd">1583.3</td>
                <td className="odd">7838.3</td>
              </tr>
              <tr>
                <td className="even">12</td>
                <td className="even">James Robbins</td>
                <td className="even">1970</td>
                <td className="even">1680</td>
                <td className="even">2085</td>
                <td className="even">1320</td>
                <td className="even">7055</td>
              </tr>
              <tr>
                <td className="odd">13</td>
                <td className="odd">Leung Wai Kan</td>
                <td className="odd">2200</td>
                <td className="odd">1570</td>
                <td className="odd">1800</td>
                <td className="odd">-</td>
                <td className="odd">5570</td>
              </tr>
              <tr>
                <td className="even">T14</td>
                <td className="even">Jason Kwok</td>
                <td className="even">-</td>
                <td className="even">-</td>
                <td className="even">4930</td>
                <td className="even">-</td>
                <td className="even">4930</td>
              </tr>
              <tr>
                <td className="odd">T14</td>
                <td className="odd">Lau Kwong Hon</td>
                <td className="odd">-</td>
                <td className="odd">-</td>
                <td className="odd">-</td>
                <td className="odd">4930</td>
                <td className="odd">4930</td>
              </tr>
              <tr>
                <td className="even">16</td>
                <td className="even">Peter Tang&nbsp;</td>
                <td className="even">-</td>
                <td className="even">-</td>
                <td className="even">-</td>
                <td className="even">4100</td>
                <td className="even">4100</td>
              </tr>
              <tr>
                <td className="odd">17</td>
                <td className="odd">Leung Sing Choi</td>
                <td className="odd">2510</td>
                <td className="odd">-</td>
                <td className="odd">-</td>
                <td className="odd">1380</td>
                <td className="odd">3890</td>
              </tr>
              <tr>
                <td className="even">18</td>
                <td className="even">Lai Wai Man</td>
                <td className="even">-</td>
                <td className="even">-</td>
                <td className="even">2085</td>
                <td className="even">1583.3</td>
                <td className="even">3668.3</td>
              </tr>
              <tr>
                <td className="odd">19</td>
                <td className="odd">Tang Shu Wing</td>
                <td className="odd">-</td>
                <td className="odd">1970</td>
                <td className="odd">-</td>
                <td className="odd">2355</td>
                <td className="odd">4325</td>
              </tr>
            </tbody>
          </table>
        : <table className="table table-striped">
            <tbody>
              <tr>
                <th scope="col">排名</th>
                <th scope="col">球手</th>
                <th scope="col" title="2010年4月19-20日, 滘西洲公眾高爾夫球場 - 北場">第1站</th>
                <th scope="col" title="2010年5月17-18日, 長安高爾夫球鄉村俱樂部">第2站</th>
                <th scope="col" title="2010年8月23-24日, 愉景灣高爾夫球會">第3站</th>
                <th scope="col" title="2010年10月7-8日, 銀利高爾夫球會">第4站</th>
                <th scope="col">積分</th>
              </tr>
              <tr>
                <td className="odd">1</td>
                <td className="odd">Tang Man Kee</td>
                <td className="odd">-</td>
                <td className="odd">15850</td>
                <td className="odd">10850</td>
                <td className="odd">15850</td>
                <td className="odd">42550</td>
              </tr>
              <tr>
                <td className="even">2</td>
                <td className="even">Alex Tang&nbsp;</td>
                <td className="even">15850</td>
                <td className="even">8475</td>
                <td className="even">6100</td>
                <td className="even">3150</td>
                <td className="even">33575</td>
              </tr>
              <tr>
                <td className="odd">3</td>
                <td className="odd">Liu Kai Mung&nbsp;</td>
                <td className="odd">-</td>
                <td className="odd">2710</td>
                <td className="odd">15850</td>
                <td className="odd">10850</td>
                <td className="odd">29410</td>
              </tr>
              <tr>
                <td className="even">4</td>
                <td className="even">Daniel Liu</td>
                <td className="even">10850</td>
                <td className="even">8475</td>
                <td className="even">4100</td>
                <td className="even">1583.3</td>
                <td className="even">25008.3</td>
              </tr>
              <tr>
                <td className="odd">5</td>
                <td className="odd">Michael Kan</td>
                <td className="odd">2910</td>
                <td className="odd">3745</td>
                <td className="odd">3390</td>
                <td className="odd">2355</td>
                <td className="odd">12400</td>
              </tr>
              <tr>
                <td className="even">6</td>
                <td className="even">Fung Wai Kuen</td>
                <td className="even">-</td>
                <td className="even">4930</td>
                <td className="even">-</td>
                <td className="even">6100</td>
                <td className="even">11030</td>
              </tr>
              <tr>
                <td className="odd">7</td>
                <td className="odd">Liu Wai Yin</td>
                <td className="odd">4100</td>
                <td className="odd">1800</td>
                <td className="odd">2910</td>
                <td className="odd">1440</td>
                <td className="odd">10250</td>
              </tr>
              <tr>
                <td className="even">8</td>
                <td className="even">Richard Kan</td>
                <td className="even">3390</td>
                <td className="even">2710</td>
                <td className="even">-</td>
                <td className="even">3150</td>
                <td className="even">9250</td>
              </tr>
              <tr>
                <td className="odd">9</td>
                <td className="odd">Siu Kam Piu</td>
                <td className="odd">4930</td>
                <td className="odd">2200</td>
                <td className="odd">-</td>
                <td className="odd">1970</td>
                <td className="odd">9100</td>
              </tr>
              <tr>
                <td className="even">10</td>
                <td className="even">Tommy Kan</td>
                <td className="even">6100</td>
                <td className="even">-</td>
                <td className="even">-</td>
                <td className="even">1800</td>
                <td className="even">7900</td>
              </tr>
              <tr>
                <td className="odd">11</td>
                <td className="odd">Stanley Leung&nbsp;</td>
                <td className="odd">-</td>
                <td className="odd">3745</td>
                <td className="odd">2510</td>
                <td className="odd">1583.3</td>
                <td className="odd">7838.3</td>
              </tr>
              <tr>
                <td className="even">12</td>
                <td className="even">James Robbins</td>
                <td className="even">1970</td>
                <td className="even">1680</td>
                <td className="even">2085</td>
                <td className="even">1320</td>
                <td className="even">7055</td>
              </tr>
              <tr>
                <td className="odd">13</td>
                <td className="odd">Leung Wai Kan</td>
                <td className="odd">2200</td>
                <td className="odd">1570</td>
                <td className="odd">1800</td>
                <td className="odd">-</td>
                <td className="odd">5570</td>
              </tr>
              <tr>
                <td className="even">T14</td>
                <td className="even">Jason Kwok</td>
                <td className="even">-</td>
                <td className="even">-</td>
                <td className="even">4930</td>
                <td className="even">-</td>
                <td className="even">4930</td>
              </tr>
              <tr>
                <td className="odd">T14</td>
                <td className="odd">Lau Kwong Hon</td>
                <td className="odd">-</td>
                <td className="odd">-</td>
                <td className="odd">-</td>
                <td className="odd">4930</td>
                <td className="odd">4930</td>
              </tr>
              <tr>
                <td className="even">16</td>
                <td className="even">Peter Tang&nbsp;</td>
                <td className="even">-</td>
                <td className="even">-</td>
                <td className="even">-</td>
                <td className="even">4100</td>
                <td className="even">4100</td>
              </tr>
              <tr>
                <td className="odd">17</td>
                <td className="odd">Leung Sing Choi</td>
                <td className="odd">2510</td>
                <td className="odd">-</td>
                <td className="odd">-</td>
                <td className="odd">1380</td>
                <td className="odd">3890</td>
              </tr>
              <tr>
                <td className="even">18</td>
                <td className="even">Lai Wai Man</td>
                <td className="even">-</td>
                <td className="even">-</td>
                <td className="even">2085</td>
                <td className="even">1583.3</td>
                <td className="even">3668.3</td>
              </tr>
              <tr>
                <td className="odd">19</td>
                <td className="odd">Tang Shu Wing</td>
                <td className="odd">-</td>
                <td className="odd">1970</td>
                <td className="odd">-</td>
                <td className="odd">2355</td>
                <td className="odd">4325</td>
              </tr>
            </tbody>
          </table>}
    </div>
  );
}
export default merit;
