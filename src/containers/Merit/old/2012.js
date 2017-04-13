import React from 'react';

function merit(props) {
  return (
    <div className="container-fluid" id="merit-page">
      <h3>Open Division </h3>

      {props.lang === 'en'
        ? <table className="table table-striped">
            <tbody>
              <tr>
                <th height="20" scope="col">POS</th>
                <th height="20" scope="col">PLAYER</th>
                <th
                  height="20"
                  title="28-31 March, 2011, Clearwater Bay Golf Club, Hong Kong Golf Club, Kau Sai Chau Public Golf Course"
                  scope="col">
                  LEG 1
                </th>
                <th height="20" title="30-31 May, 2011, Kau Sai Chau Public Golf Course - North Course" scope="col">
                  CHAMPIONSHIP
                </th>
                <th height="20" title="27-28, June, 2011, Clearwater Bay Golf Club" scope="col">LEG 2</th>
                <th title="15-16 August, 2011, Discovery Bay Golf Club" scope="col">LEG 3</th>
                <th title="15-16 August, 2011, Discovery Bay Golf Club" scope="col">YINLI</th>
                <th title="15-16 August, 2011, Discovery Bay Golf Club" scope="col">LEG4</th>
                <th height="20" title="15-16 August, 2011, Discovery Bay Golf Club" scope="col">TOTAL</th>
              </tr>
              <tr>
                <td width="41">1</td>
                <td width="130">TIMOTHY TANG</td>
                <td width="58">1885</td>
                <td width="100">7395</td>
                <td width="65">15850</td>
                <td width="66">8475</td>
                <td width="65">31700</td>
                <td width="65">6100</td>
                <td width="73">71405</td>
              </tr>
              <tr>
                <td width="41">2</td>
                <td width="130">JAMES STEWART</td>
                <td width="58">10850</td>
                <td width="100">2955</td>
                <td width="65">1514</td>
                <td width="66">2910</td>
                <td width="65">21700</td>
                <td width="65">15850</td>
                <td width="73">55779</td>
              </tr>
              <tr>
                <td width="41">3</td>
                <td width="130">WONG WOON MAN</td>
                <td width="58">3745</td>
                <td width="100">23775</td>
                <td width="65">2910</td>
                <td width="66">2510</td>
                <td width="65">9860</td>
                <td width="65">1470</td>
                <td width="73">44270</td>
              </tr>
              <tr>
                <td width="41">4</td>
                <td width="130">JOVICK LEE</td>
                <td width="58">15850</td>
                <td width="100">3810</td>
                <td width="65">10850</td>
                <td width="66">2200</td>
                <td width="65"> </td>
                <td width="65"> </td>
                <td width="73">32710</td>
              </tr>
              <tr>
                <td width="41">5</td>
                <td width="130">JANG CHEL HOO</td>
                <td width="58">4930</td>
                <td width="100">1935</td>
                <td width="65">1514</td>
                <td width="66"> </td>
                <td width="65">12200</td>
                <td width="65">10850</td>
                <td width="73">31429</td>
              </tr>
              <tr>
                <td width="41">6</td>
                <td width="130">JIMMY KO</td>
                <td width="58">2710</td>
                <td width="100">5085</td>
                <td width="65">3745</td>
                <td width="66">4140</td>
                <td width="65">6780</td>
                <td width="65">2355</td>
                <td width="73">24815</td>
              </tr>
              <tr>
                <td width="41">7</td>
                <td width="130">CHRIS TANG</td>
                <td width="58">1680</td>
                <td width="100">16275</td>
                <td width="65">3745</td>
                <td width="66"> </td>
                <td width="65"> </td>
                <td width="65">2355</td>
                <td width="73">24055</td>
              </tr>
              <tr>
                <td width="41">8</td>
                <td width="130">CHENG KA YIU</td>
                <td width="58">2200</td>
                <td width="100">2437.5</td>
                <td width="65">2085</td>
                <td width="66">1740</td>
                <td width="65">8200</td>
                <td width="65">4930</td>
                <td width="73">21592.5</td>
              </tr>
              <tr>
                <td width="41">9</td>
                <td width="130">MICHAEL CHEUNG</td>
                <td width="58">1155</td>
                <td width="100">690</td>
                <td width="65">1514</td>
                <td width="66">15850</td>
                <td width="65"> </td>
                <td width="65">1740</td>
                <td width="73">20949</td>
              </tr>
              <tr>
                <td width="41">10</td>
                <td width="130">DOMINIQUE BOULET</td>
                <td width="58"> </td>
                <td width="100">3810</td>
                <td width="65">5515</td>
                <td width="66">8475</td>
                <td width="65"> </td>
                <td width="65"> </td>
                <td width="73">17800</td>
              </tr>
              <tr>
                <td width="41">11</td>
                <td width="130">WILSON CHOY</td>
                <td width="58">1503.3</td>
                <td width="100">9150</td>
                <td width="65">1800</td>
                <td width="66">4140</td>
                <td width="65"> </td>
                <td width="65"> </td>
                <td width="73">16593.3</td>
              </tr>
              <tr>
                <td width="41">12</td>
                <td width="130">GRANT GIBSON</td>
                <td width="58">6100</td>
                <td width="100">1760</td>
                <td width="65">5515</td>
                <td width="66"> </td>
                <td width="65"> </td>
                <td width="65"> </td>
                <td width="73">13375</td>
              </tr>
              <tr>
                <td width="41">13</td>
                <td width="130">TANG MAN KEE</td>
                <td width="58">1320</td>
                <td width="100">3810</td>
                <td width="65">975</td>
                <td width="66">4140</td>
                <td width="65"> </td>
                <td width="65"> </td>
                <td width="73">10245</td>
              </tr>
              <tr>
                <td width="41">14</td>
                <td width="130">ANDREW GOOD</td>
                <td width="58">3745</td>
                <td width="100">2700</td>
                <td width="65">2085</td>
                <td width="66"> </td>
                <td width="65"> </td>
                <td width="65"> </td>
                <td width="73">8530</td>
              </tr>
              <tr>
                <td width="41">15</td>
                <td width="130">MAN HUNG LAP</td>
                <td width="58">930</td>
                <td width="100">2115</td>
                <td width="65">1035</td>
                <td width="66">810</td>
                <td width="65"> </td>
                <td width="65">3390</td>
                <td width="73">8280</td>
              </tr>
              <tr>
                <td width="41">16</td>
                <td width="130">LIU LOK TIN</td>
                <td width="58">2710</td>
                <td width="100">2437.5</td>
                <td width="65"> </td>
                <td width="66">1173.3</td>
                <td width="65"> </td>
                <td width="65">1740</td>
                <td width="73">8060.8</td>
              </tr>
              <tr>
                <td width="41">17</td>
                <td width="130">JASON KWOK</td>
                <td width="58">930</td>
                <td width="100">885</td>
                <td width="65">790</td>
                <td width="66">1050</td>
                <td width="65"> </td>
                <td width="65">4100</td>
                <td width="73">7755</td>
              </tr>
              <tr>
                <td width="41">18</td>
                <td width="130">DAVID FREEMAN</td>
                <td width="58"> </td>
                <td width="100">6150</td>
                <td width="65">1290</td>
                <td width="66"> </td>
                <td width="65"> </td>
                <td width="65"> </td>
                <td width="73">7440</td>
              </tr>
              <tr>
                <td width="41">19</td>
                <td width="130">CHRIS MARRS</td>
                <td width="58">840</td>
                <td width="100">2115</td>
                <td width="65">740</td>
                <td width="66"> </td>
                <td width="65"> </td>
                <td width="65">2910</td>
                <td width="73">6605</td>
              </tr>
              <tr>
                <td width="41">20</td>
                <td width="130">FUNG WAI KIT</td>
                <td width="58">1503.3</td>
                <td width="100">1440</td>
                <td width="65">660</td>
                <td width="66">1410</td>
                <td width="65"> </td>
                <td width="65">1570</td>
                <td width="73">6583.3</td>
              </tr>
              <tr>
                <td width="41">21</td>
                <td width="130">LEE KWOK YAN</td>
                <td width="58">590</td>
                <td width="100">1935</td>
                <td width="65">885</td>
                <td width="66">1320</td>
                <td width="65"> </td>
                <td width="65">1350</td>
                <td width="73">6080</td>
              </tr>
              <tr>
                <td width="41">22</td>
                <td width="130">ERIC MA</td>
                <td width="58">1885</td>
                <td width="100">2250</td>
                <td width="65">1290</td>
                <td width="66"> </td>
                <td width="65"> </td>
                <td width="65"> </td>
                <td width="73">5425</td>
              </tr>
              <tr>
                <td width="41">23</td>
                <td width="130">ALEXANDER CHENG</td>
                <td width="58">1155</td>
                <td width="100">813.33</td>
                <td width="65">2510</td>
                <td width="66">790</td>
                <td width="65"> </td>
                <td width="65"> </td>
                <td width="73">5268.33</td>
              </tr>
              <tr>
                <td width="41">24</td>
                <td width="130">LI CHUN MAN</td>
                <td width="58">1320</td>
                <td width="100">750</td>
                <td width="65">610</td>
                <td width="66">1050</td>
                <td width="65"> </td>
                <td width="65">1350</td>
                <td width="73">5080</td>
              </tr>
              <tr>
                <td width="41">25</td>
                <td width="130">DANNY KAN</td>
                <td width="58">630</td>
                <td width="100">750</td>
                <td width="65">1142</td>
                <td width="66">1173.3</td>
                <td width="65"> </td>
                <td width="65">1260</td>
                <td width="73">4955.3</td>
              </tr>
              <tr>
                <td width="41">26</td>
                <td width="130">BILLY MA</td>
                <td width="58">1320</td>
                <td width="100"> </td>
                <td width="65">1514</td>
                <td width="66">915</td>
                <td width="65"> </td>
                <td width="65">1170</td>
                <td width="73">4919</td>
              </tr>
              <tr>
                <td width="41">27</td>
                <td width="130">ERIC LEE</td>
                <td width="58">1080</td>
                <td width="100">813.33</td>
                <td width="65">1142</td>
                <td width="66">1740</td>
                <td width="65"> </td>
                <td width="65"> </td>
                <td width="73">4775.33</td>
              </tr>
              <tr>
                <td width="41">28</td>
                <td width="130">TONY LEE</td>
                <td width="58">730</td>
                <td width="100">1485</td>
                <td width="65">550</td>
                <td width="66">770</td>
                <td width="65"> </td>
                <td width="65">1210</td>
                <td width="73">4745</td>
              </tr>
              <tr>
                <td width="41">29</td>
                <td width="130">WONG CHING KWAN</td>
                <td width="58">730</td>
                <td width="100">1530</td>
                <td width="65"> </td>
                <td width="66">960</td>
                <td width="65"> </td>
                <td width="65">1125</td>
                <td width="73">4345</td>
              </tr>
              <tr>
                <td width="41">30</td>
                <td width="130">MARK MOSSIP</td>
                <td width="58">780</td>
                <td width="100">1620</td>
                <td width="65">740</td>
                <td width="66">1173.3</td>
                <td width="65"> </td>
                <td width="65"> </td>
                <td width="73">4313.3</td>
              </tr>
              <tr>
                <td width="41">31</td>
                <td width="130">WILLIAM FUNG</td>
                <td width="58">650</td>
                <td width="100">650</td>
                <td width="65">885</td>
                <td width="66">1970</td>
                <td width="65"> </td>
                <td width="65"> </td>
                <td width="73">4155</td>
              </tr>
              <tr>
                <td width="41">32</td>
                <td width="130">BENNY YEUNG</td>
                <td width="58">780</td>
                <td width="100">750</td>
                <td width="65">1142</td>
                <td width="66">1410</td>
                <td width="65"> </td>
                <td width="65"> </td>
                <td width="73">4082</td>
              </tr>
              <tr>
                <td width="41">33</td>
                <td width="130">STANLEY LEUNG</td>
                <td width="58">1110</td>
                <td width="100">813.33</td>
                <td width="65">885</td>
                <td width="66">1260</td>
                <td width="65"> </td>
                <td width="65"> </td>
                <td width="73">4068.33</td>
              </tr>
              <tr>
                <td width="41">34</td>
                <td width="130">SIU KAM PIU</td>
                <td width="58">550</td>
                <td width="100">1760</td>
                <td width="65">610</td>
                <td width="66">1050</td>
                <td width="65"> </td>
                <td width="65"> </td>
                <td width="73">3970</td>
              </tr>
              <tr>
                <td width="41">35</td>
                <td width="130">ERNIE LEE</td>
                <td width="58">1210</td>
                <td width="100">1760</td>
                <td width="65">790</td>
                <td width="66"> </td>
                <td width="65"> </td>
                <td width="65"> </td>
                <td width="73">3760</td>
              </tr>
              <tr>
                <td width="41">36</td>
                <td width="130">HUI HO MAN</td>
                <td width="58">840</td>
                <td width="100">690</td>
                <td width="65">1035</td>
                <td width="66">915</td>
                <td width="65"> </td>
                <td width="65"> </td>
                <td width="73">3480</td>
              </tr>
              <tr>
                <td width="41">37</td>
                <td width="130">CHAN WAI HUNG</td>
                <td width="58">1035</td>
                <td width="100">560</td>
                <td width="65">550</td>
                <td width="66"> </td>
                <td width="65"> </td>
                <td width="65">1125</td>
                <td width="73">3270</td>
              </tr>
              <tr>
                <td width="41">38</td>
                <td width="130">TAYLOR CHIANG</td>
                <td width="58">590</td>
                <td width="100">590</td>
                <td width="65">560</td>
                <td width="66">1500</td>
                <td width="65"> </td>
                <td width="65"> </td>
                <td width="73">3240</td>
              </tr>
              <tr>
                <td width="41">39</td>
                <td width="130">DUCKY TANG</td>
                <td width="58">1035</td>
                <td width="100">560</td>
                <td width="65"> </td>
                <td width="66">1570</td>
                <td width="65"> </td>
                <td width="65"> </td>
                <td width="73">3165</td>
              </tr>
              <tr>
                <td width="41">40</td>
                <td width="130">ERIC SHUM</td>
                <td width="58">680</td>
                <td width="100">620</td>
                <td width="65">550</td>
                <td width="66">855</td>
                <td width="65"> </td>
                <td width="65"> </td>
                <td width="73">2705</td>
              </tr>
              <tr>
                <td width="41">41</td>
                <td width="130">WONG HOI KIN</td>
                <td width="58">930</td>
                <td width="100">930</td>
                <td width="65">660</td>
                <td width="66"> </td>
                <td width="65"> </td>
                <td width="65"> </td>
                <td width="73">2520</td>
              </tr>
              <tr>
                <td width="41">42</td>
                <td width="130">REENE LAM</td>
                <td width="58"> </td>
                <td width="100">1620</td>
                <td width="65">790</td>
                <td width="66"> </td>
                <td width="65"> </td>
                <td width="65"> </td>
                <td width="73">2410</td>
              </tr>
              <tr>
                <td width="41">43</td>
                <td width="130">JOHN LAI</td>
                <td width="58">590</td>
                <td width="100"> </td>
                <td width="65">690</td>
                <td width="66">1110</td>
                <td width="65"> </td>
                <td width="65"> </td>
                <td width="73">2390</td>
              </tr>
              <tr>
                <td width="41">44</td>
                <td width="130">RAY FUNG</td>
                <td width="58"> </td>
                <td width="100"> </td>
                <td width="65"> </td>
                <td width="66">855</td>
                <td width="65"> </td>
                <td width="65">1470</td>
                <td width="73">2325</td>
              </tr>
              <tr>
                <td width="41">45</td>
                <td width="130">TONG CHUN PO</td>
                <td width="58">730</td>
                <td width="100">690</td>
                <td width="65">885</td>
                <td width="66"> </td>
                <td width="65"> </td>
                <td width="65"> </td>
                <td width="73">2305</td>
              </tr>
              <tr>
                <td width="41">46</td>
                <td width="130">AKASHI SHINTARO</td>
                <td width="58"> </td>
                <td width="100"> </td>
                <td width="65"> </td>
                <td width="66"> </td>
                <td width="65"> </td>
                <td width="65">1970</td>
                <td width="73">1970</td>
              </tr>
              <tr>
                <td width="41">47</td>
                <td width="130">MICHAEL LONG</td>
                <td width="58"> </td>
                <td width="100">620</td>
                <td width="65"> </td>
                <td width="66">990</td>
                <td width="65"> </td>
                <td width="65"> </td>
                <td width="73">1610</td>
              </tr>
              <tr>
                <td width="41">48</td>
                <td width="130">KEVIN HIND</td>
                <td width="58"> </td>
                <td width="100"> </td>
                <td width="65">1514</td>
                <td width="66"> </td>
                <td width="65"> </td>
                <td width="65"> </td>
                <td width="73">1514</td>
              </tr>
              <tr>
                <td width="41">49</td>
                <td width="130">PAUL RILEY</td>
                <td width="58">1503.3</td>
                <td width="100"> </td>
                <td width="65"> </td>
                <td width="66"> </td>
                <td width="65"> </td>
                <td width="65"> </td>
                <td width="73">1503.3</td>
              </tr>
              <tr>
                <td width="41">T50</td>
                <td width="130">VAUGHAN MASON</td>
                <td width="58"> </td>
                <td width="100"> </td>
                <td width="65">1142</td>
                <td width="66"> </td>
                <td width="65"> </td>
                <td width="65"> </td>
                <td width="73">1142</td>
              </tr>
              <tr>
                <td width="41">T50</td>
                <td width="130">SUNG HANG MAN</td>
                <td width="58"> </td>
                <td width="100"> </td>
                <td width="65">1142</td>
                <td width="66"> </td>
                <td width="65"> </td>
                <td width="65"> </td>
                <td width="73">1142</td>
              </tr>
              <tr>
                <td width="41">T52</td>
                <td width="130">JAMES ROBBINS</td>
                <td width="58">550</td>
                <td width="100">550</td>
                <td width="65"> </td>
                <td width="66"> </td>
                <td width="65"> </td>
                <td width="65"> </td>
                <td width="73">1100</td>
              </tr>
              <tr>
                <td width="41">T52</td>
                <td width="130">LIU WAI YIN</td>
                <td width="58"> </td>
                <td width="100">550</td>
                <td width="65">550</td>
                <td width="66"> </td>
                <td width="65"> </td>
                <td width="65"> </td>
                <td width="73">1100</td>
              </tr>
              <tr>
                <td width="41">54</td>
                <td width="130">LEE MAN LOK</td>
                <td width="58">990</td>
                <td width="100"> </td>
                <td width="65"> </td>
                <td width="66"> </td>
                <td width="65"> </td>
                <td width="65"> </td>
                <td width="73">990</td>
              </tr>
              <tr>
                <td width="41">55</td>
                <td width="130">TANG SHU WING</td>
                <td width="58"> </td>
                <td width="100"> </td>
                <td width="65">975</td>
                <td width="66"> </td>
                <td width="65"> </td>
                <td width="65"> </td>
                <td width="73">975</td>
              </tr>
              <tr>
                <td width="41">56</td>
                <td width="130">SUNG SING</td>
                <td width="58"> </td>
                <td width="100">885</td>
                <td width="65"> </td>
                <td width="66"> </td>
                <td width="65"> </td>
                <td width="65"> </td>
                <td width="73">885</td>
              </tr>
              <tr>
                <td width="41">57</td>
                <td width="130">ALFREDO MORALES</td>
                <td width="58"> </td>
                <td width="100"> </td>
                <td width="65"> </td>
                <td width="66">750</td>
                <td width="65"> </td>
                <td width="65"> </td>
                <td width="73">750</td>
              </tr>
              <tr>
                <td width="41">58</td>
                <td width="130">ALEX TANG</td>
                <td width="58"> </td>
                <td width="100"> </td>
                <td width="65">710</td>
                <td width="66"> </td>
                <td width="65"> </td>
                <td width="65"> </td>
                <td width="73">710</td>
              </tr>
              <tr>
                <td width="41">59</td>
                <td width="130">JOESON CHUNG</td>
                <td width="58">680</td>
                <td width="100"> </td>
                <td width="65"> </td>
                <td width="66"> </td>
                <td width="65"> </td>
                <td width="65"> </td>
                <td width="73">680</td>
              </tr>
              <tr>
                <td width="41">60</td>
                <td width="130">SAMMY NG</td>
                <td width="58"> </td>
                <td width="100"> </td>
                <td width="65">610</td>
                <td width="66"> </td>
                <td width="65"> </td>
                <td width="65"> </td>
                <td width="73">610</td>
              </tr>
              <tr>
                <td width="41">61</td>
                <td width="130">LIU PING KWONG</td>
                <td width="58">550</td>
                <td width="100"> </td>
                <td width="65"> </td>
                <td width="66"> </td>
                <td width="65"> </td>
                <td width="65"> </td>
                <td width="73">55</td>
              </tr>
            </tbody>
          </table>
        : <table className="table table-striped">
            <tbody>
              <tr>
                <th width="73" height="20" scope="col">排名</th>
                <th width="190" height="20" scope="col">球手</th>
                <th title="2011年5月30-31日, 滘西洲公眾高爾夫球場 - 北場" scope="col"><div align="center">第1站</div></th>
                <th title="2011年5月30-31日, 滘西洲公眾高爾夫球場 - 北場" scope="col">錦標賽</th>
                <th title="2011年5月30-31日, 滘西洲公眾高爾夫球場 - 北場" scope="col">第2站</th>
                <th title="2011年5月30-31日, 滘西洲公眾高爾夫球場 - 北場" scope="col">第3站</th>
                <th title="2011年5月30-31日, 滘西洲公眾高爾夫球場 - 北場" scope="col">總分數</th>
              </tr>
              <tr>
                <td width="73">1</td>
                <td width="190">鄧子鏗</td>
                <td width="145">1885</td>
                <td width="184">7395</td>
                <td width="184">15850</td>
                <td width="184">8475</td>
                <td width="184">33605</td>
              </tr>
              <tr>
                <td>2</td>
                <td>黃煥民</td>
                <td>3745</td>
                <td>23775</td>
                <td>2910</td>
                <td>2510</td>
                <td>32940</td>
              </tr>
              <tr>
                <td>3</td>
                <td>李永基</td>
                <td>15850</td>
                <td>3810</td>
                <td>10850</td>
                <td>2200</td>
                <td>32710</td>
              </tr>
              <tr>
                <td>4</td>
                <td>鄧承志</td>
                <td>1680</td>
                <td>16275</td>
                <td>3745</td>
                <td />
                <td>21700</td>
              </tr>
              <tr>
                <td>5</td>
                <td>張建平</td>
                <td>1155</td>
                <td>690</td>
                <td>1514</td>
                <td>15850</td>
                <td>19209</td>
              </tr>
              <tr>
                <td>6</td>
                <td>James Stewart&nbsp;</td>
                <td>10850</td>
                <td>2955</td>
                <td>1514</td>
                <td>2910</td>
                <td>18229</td>
              </tr>
              <tr>
                <td>7</td>
                <td>Dominique Boulet</td>
                <td />
                <td>3810</td>
                <td>5515</td>
                <td>8475</td>
                <td>17800</td>
              </tr>
              <tr>
                <td>8</td>
                <td>蔡維臣</td>
                <td>1503.3</td>
                <td>9150</td>
                <td>1800</td>
                <td>4140</td>
                <td>16593.3</td>
              </tr>
              <tr>
                <td>9</td>
                <td>高銘澤</td>
                <td>2710</td>
                <td>5085</td>
                <td>3745</td>
                <td>4140</td>
                <td>15680</td>
              </tr>
              <tr>
                <td>10</td>
                <td>Grant Gibson</td>
                <td>6100</td>
                <td>1760</td>
                <td>5515</td>
                <td />
                <td>13375</td>
              </tr>
              <tr>
                <td>11</td>
                <td>鄧敏祺</td>
                <td>1320</td>
                <td>3810</td>
                <td>975</td>
                <td>4140</td>
                <td>10245</td>
              </tr>
              <tr>
                <td>12</td>
                <td>Andrew Good</td>
                <td>3745</td>
                <td>2700</td>
                <td>2085</td>
                <td />
                <td>8530</td>
              </tr>
              <tr>
                <td>13</td>
                <td>鄭家耀</td>
                <td>2200</td>
                <td>2437.5</td>
                <td>2085</td>
                <td>1740</td>
                <td>8462.5</td>
              </tr>
              <tr>
                <td>14</td>
                <td>張哲鎬</td>
                <td>4930</td>
                <td>1935</td>
                <td>1514</td>
                <td />
                <td>8379</td>
              </tr>
              <tr>
                <td>15</td>
                <td>David Freeman</td>
                <td />
                <td>6150</td>
                <td>1290</td>
                <td />
                <td>7440</td>
              </tr>
              <tr>
                <td>16</td>
                <td>廖樂天</td>
                <td>2710</td>
                <td>2437.5</td>
                <td />
                <td>1173.3</td>
                <td>6320.8</td>
              </tr>
              <tr>
                <td>17</td>
                <td>馬金發</td>
                <td>1885</td>
                <td>2250</td>
                <td>1290</td>
                <td />
                <td>5425</td>
              </tr>
              <tr>
                <td>18</td>
                <td>鄭德謙</td>
                <td>1155</td>
                <td>813.33</td>
                <td>2510</td>
                <td>790</td>
                <td>5268.33</td>
              </tr>
              <tr>
                <td>19</td>
                <td>馮偉傑</td>
                <td>1503.3</td>
                <td>1440</td>
                <td>660</td>
                <td>1410</td>
                <td>5013.3</td>
              </tr>
              <tr>
                <td>20</td>
                <td>萬雄立</td>
                <td>930</td>
                <td>2115</td>
                <td>1035</td>
                <td>810</td>
                <td>4890</td>
              </tr>
              <tr>
                <td>21</td>
                <td>李銘皆</td>
                <td>1080</td>
                <td>813.33</td>
                <td>1142</td>
                <td>1740</td>
                <td>4775.33</td>
              </tr>
              <tr>
                <td>22</td>
                <td>李國恩</td>
                <td>590</td>
                <td>1935</td>
                <td>885</td>
                <td>1320</td>
                <td>4730</td>
              </tr>
              <tr>
                <td>23</td>
                <td>Mark Mossip</td>
                <td>780</td>
                <td>1620</td>
                <td>740</td>
                <td>1173.3</td>
                <td>4313.3</td>
              </tr>
              <tr>
                <td>24</td>
                <td>馮偉權</td>
                <td>650</td>
                <td>650</td>
                <td>885</td>
                <td>1970</td>
                <td>4155</td>
              </tr>
              <tr>
                <td>25</td>
                <td>楊沿泰</td>
                <td>780</td>
                <td>750</td>
                <td>1142</td>
                <td>1410</td>
                <td>4082</td>
              </tr>
              <tr>
                <td>26</td>
                <td>梁紹才</td>
                <td>1110</td>
                <td>813.33</td>
                <td>885</td>
                <td>1260</td>
                <td>4068.33</td>
              </tr>
              <tr>
                <td>27</td>
                <td>蕭金標</td>
                <td>550</td>
                <td>1760</td>
                <td>610</td>
                <td>1050</td>
                <td>3970</td>
              </tr>
              <tr>
                <td>28</td>
                <td>李宇軒</td>
                <td>1210</td>
                <td>1760</td>
                <td>790</td>
                <td />
                <td>3760</td>
              </tr>
              <tr>
                <td>29</td>
                <td>馬偉民</td>
                <td>1320</td>
                <td />
                <td>1514</td>
                <td>915</td>
                <td>3749</td>
              </tr>
              <tr>
                <td>30</td>
                <td>李俊民</td>
                <td>1320</td>
                <td>750</td>
                <td>610</td>
                <td>1050</td>
                <td>3730</td>
              </tr>
              <tr>
                <td>31</td>
                <td>簡栢堅</td>
                <td>630</td>
                <td>750</td>
                <td>1142</td>
                <td>1173.3</td>
                <td>3695.3</td>
              </tr>
              <tr>
                <td>32</td>
                <td>Chris Marrs</td>
                <td>840</td>
                <td>2115</td>
                <td>740</td>
                <td />
                <td>3695</td>
              </tr>
              <tr>
                <td>33</td>
                <td>郭永昌</td>
                <td>930</td>
                <td>885</td>
                <td>790</td>
                <td>1050</td>
                <td>3655</td>
              </tr>
              <tr>
                <td>34</td>
                <td>李應東</td>
                <td>730</td>
                <td>1485</td>
                <td>550</td>
                <td>770</td>
                <td>3535</td>
              </tr>
              <tr>
                <td>35</td>
                <td>許灝文</td>
                <td>840</td>
                <td>690</td>
                <td>1035</td>
                <td>915</td>
                <td>3480</td>
              </tr>
              <tr>
                <td>36</td>
                <td>蔣國良</td>
                <td>590</td>
                <td>590</td>
                <td>560</td>
                <td>1500</td>
                <td>3240</td>
              </tr>
              <tr>
                <td>37</td>
                <td>黃鉦鈞</td>
                <td>730</td>
                <td>1530</td>
                <td />
                <td>960</td>
                <td>3220</td>
              </tr>
              <tr>
                <td>38</td>
                <td>鄧偉俊</td>
                <td>1035</td>
                <td>560</td>
                <td />
                <td>1570</td>
                <td>3165</td>
              </tr>
              <tr>
                <td>39</td>
                <td>沈興南</td>
                <td>680</td>
                <td>620</td>
                <td>550</td>
                <td>855</td>
                <td>2705</td>
              </tr>
              <tr>
                <td>40</td>
                <td>黃海健</td>
                <td>930</td>
                <td>930</td>
                <td>660</td>
                <td />
                <td>2520</td>
              </tr>
              <tr>
                <td>41</td>
                <td>林春祥</td>
                <td />
                <td>1620</td>
                <td>790</td>
                <td />
                <td>2410</td>
              </tr>
              <tr>
                <td>42</td>
                <td>黎煒健</td>
                <td>590</td>
                <td />
                <td>690</td>
                <td>1110</td>
                <td>2390</td>
              </tr>
              <tr>
                <td>43</td>
                <td>唐進寶</td>
                <td>730</td>
                <td>690</td>
                <td>885</td>
                <td />
                <td>2305</td>
              </tr>
              <tr>
                <td>44</td>
                <td>陳煒鴻</td>
                <td>1035</td>
                <td>560</td>
                <td>550</td>
                <td />
                <td>2145</td>
              </tr>
              <tr>
                <td>45</td>
                <td>Michael Long</td>
                <td />
                <td>620</td>
                <td />
                <td>990</td>
                <td>1610</td>
              </tr>
              <tr>
                <td>46</td>
                <td>Kevin Hind</td>
                <td />
                <td />
                <td>1514</td>
                <td />
                <td>1514</td>
              </tr>
              <tr>
                <td>47</td>
                <td>Paul Riley</td>
                <td>1503.3</td>
                <td />
                <td />
                <td />
                <td>1503.3</td>
              </tr>
              <tr>
                <td>48</td>
                <td>Vaughan Mason</td>
                <td />
                <td />
                <td>1142</td>
                <td />
                <td>1142</td>
              </tr>
              <tr>
                <td>T49</td>
                <td>宋幸文</td>
                <td />
                <td />
                <td>1142</td>
                <td />
                <td>1142</td>
              </tr>
              <tr>
                <td>T49</td>
                <td>James Robbins&nbsp;</td>
                <td>550</td>
                <td>550</td>
                <td />
                <td />
                <td>1100</td>
              </tr>
              <tr>
                <td>T51</td>
                <td>廖煒賢</td>
                <td />
                <td>550</td>
                <td>550</td>
                <td />
                <td>1100</td>
              </tr>
              <tr>
                <td>T51</td>
                <td>李文樂</td>
                <td>990</td>
                <td />
                <td />
                <td />
                <td>990</td>
              </tr>
              <tr>
                <td>53</td>
                <td>鄧樹榮</td>
                <td />
                <td />
                <td>975</td>
                <td />
                <td>975</td>
              </tr>
              <tr>
                <td>54</td>
                <td>宋有祿</td>
                <td />
                <td>885</td>
                <td />
                <td />
                <td>885</td>
              </tr>
              <tr>
                <td>55</td>
                <td>馮尚煒</td>
                <td />
                <td />
                <td />
                <td>855</td>
                <td>855</td>
              </tr>
              <tr>
                <td>56</td>
                <td>Alfredo Morales</td>
                <td />
                <td />
                <td />
                <td>750</td>
                <td>750</td>
              </tr>
              <tr>
                <td>57</td>
                <td>鄧澄濱</td>
                <td />
                <td />
                <td>710</td>
                <td />
                <td>710</td>
              </tr>
              <tr>
                <td>58</td>
                <td>鍾兆倫</td>
                <td>680</td>
                <td />
                <td />
                <td />
                <td>680</td>
              </tr>
              <tr>
                <td>59</td>
                <td>吳坤河</td>
                <td />
                <td />
                <td>610</td>
                <td />
                <td>610</td>
              </tr>
              <tr>
                <td>60</td>
                <td>廖炳光</td>
                <td>550</td>
                <td />
                <td />
                <td />
                <td>550</td>
              </tr>
            </tbody>
          </table>}
      <h3>Ladies Division</h3>

      {props.lang === 'en'
        ? <table className="table table-striped">
            <tbody>
              <tr>
                <th width="137" scope="col">POS</th>
                <th width="331" scope="col">PLAYER</th>
                <th width="93" title="30-31 May, 2011, Kau Sai Chau Public Golf Course - North Course" scope="col">
                  LEG 1
                </th>
                <th width="94" title="4-5 July, 2011, Clearwater Bay Golf Club" scope="col">LEG 2</th>
                <th width="94" title="4-5 July, 2011, Clearwater Bay Golf Club" scope="col">LEG 3</th>
                <th width="94" title="4-5 July, 2011, Clearwater Bay Golf Club" scope="col">YINLI</th>
                <th width="94" title="4-5 July, 2011, Clearwater Bay Golf Club" scope="col">TOTAL</th>
              </tr>
              <tr>
                <td width="73">1</td>
                <td width="231">Jannet    Sheng</td>
                <td height="0" width="145">2710</td>
                <td width="184">15850</td>
                <td width="143">7925</td>
                <td width="158">16275</td>
                <td width="158">42760</td>
              </tr>
              <tr>
                <td>2</td>
                <td>Wong Lai</td> <td height="0">10850</td>
                <td />
                <td />
                <td>23775</td>
                <td>34625</td>
              </tr>
              <tr>
                <td>3</td>
                <td>Vicki Ho</td> <td height="0">2200</td>
                <td>10850</td>
                <td>5425</td>
                <td>4100</td>
                <td>22575</td>
              </tr>
              <tr>
                <td>4</td>
                <td>Pony Leung</td> <td height="0">1570</td>
                <td>4140</td>
                <td>3050</td>
                <td>9150</td>
                <td>17910</td>
              </tr>
              <tr>
                <td>5</td>
                <td>Stephanie Ho</td> <td height="0">15850</td>
                <td />
                <td />
                <td />
                <td>15850</td>
              </tr>
              <tr>
                <td>6</td>
                <td>Urvashi Sethi</td> <td height="0">4515</td>
                <td>2510</td>
                <td />
                <td>7395</td>
                <td>14420</td>
              </tr>
              <tr>
                <td>7</td>
                <td>Sandy Tao</td> <td height="0">4515</td>
                <td>6100</td>
                <td>1695</td>
                <td />
                <td>12310</td>
              </tr>
              <tr>
                <td>8</td>
                <td>Annie Lau</td> <td height="0">1800</td>
                <td>4140</td>
                <td>1455</td>
                <td>3390</td>
                <td>10785</td>
              </tr>
              <tr>
                <td>9</td>
                <td>Michelle Sun</td> <td height="0">6100</td>
                <td>4140</td>
                <td />
                <td />
                <td>10240</td>
              </tr>
              <tr>
                <td>10</td>
                <td>Betty Ng</td> <td height="0">3390</td>
                <td>2200</td>
                <td>2050</td>
                <td />
                <td>7640</td>
              </tr>
              <tr>
                <td>11</td>
                <td>Elsa Tang</td> <td height="0">1970</td>
                <td>2910</td>
                <td />
                <td>2710</td>
                <td>7590</td>
              </tr>
              <tr>
                <td>12</td>
                <td>Melody Chan</td> <td height="0">2710</td>
                <td />
                <td>2465</td>
                <td>2200</td>
                <td>7375</td>
              </tr>
              <tr>
                <td>13</td>
                <td>Jacqueline Leung</td> <td height="0" />
                <td />
                <td>1255</td>
                <td>2710</td>
                <td>3965</td>
              </tr>
              <tr>
                <td>14</td>
                <td>Bonnie Ngai</td> <td height="0">1680</td>
                <td />
                <td />
                <td />
                <td>1680</td>
              </tr>
              <tr>
                <td>15</td>
                <td>Debbie Yip</td> <td height="0" />
                <td />
                <td>1100</td>
                <td />
                <td>1100</td>
              </tr>
            </tbody>
          </table>
        : <table className="table table-striped">
            <tbody>
              <tr>
                <th width="104" scope="col">排名</th>
                <th width="365" scope="col">球手</th>
                <th width="92" title="2011年5月30-31日, 滘西洲公眾高爾夫球場 - 北場" scope="col">第1站</th>
                <th width="94" title="2011年7月4-5日, 滘西洲公眾高爾夫球場 - 北場" scope="col">第2站</th>
                <th width="94" title="2011年7月4-5日, 滘西洲公眾高爾夫球場 - 北場" scope="col">第3站</th>
                <th width="94" title="2011年7月4-5日, 滘西洲公眾高爾夫球場 - 北場" scope="col">銀利</th>
                <th width="94" title="2011年7月4-5日, 滘西洲公眾高爾夫球場 - 北場" scope="col">總分數</th>
              </tr>
              <tr>
                <td width="73">1</td>
                <td height="0" width="190">盛秋燕</td>
                <td width="145">2710</td>
                <td width="184">15850</td>
                <td width="143">7925</td>
                <td width="158">16275</td>
                <td width="158">42760</td>
              </tr>
              <tr>
                <td>2</td>
                <td height="0">王麗</td>
                <td>10850</td>
                <td />
                <td />
                <td>23775</td>
                <td>34625</td>
              </tr>
              <tr>
                <td>3</td>
                <td height="0">何美廸</td>
                <td>2200</td>
                <td>10850</td>
                <td>5425</td>
                <td>4100</td>
                <td>22575</td>
              </tr>
              <tr>
                <td>4</td>
                <td height="0">梁寶兒</td>
                <td>1570</td>
                <td>4140</td>
                <td>3050</td>
                <td>9150</td>
                <td>17910</td>
              </tr>
              <tr>
                <td>5</td>
                <td height="0">何雁詩</td>
                <td>15850</td>
                <td />
                <td />
                <td />
                <td>15850</td>
              </tr>
              <tr>
                <td>6</td>
                <td height="0">Urvashi Sethi</td>
                <td>4515</td>
                <td>2510</td>
                <td />
                <td>7395</td>
                <td>14420</td>
              </tr>
              <tr>
                <td>7</td>
                <td height="0">涂玉華</td>
                <td>4515</td>
                <td>6100</td>
                <td>1695</td>
                <td />
                <td>12310</td>
              </tr>
              <tr>
                <td>8</td>
                <td height="0">劉朗琪</td>
                <td>1800</td>
                <td>4140</td>
                <td>1455</td>
                <td>3390</td>
                <td>10785</td>
              </tr>
              <tr>
                <td>9</td>
                <td height="0">辛曉渢</td>
                <td>6100</td>
                <td>4140</td>
                <td />
                <td />
                <td>10240</td>
              </tr>
              <tr>
                <td>10</td>
                <td height="0">吳容歡</td>
                <td>3390</td>
                <td>2200</td>
                <td>2050</td>
                <td />
                <td>7640</td>
              </tr>
              <tr>
                <td>11</td>
                <td height="0">鄧睎文</td>
                <td>1970</td>
                <td>2910</td>
                <td />
                <td>2710</td>
                <td>7590</td>
              </tr>
              <tr>
                <td>12</td>
                <td height="0">陳韻如</td>
                <td>2710</td>
                <td />
                <td>2465</td>
                <td>2200</td>
                <td>7375</td>
              </tr>
              <tr>
                <td>13</td>
                <td height="0">粱嘉韻</td>
                <td />
                <td />
                <td>1255</td>
                <td>2710</td>
                <td>3965</td>
              </tr>
              <tr>
                <td>14</td>
                <td height="0">倪瑞蓮</td>
                <td>1680</td>
                <td />
                <td />
                <td />
                <td>1680</td>
              </tr>
              <tr>
                <td>15</td>
                <td height="0">葉玉玲</td>
                <td />
                <td />
                <td>1100</td>
                <td />
                <td>1100</td>
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
                <th title="19-20 April, 2010, KSC Public Golf Course - North Course" scope="col">LEG 1</th>
                <th title="17-18 May, 2010, Long Island Golf &amp; Country Club" scope="col">LEG 2 </th>
                <th scope="col">LEG3</th>
                <th scope="col">LEG4</th>
                <th scope="col">LEG5</th>
                <th scope="col">LEG6</th>
                <th scope="col">YINLI</th>
                <th scope="col">LEG7</th>
                <th scope="col">TOTAL</th>
              </tr>
              <tr>
                <td height="0" width="0">1</td>
                <td width="0">Tang Man Kee</td>
                <td height="0" width="0">15850</td>
                <td width="0">15850</td>
                <td width="0">15850</td>
                <td width="0" />
                <td width="0">7925</td>
                <td width="0">15850</td>
                <td width="0">16275</td>
                <td width="0">15850</td>
                <td width="0">103450</td>
              </tr>
              <tr>
                <td height="0">2</td>
                <td>Sung Sing</td> <td height="0">10850</td>
                <td>3745</td>
                <td>10850</td>
                <td>8475</td>
                <td />
                <td>4515</td>
                <td>6772.5</td>
                <td>6100</td>
                <td>51307.5</td>
              </tr>
              <tr>
                <td height="0">3</td>
                <td>Tang Shu Wing</td> <td height="0">3390</td>
                <td>10850</td>
                <td>4930</td>
                <td>4930</td>
                <td />
                <td>2200</td>
                <td>5085</td>
                <td>10850</td>
                <td>42235</td>
              </tr>
              <tr>
                <td height="0">4</td>
                <td>Alex Tang</td> <td height="0">2200</td>
                <td>6100</td>
                <td>6100</td>
                <td>15850</td>
                <td>2257.5</td>
                <td>3390</td>
                <td>1535</td>
                <td>3745</td>
                <td>41177.5</td>
              </tr>
              <tr>
                <td height="0">5</td>
                <td>Lau Kwong Hon</td> <td height="0">2710</td>
                <td />
                <td />
                <td />
                <td />
                <td>6100</td>
                <td>23775</td>
                <td>2540</td>
                <td>35125</td>
              </tr>
              <tr>
                <td height="0">6</td>
                <td>Stanley Leung</td> <td height="0">6100</td>
                <td>4930</td>
                <td>4100</td>
                <td>4100</td>
                <td>2257.5</td>
                <td>4515</td>
                <td>1680</td>
                <td>1570</td>
                <td>29252.5</td>
              </tr>
              <tr>
                <td height="0">7</td>
                <td>Danny Kan</td> <td height="0" />
                <td />
                <td>3150</td>
                <td>8475</td>
                <td>900</td>
                <td>2710</td>
                <td>1970</td>
                <td>3745</td>
                <td>20950</td>
              </tr>
              <tr>
                <td height="0">8</td>
                <td>Billy Tam</td> <td height="0">1503.3</td>
                <td>2910</td>
                <td>1570</td>
                <td>2510</td>
                <td>1455</td>
                <td>1680</td>
                <td>6772.5</td>
                <td>2540</td>
                <td>20940.8</td>
              </tr>
              <tr>
                <td height="0">9</td>
                <td>Daniel Liu</td> <td height="0">1680</td>
                <td>2200</td>
                <td>2510</td>
                <td>2910</td>
                <td>1255</td>
                <td>1570</td>
                <td>1800</td>
                <td>4930</td>
                <td>18855</td>
              </tr>
              <tr>
                <td height="0">10</td>
                <td>William Fung</td> <td height="0" />
                <td>2510</td>
                <td>3150</td>
                <td />
                <td />
                <td>1800</td>
                <td>9150</td>
                <td>1970</td>
                <td>18580</td>
              </tr>
              <tr>
                <td height="0">11</td>
                <td>Michael Kan</td> <td height="0">4515</td>
                <td />
                <td />
                <td />
                <td>3050</td>
                <td>1970</td>
                <td>4365</td>
                <td>2540</td>
                <td>16440</td>
              </tr>
              <tr>
                <td height="0">12</td>
                <td>Siu Kam Piu</td> <td height="0">2710</td>
                <td />
                <td>1970</td>
                <td>3390</td>
                <td>1695</td>
                <td>2710</td>
                <td>1410</td>
                <td>1740</td>
                <td>15625</td>
              </tr>
              <tr>
                <td height="0">13</td>
                <td>Alain Liu</td> <td height="0">1320</td>
                <td>1800</td>
                <td>1470</td>
                <td>1970</td>
                <td>1100</td>
                <td>1380</td>
                <td>1320</td>
                <td>1380</td>
                <td>11740</td>
              </tr>
              <tr>
                <td height="0">14</td>
                <td>Man Hung Lap</td> <td height="0" />
                <td />
                <td />
                <td />
                <td />
                <td>10850</td>
                <td />
                <td />
                <td>10850</td>
              </tr>
              <tr>
                <td height="0">15</td>
                <td>Tong Chun Po</td> <td height="0">4515</td>
                <td>3745</td>
                <td>1740</td>
                <td />
                <td />
                <td />
                <td />
                <td />
                <td>10000</td>
              </tr>
              <tr>
                <td height="0">16</td>
                <td>Tommy Kan</td> <td height="0">1970</td>
                <td />
                <td>1740</td>
                <td>2200</td>
                <td />
                <td />
                <td>2200</td>
                <td>1440</td>
                <td>9550</td>
              </tr>
              <tr>
                <td height="0">17</td>
                <td>Jason Kwok</td> <td height="0" />
                <td />
                <td />
                <td />
                <td>5425</td>
                <td />
                <td />
                <td />
                <td>5425</td>
              </tr>
              <tr>
                <td height="0">18</td>
                <td>James Robbins</td> <td height="0">1380</td>
                <td />
                <td>1470</td>
                <td />
                <td>840</td>
                <td />
                <td>1210</td>
                <td />
                <td>4900</td>
              </tr>
              <tr>
                <td height="0">19</td>
                <td>Mok Yuk Lun</td> <td height="0" />
                <td />
                <td />
                <td />
                <td />
                <td />
                <td>3765</td>
                <td />
                <td>3765</td>
              </tr>
              <tr>
                <td height="0">20</td>
                <td>Tony Lee</td> <td height="0" />
                <td />
                <td />
                <td />
                <td>985</td>
                <td>1500</td>
                <td>1260</td>
                <td />
                <td>3745</td>
              </tr>
              <tr>
                <td height="0">21</td>
                <td>Alfredo Morales</td> <td height="0" />
                <td />
                <td>2200</td>
                <td />
                <td />
                <td />
                <td>1535</td>
                <td />
                <td>3735</td>
              </tr>
              <tr>
                <td height="0">22</td>
                <td>Willie Chan</td> <td height="0">1503.3</td>
                <td>1970</td>
                <td />
                <td />
                <td />
                <td />
                <td />
                <td />
                <td>3473.3</td>
              </tr>
              <tr>
                <td height="0">23</td>
                <td>Richard Kan</td> <td height="0">1800</td>
                <td />
                <td />
                <td />
                <td />
                <td />
                <td>1410</td>
                <td />
                <td>3210</td>
              </tr>
              <tr>
                <td height="0">24</td>
                <td>Chiang Kwok Leung</td> <td height="0" />
                <td />
                <td />
                <td />
                <td />
                <td>1440</td>
                <td />
                <td>1740</td>
                <td>3180</td>
              </tr>
              <tr>
                <td height="0">25</td>
                <td>Lai Wai Man</td> <td height="0">1503.3</td>
                <td />
                <td />
                <td />
                <td>785</td>
                <td />
                <td />
                <td />
                <td>2288.3</td>
              </tr>
              <tr>
                <td height="0">26</td>
                <td>Peter Tang</td> <td height="0" />
                <td />
                <td />
                <td />
                <td />
                <td />
                <td />
                <td>1500</td>
                <td>1500</td>
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
                <th scope="col">第3站</th>
                <th scope="col">第4站</th>
                <th scope="col">第5站</th>
                <th scope="col">第6站</th>
                <th scope="col">銀利</th>
                <th scope="col">第7站</th>
                <th scope="col">總分數</th>
              </tr>
              <tr>
                <td width="0">1</td>
                <td height="0" width="0">鄧敏祺</td>
                <td width="0">15850</td>
                <td width="0">15850</td>
                <td width="0">15850</td>
                <td width="0" />
                <td width="0">7925</td>
                <td width="0">15850</td>
                <td width="0">16275</td>
                <td width="0">15850</td>
                <td width="0">103450</td>
              </tr>
              <tr>
                <td>2</td> <td height="0">宋有祿</td>
                <td>10850</td>
                <td>3745</td>
                <td>10850</td>
                <td>8475</td>
                <td />
                <td>4515</td>
                <td>6772.5</td>
                <td>6100</td>
                <td>51307.5</td>
              </tr>
              <tr>
                <td>3</td> <td height="0">鄧樹榮</td>
                <td>3390</td>
                <td>10850</td>
                <td>4930</td>
                <td>4930</td>
                <td />
                <td>2200</td>
                <td>5085</td>
                <td>10850</td>
                <td>42235</td>
              </tr>
              <tr>
                <td>4</td> <td height="0">鄧澄濱</td>
                <td>2200</td>
                <td>6100</td>
                <td>6100</td>
                <td>15850</td>
                <td>2257.5</td>
                <td>3390</td>
                <td>1535</td>
                <td>3745</td>
                <td>41177.5</td>
              </tr>
              <tr>
                <td>5</td> <td height="0">劉光漢</td>
                <td>2710</td>
                <td />
                <td />
                <td />
                <td />
                <td>6100</td>
                <td>23775</td>
                <td>2540</td>
                <td>35125</td>
              </tr>
              <tr>
                <td>6</td> <td height="0">梁紹才</td>
                <td>6100</td>
                <td>4930</td>
                <td>4100</td>
                <td>4100</td>
                <td>2257.5</td>
                <td>4515</td>
                <td>1680</td>
                <td>1570</td>
                <td>29252.5</td>
              </tr>
              <tr>
                <td>7</td> <td height="0">簡栢堅</td>
                <td />
                <td />
                <td>3150</td>
                <td>8475</td>
                <td>900</td>
                <td>2710</td>
                <td>1970</td>
                <td>3745</td>
                <td>20950</td>
              </tr>
              <tr>
                <td>8</td> <td height="0">譚文義</td>
                <td>1503.3</td>
                <td>2910</td>
                <td>1570</td>
                <td>2510</td>
                <td>1455</td>
                <td>1680</td>
                <td>6772.5</td>
                <td>2540</td>
                <td>20940.8</td>
              </tr>
              <tr>
                <td>9</td> <td height="0">廖炳光</td>
                <td>1680</td>
                <td>2200</td>
                <td>2510</td>
                <td>2910</td>
                <td>1255</td>
                <td>1570</td>
                <td>1800</td>
                <td>4930</td>
                <td>18855</td>
              </tr>
              <tr>
                <td>10</td> <td height="0">馮偉權</td>
                <td />
                <td>2510</td>
                <td>3150</td>
                <td />
                <td />
                <td>1800</td>
                <td>9150</td>
                <td>1970</td>
                <td>18580</td>
              </tr>
              <tr>
                <td>11</td> <td height="0">簡敬有</td>
                <td>4515</td>
                <td />
                <td />
                <td />
                <td>3050</td>
                <td>1970</td>
                <td>4365</td>
                <td>2540</td>
                <td>16440</td>
              </tr>
              <tr>
                <td>12</td> <td height="0">蕭金標</td>
                <td>2710</td>
                <td />
                <td>1970</td>
                <td>3390</td>
                <td>1695</td>
                <td>2710</td>
                <td>1410</td>
                <td>1740</td>
                <td>15625</td>
              </tr>
              <tr>
                <td>13</td> <td height="0">廖煒賢</td>
                <td>1320</td>
                <td>1800</td>
                <td>1470</td>
                <td>1970</td>
                <td>1100</td>
                <td>1380</td>
                <td>1320</td>
                <td>1380</td>
                <td>11740</td>
              </tr>
              <tr>
                <td>14</td> <td height="0">萬雄立</td>
                <td />
                <td />
                <td />
                <td />
                <td />
                <td>10850</td>
                <td />
                <td />
                <td>10850</td>
              </tr>
              <tr>
                <td>15</td> <td height="0">唐進寶</td>
                <td>4515</td>
                <td>3745</td>
                <td>1740</td>
                <td />
                <td />
                <td />
                <td />
                <td />
                <td>10000</td>
              </tr>
              <tr>
                <td>16</td> <td height="0">簡鏡棠</td>
                <td>1970</td>
                <td />
                <td>1740</td>
                <td>2200</td>
                <td />
                <td />
                <td>2200</td>
                <td>1440</td>
                <td>9550</td>
              </tr>
              <tr>
                <td>17</td> <td height="0">郭永昌</td>
                <td />
                <td />
                <td />
                <td />
                <td>5425</td>
                <td />
                <td />
                <td />
                <td>5425</td>
              </tr>
              <tr>
                <td>18</td> <td height="0">James Robbins</td>
                <td>1380</td>
                <td />
                <td>1470</td>
                <td />
                <td>840</td>
                <td />
                <td>1210</td>
                <td />
                <td>4900</td>
              </tr>
              <tr>
                <td>19</td> <td height="0">莫旭麟</td>
                <td />
                <td />
                <td />
                <td />
                <td />
                <td />
                <td>3765</td>
                <td />
                <td>3765</td>
              </tr>
              <tr>
                <td>20</td> <td height="0">李應東</td>
                <td />
                <td />
                <td />
                <td />
                <td>985</td>
                <td>1500</td>
                <td>1260</td>
                <td />
                <td>3745</td>
              </tr>
              <tr>
                <td>21</td> <td height="0">Alfredo Morales</td>
                <td />
                <td />
                <td>2200</td>
                <td />
                <td />
                <td />
                <td>1535</td>
                <td />
                <td>3735</td>
              </tr>
              <tr>
                <td>22</td> <td height="0">陳子強</td>
                <td>1503.3</td>
                <td>1970</td>
                <td />
                <td />
                <td />
                <td />
                <td />
                <td />
                <td>3473.3</td>
              </tr>
              <tr>
                <td>23</td> <td height="0">簡志強</td>
                <td>1800</td>
                <td />
                <td />
                <td />
                <td />
                <td />
                <td>1410</td>
                <td />
                <td>3210</td>
              </tr>
              <tr>
                <td>24</td> <td height="0">蔣國良</td>
                <td />
                <td />
                <td />
                <td />
                <td />
                <td>1440</td>
                <td />
                <td>1740</td>
                <td>3180</td>
              </tr>
              <tr>
                <td>25</td> <td height="0">黎偉民</td>
                <td>1503.3</td>
                <td />
                <td />
                <td />
                <td>785</td>
                <td />
                <td />
                <td />
                <td>2288.3</td>
              </tr>
              <tr>
                <td>26</td> <td height="0">鄧樹泉</td>
                <td />
                <td />
                <td />
                <td />
                <td />
                <td />
                <td />
                <td>1500</td>
                <td>1500</td>
              </tr>
            </tbody>
          </table>}
    </div>
  );
}
export default merit;
