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
                  width="90"
                  height="20"
                  title="28-31 March, 2011, Clearwater Bay Golf Club, Hong Kong Golf Club, Kau Sai Chau Public Golf Course"
                  scope="col">
                  Championship
                </th>
                <th height="20" title="30-31 May, 2011, Kau Sai Chau Public Golf Course - North Course" scope="col">
                  LEG 1
                </th>
                <th height="20" title="27-28, June, 2011, Clearwater Bay Golf Club" scope="col">LEG 2</th>
                <th height="20" title="15-16 August, 2011, Discovery Bay Golf Club" scope="col">LEG 3</th>
                <th width="51" height="20" title="Oct, 2011, Yinli Foreign Investors Golf Club" scope="col">Classic</th>
                <th width="61" height="20" scope="col">TOTAL</th>
              </tr>
              <tr>
                <td height="13" width="63">1</td>
                <td width="223">Jimmy Ko</td>
                <td height="13" width="90">9150</td>
                <td width="54">15850</td>
                <td width="54">502.5</td>
                <td width="51">4100</td>
                <td width="51">5085</td>
                <td>34687.5</td>
              </tr>
              <tr>
                <td height="13">2</td>
                <td>Tim Tang</td>
                <td height="13">4128.75</td>
                <td>8475</td>
                <td>3050</td>
                <td>10850</td>
                <td>6772.5</td>
                <td>33276.25</td>
              </tr>
              <tr>
                <td height="13">3</td>
                <td>Dominique Boulet</td>
                <td height="13">6772.5</td>
                <td>2200</td>
                <td>6675</td>
                <td>15850</td>
                <td>-</td>
                <td>31497.5</td>
              </tr>
              <tr>
                <td height="13">4</td>
                <td>Wong Woon Man</td>
                <td height="13">4128.75</td>
                <td>1514</td>
                <td>841.67</td>
                <td>4930</td>
                <td>16400</td>
                <td>27814.42</td>
              </tr>
              <tr>
                <td height="13">5</td>
                <td>James Stewart</td>
                <td height="13">2302.5</td>
                <td>1263.33</td>
                <td>-</td>
                <td>6100</td>
                <td>16400</td>
                <td>26065.83</td>
              </tr>
              <tr>
                <td height="13">6</td>
                <td>Jean Van De Velde</td>
                <td height="13">23775</td>
                <td>-</td>
                <td>-</td>
                <td>-</td>
                <td>-</td>
                <td>23775</td>
              </tr>
              <tr>
                <td height="13">7</td>
                <td>Derek Fung</td>
                <td height="13">16275</td>
                <td>-</td>
                <td>6675</td>
                <td>-</td>
                <td>-</td>
                <td>22950</td>
              </tr>
              <tr>
                <td height="13">8</td>
                <td>David Freeman</td>
                <td height="13">-</td>
                <td>1514</td>
                <td>385</td>
                <td>-</td>
                <td>16400</td>
                <td>18299</td>
              </tr>
              <tr>
                <td height="13">9</td>
                <td>Tang Shing Chi</td>
                <td height="13">6772.5</td>
                <td>2510</td>
                <td>350</td>
                <td>-</td>
                <td>6772.5</td>
                <td>16405</td>
              </tr>
              <tr>
                <td height="13">10</td>
                <td>Grant Gibson</td>
                <td height="13">2827.5</td>
                <td>8475</td>
                <td>646.25</td>
                <td>-</td>
                <td>-</td>
                <td>11948.75</td>
              </tr>
              <tr>
                <td height="13">11</td>
                <td>Jovick Lee</td>
                <td height="13">-</td>
                <td>3390</td>
                <td>562.5</td>
                <td>2936.6</td>
                <td>2827.5</td>
                <td>9716.6</td>
              </tr>
              <tr>
                <td height="13">12</td>
                <td>Jang Chel Hoo</td>
                <td height="13">2827.5</td>
                <td>-</td>
                <td>-</td>
                <td>2936.6</td>
                <td>3765</td>
                <td>9529.1</td>
              </tr>
              <tr>
                <td height="13">13</td>
                <td>Chau Pui</td>
                <td height="13">4128.75</td>
                <td>630</td>
                <td>841.67</td>
                <td>2936.6</td>
                <td>-</td>
                <td>8537.02</td>
              </tr>
              <tr>
                <td height="13">14</td>
                <td>Andrew Good</td>
                <td height="13">1665</td>
                <td>1170</td>
                <td>1198.75</td>
                <td>1503.3</td>
                <td>2437.5</td>
                <td>7974.55</td>
              </tr>
              <tr>
                <td height="13">15</td>
                <td>Paul Riley</td>
                <td height="13">1185</td>
                <td>4515</td>
                <td>2070</td>
                <td>-</td>
                <td>-</td>
                <td>7770</td>
              </tr>
              <tr>
                <td height="13">16</td>
                <td>Liu Kai Mung</td>
                <td height="13">2160</td>
                <td>1885</td>
                <td>2070</td>
                <td>1140</td>
                <td>-</td>
                <td>7255</td>
              </tr>
              <tr>
                <td height="13">17</td>
                <td>William Fung</td>
                <td height="13">2302.5</td>
                <td>2910</td>
                <td>735</td>
                <td>1210</td>
                <td>-</td>
                <td>7157.5</td>
              </tr>
              <tr>
                <td height="13">18</td>
                <td>Cheng Ka Yiu</td>
                <td height="13">1372.5</td>
                <td>750</td>
                <td>562.5</td>
                <td>1290</td>
                <td>2827.5</td>
                <td>6802.5</td>
              </tr>
              <tr>
                <td height="13">19</td>
                <td>Jason Kwok</td>
                <td height="13">1935</td>
                <td>1263.33</td>
                <td>562.5</td>
                <td>1503.3</td>
                <td>1440</td>
                <td>6704.13</td>
              </tr>
              <tr>
                <td height="13">20</td>
                <td>Ernie Lee</td>
                <td height="13">1530</td>
                <td>670</td>
                <td>646.25</td>
                <td>-</td>
                <td>3300</td>
                <td>6146.25</td>
              </tr>
              <tr>
                <td height="13">21</td>
                <td>Alexander Cheng</td>
                <td height="13">1440</td>
                <td>1514</td>
                <td>442.5</td>
                <td>1290</td>
                <td>1210</td>
                <td>5896.5</td>
              </tr>
              <tr>
                <td height="13">22</td>
                <td>Eric Ma</td>
                <td height="13">4128.75</td>
                <td>990</td>
                <td>735</td>
                <td>-</td>
                <td>-</td>
                <td>5853.75</td>
              </tr>
              <tr>
                <td height="13">23</td>
                <td>Lokky Lee</td>
                <td height="13">1935</td>
                <td>1263.33</td>
                <td>646.25</td>
                <td>1912.5</td>
                <td>-</td>
                <td>5757.08</td>
              </tr>
              <tr>
                <td height="13">24</td>
                <td>Fung Wai Kit</td>
                <td height="13">1665</td>
                <td>1140</td>
                <td>275</td>
                <td>1380</td>
                <td>1155</td>
                <td>5615</td>
              </tr>
              <tr>
                <td height="13">25</td>
                <td>Man Hung Lap</td>
                <td height="13">975</td>
                <td>813.33</td>
                <td>442.5</td>
                <td>1912.5</td>
                <td>1320</td>
                <td>5463.33</td>
              </tr>
              <tr>
                <td height="13">26</td>
                <td>Brad Schadewitz</td>
                <td height="13">1785</td>
                <td>-</td>
                <td>1198.75</td>
                <td>-</td>
                <td>2437.5</td>
                <td>5421.25</td>
              </tr>
              <tr>
                <td height="13">27</td>
                <td>Sung Hang Man</td>
                <td height="13">2070</td>
                <td>1885</td>
                <td>385</td>
                <td>800</td>
                <td>-</td>
                <td>5140</td>
              </tr>
              <tr>
                <td height="13">28</td>
                <td>Tang Man Kee</td>
                <td height="13">-</td>
                <td>1080</td>
                <td>2070</td>
                <td>1912.5</td>
                <td>-</td>
                <td>5062.5</td>
              </tr>
              <tr>
                <td height="13">29</td>
                <td>Lee Ying Tung</td>
                <td height="13">1665</td>
                <td>1080</td>
                <td>562.5</td>
                <td>680</td>
                <td>1020</td>
                <td>5007.5</td>
              </tr>
              <tr>
                <td height="13">30</td>
                <td>Danny Kan</td>
                <td height="13">1530</td>
                <td>900</td>
                <td>290</td>
                <td>1080</td>
                <td>1080</td>
                <td>4880</td>
              </tr>
              <tr>
                <td height="13">31</td>
                <td>Vaughan Mason</td>
                <td height="13">-</td>
                <td>4515</td>
                <td>275</td>
                <td>-</td>
                <td>-</td>
                <td>4790</td>
              </tr>
              <tr>
                <td height="13">32</td>
                <td>Mark Mossip</td>
                <td height="13">1530</td>
                <td>1514</td>
                <td>442.5</td>
                <td>1005</td>
                <td>-</td>
                <td>4491.5</td>
              </tr>
              <tr>
                <td height="13">33</td>
                <td>Liu Lok Tin</td>
                <td height="13">-</td>
                <td>-</td>
                <td>-</td>
                <td>-</td>
                <td>4365</td>
                <td>4365</td>
              </tr>
              <tr>
                <td height="13">34</td>
                <td>Lee Kwok Yan</td>
                <td height="13">825</td>
                <td>700</td>
                <td>442.5</td>
                <td>870</td>
                <td>1320</td>
                <td>4157.5</td>
              </tr>
              <tr>
                <td height="13">&nbsp; </td>
                <td>&nbsp;</td>
                <td height="13">&nbsp;</td>
                <td>&nbsp;</td>
                <td>&nbsp;</td>
                <td>&nbsp;</td>
                <td>&nbsp;</td>
                <td>&nbsp;</td>
              </tr>
              <tr>
                <td height="13">36</td>
                <td>Lai Wai Kin</td>
                <td height="13">-</td>
                <td>-</td>
                <td>-</td>
                <td>1503.3</td>
                <td>2250</td>
                <td>3753.3</td>
              </tr>
              <tr>
                <td height="13">37</td>
                <td>Stanley Leung</td>
                <td height="13">1215</td>
                <td>550</td>
                <td>1198.75</td>
                <td>760</td>
                <td>-</td>
                <td>3723.75</td>
              </tr>
              <tr>
                <td height="13">38</td>
                <td>Reene Lam</td>
                <td height="13">1140</td>
                <td>700</td>
                <td>646.25</td>
                <td>-</td>
                <td>1155</td>
                <td>3641.25</td>
              </tr>
              <tr>
                <td height="13">39</td>
                <td>Taylor Chiang</td>
                <td height="13">825</td>
                <td>560</td>
                <td>275</td>
                <td>800</td>
                <td>990</td>
                <td>3450</td>
              </tr>
              <tr>
                <td height="13">40</td>
                <td>Billy Ma</td>
                <td height="13">825</td>
                <td>1080</td>
                <td>502.5</td>
                <td>930</td>
                <td>-</td>
                <td>3337.5</td>
              </tr>
              <tr>
                <td height="13">41</td>
                <td>Kevin Hind</td>
                <td height="13">1785</td>
                <td>1514</td>
                <td>-</td>
                <td>-</td>
                <td>-</td>
                <td>3299</td>
              </tr>
              <tr>
                <td height="13">42</td>
                <td>Li Chun Man</td>
                <td height="13">1035</td>
                <td>990</td>
                <td>275</td>
                <td>960</td>
                <td>-</td>
                <td>3260</td>
              </tr>
              <tr>
                <td height="13">43</td>
                <td>Siu Kam Piu</td>
                <td height="13">825</td>
                <td>813.33</td>
                <td>275</td>
                <td>1140</td>
                <td>-</td>
                <td>3053.33</td>
              </tr>
              <tr>
                <td height="13">44</td>
                <td>Cheung Kwai Hong</td>
                <td height="13">915</td>
                <td>750</td>
                <td>385</td>
                <td>870</td>
                <td>-</td>
                <td>2920</td>
              </tr>
              <tr>
                <td height="13">45</td>
                <td>Hui Ho Man</td>
                <td height="13">1035</td>
                <td>990</td>
                <td>-</td>
                <td>870</td>
                <td>-</td>
                <td>2895</td>
              </tr>
              <tr>
                <td height="13">46</td>
                <td>Benny Yeung</td>
                <td height="13">885</td>
                <td>550</td>
                <td>320</td>
                <td>1005</td>
                <td>-</td>
                <td>2760</td>
              </tr>
              <tr>
                <td height="13">47</td>
                <td>Wong Hoi Kin</td>
                <td height="13">-</td>
                <td>630</td>
                <td>841.67</td>
                <td>1050</td>
                <td>-</td>
                <td>2521.67</td>
              </tr>
              <tr>
                <td height="13">48</td>
                <td>Wilson Choy</td>
                <td height="13">2520</td>
                <td>-</td>
                <td>-</td>
                <td>-</td>
                <td>-</td>
                <td>2520</td>
              </tr>
              <tr>
                <td height="13">49</td>
                <td>Liu Ping Kwong</td>
                <td height="13">1282.5</td>
                <td>813.33</td>
                <td>350</td>
                <td>-</td>
                <td>-</td>
                <td>2445.83</td>
              </tr>
              <tr>
                <td height="13">50</td>
                <td>Stephen Hong</td>
                <td height="13">825</td>
                <td>900</td>
                <td>-</td>
                <td>650</td>
                <td>-</td>
                <td>2375</td>
              </tr>
              <tr>
                <td height="13">51</td>
                <td>Geoffrey So</td>
                <td height="13">825</td>
                <td>550</td>
                <td>290</td>
                <td>680</td>
                <td>-</td>
                <td>2345</td>
              </tr>
              <tr>
                <td height="13">52</td>
                <td>Chris Marrs</td>
                <td height="13">-</td>
                <td>590</td>
                <td>385</td>
                <td>-</td>
                <td>1320</td>
                <td>2295</td>
              </tr>
              <tr>
                <td height="13">53</td>
                <td>Michael Long</td>
                <td height="13">1095</td>
                <td>-</td>
                <td>-</td>
                <td>1140</td>
                <td>-</td>
                <td>2235</td>
              </tr>
              <tr>
                <td height="13">54</td>
                <td>Alex Tang</td>
                <td height="13">-</td>
                <td>-</td>
                <td>320</td>
                <td>1912.5</td>
                <td>-</td>
                <td>2232.5</td>
              </tr>
              <tr>
                <td height="13">55</td>
                <td>Sammy Ng</td>
                <td height="13">1140</td>
                <td>550</td>
                <td>502.5</td>
                <td>-</td>
                <td>-</td>
                <td>2192.5</td>
              </tr>
              <tr>
                <td height="13">56</td>
                <td>Cheung Kin Ping</td>
                <td height="13">1282.5</td>
                <td>630</td>
                <td>-</td>
                <td>-</td>
                <td>-</td>
                <td>1912.5</td>
              </tr>
              <tr>
                <td height="28">57</td>
                <td>Joeson Chung&nbsp;</td>
                <td height="13">-</td>
                <td>-</td>
                <td>-</td>
                <td>720</td>
                <td>1050</td>
                <td>1770</td>
              </tr>
              <tr>
                <td height="13">58</td>
                <td>Liu Wai Yin</td>
                <td height="13">825</td>
                <td>-</td>
                <td>275</td>
                <td>630</td>
                <td>-</td>
                <td>1730</td>
              </tr>
              <tr>
                <td height="13">59</td>
                <td>Eric Shum</td>
                <td height="13">1035</td>
                <td>560</td>
                <td>-</td>
                <td>-</td>
                <td>-</td>
                <td>1595</td>
              </tr>
              <tr>
                <td height="13">60</td>
                <td>Tong Chun Po</td>
                <td height="13">945</td>
                <td>550</td>
                <td>-</td>
                <td>-</td>
                <td>-</td>
                <td>1495</td>
              </tr>
              <tr>
                <td height="13">61</td>
                <td>Michael Kan</td>
                <td height="13">1372.5</td>
                <td>-</td>
                <td>-</td>
                <td>-</td>
                <td>-</td>
                <td>1372.5</td>
              </tr>
              <tr>
                <td height="13">62</td>
                <td>Ducky Tang</td>
                <td height="13">-</td>
                <td>-</td>
                <td>1198.75</td>
                <td>-</td>
                <td>-</td>
                <td>1198.75</td>
              </tr>
              <tr>
                <td height="13">63</td>
                <td>James Robbins</td>
                <td height="13">-</td>
                <td>550</td>
                <td>-</td>
                <td>610</td>
                <td>-</td>
                <td>1160</td>
              </tr>
              <tr>
                <td height="13">64</td>
                <td>Richard Hood</td>
                <td height="13">-</td>
                <td>550</td>
                <td>320</td>
                <td>-</td>
                <td>-</td>
                <td>870</td>
              </tr>
              <tr>
                <td height="13">65</td>
                <td>Wong Ching Kwan</td>
                <td height="13">-</td>
                <td>-</td>
                <td>-</td>
                <td>760</td>
                <td>-</td>
                <td>760</td>
              </tr>
              <tr>
                <td height="13">66</td>
                <td>Lai Wai Man</td>
                <td height="13">-</td>
                <td>750</td>
                <td>-</td>
                <td>-</td>
                <td>-</td>
                <td>750</td>
              </tr>
              <tr>
                <td height="13">67</td>
                <td>Sung Sing</td>
                <td height="13">-</td>
                <td>-</td>
                <td>502.5</td>
                <td>-</td>
                <td>-</td>
                <td>502.5</td>
              </tr>
              <tr>
                <td height="13">68</td>
                <td>Tang Shu Wing</td>
                <td height="13">-</td>
                <td>-</td>
                <td>385</td>
                <td>-</td>
                <td>-</td>
                <td>385</td>
              </tr>
              <tr>
                <td height="13">69</td>
                <td>Kingsley Long</td>
                <td height="13">-</td>
                <td>-</td>
                <td>275</td>
                <td>-</td>
                <td>-</td>
                <td>275</td>
              </tr>
            </tbody>
          </table>
        : <table className="table table-striped">
            <tbody>
              <tr>
                <th width="25" height="20" scope="col">排名</th>
                <th height="20" scope="col">球手</th>
                <th width="62" height="20" title="2011年3月28-31日, 清水灣高爾夫球會, 香港高爾夫球會, 滘西洲公眾高爾夫球場" scope="col">錦標賽</th>
                <th width="59" height="20" title="2011年5月30-31日, 滘西洲公眾高爾夫球場 - 北場" scope="col">第1站</th>
                <th width="56" height="20" title="2011年6月27-28日,清水灣高爾夫球會" scope="col">第2站</th>
                <th width="53" height="20" title="2011年8月15-16日, 愉景灣高爾夫球會" scope="col">第3站</th>
                <th width="53" height="20" title="2011年10月, 銀利高爾夫球會" scope="col">經典賽</th>
                <th width="63" height="20" scope="col">積分</th>
              </tr>
              <tr>
                <td width="25">1</td>
                <td width="276">高銘澤</td>
                <td height="13" width="62">9150</td>
                <td width="59">15850</td>
                <td width="56">502.5</td>
                <td width="53">4100</td>
                <td width="53">5085</td>
                <td width="63">34687.5</td>
              </tr>
              <tr>
                <td>2</td>
                <td>鄧子鏗</td>
                <td height="13">4128.75</td>
                <td>8475</td>
                <td>3050</td>
                <td>10850</td>
                <td>6772.5</td>
                <td>33276.25</td>
              </tr>
              <tr>
                <td>3</td>
                <td>Dominique Boulet</td>
                <td height="13">6772.5</td>
                <td>2200</td>
                <td>6675</td>
                <td>15850</td>
                <td>-</td>
                <td>31497.5</td>
              </tr>
              <tr>
                <td>4</td>
                <td>
                  黃煥民
                </td>
                <td height="13">4128.75</td>
                <td>1514</td>
                <td>841.67</td>
                <td>4930</td>
                <td>16400</td>
                <td>27814.42</td>
              </tr>
              <tr>
                <td>5</td>
                <td>James Stewart</td>
                <td height="13">2302.5</td>
                <td>1263.33</td>
                <td>-</td>
                <td>6100</td>
                <td>16400</td>
                <td>26065.83</td>
              </tr>
              <tr>
                <td>6</td>
                <td>Jean Van De Velde</td>
                <td height="13">23775</td>
                <td>-</td>
                <td>-</td>
                <td>-</td>
                <td>-</td>
                <td>23775</td>
              </tr>
              <tr>
                <td>7</td>
                <td>馮裕德</td>
                <td height="13">16275</td>
                <td>-</td>
                <td>6675</td>
                <td>-</td>
                <td>-</td>
                <td>22950</td>
              </tr>
              <tr>
                <td>8</td>
                <td>David Freeman</td>
                <td height="13">-</td>
                <td>1514</td>
                <td>385</td>
                <td>-</td>
                <td>16400</td>
                <td>18299</td>
              </tr>
              <tr>
                <td>9</td>
                <td>鄧承志</td>
                <td height="13">6772.5</td>
                <td>2510</td>
                <td>350</td>
                <td>-</td>
                <td>6772.5</td>
                <td>16405</td>
              </tr>
              <tr>
                <td>10</td>
                <td>Grant Gibson</td>
                <td height="13">2827.5</td>
                <td>8475</td>
                <td>646.25</td>
                <td>-</td>
                <td>-</td>
                <td>11948.75</td>
              </tr>
              <tr>
                <td>11</td>
                <td>李永基</td>
                <td height="13">-</td>
                <td>3390</td>
                <td>562.5</td>
                <td>2936.6</td>
                <td>2827.5</td>
                <td>9716.6</td>
              </tr>
              <tr>
                <td>12</td>
                <td>張哲鎬</td>
                <td height="13">2827.5</td>
                <td>-</td>
                <td>-</td>
                <td>2936.6</td>
                <td>3765</td>
                <td>9529.1</td>
              </tr>
              <tr>
                <td>13</td>
                <td>周錇</td>
                <td height="13">4128.75</td>
                <td>630</td>
                <td>841.67</td>
                <td>2936.6</td>
                <td>-</td>
                <td>8537.02</td>
              </tr>
              <tr>
                <td>14</td>
                <td>Andrew Good</td>
                <td height="13">1665</td>
                <td>1170</td>
                <td>1198.75</td>
                <td>1503.3</td>
                <td>2437.5</td>
                <td>7974.55</td>
              </tr>
              <tr>
                <td>15</td>
                <td>Paul Riley</td>
                <td height="13">1185</td>
                <td>4515</td>
                <td>2070</td>
                <td>-</td>
                <td>-</td>
                <td>7770</td>
              </tr>
              <tr>
                <td>16</td>
                <td>廖鍇夢</td>
                <td height="13">2160</td>
                <td>1885</td>
                <td>2070</td>
                <td>1140</td>
                <td>-</td>
                <td>7255</td>
              </tr>
              <tr>
                <td>17</td>
                <td>馮偉權</td>
                <td height="13">2302.5</td>
                <td>2910</td>
                <td>735</td>
                <td>1210</td>
                <td>-</td>
                <td>7157.5</td>
              </tr>
              <tr>
                <td>18</td>
                <td>鄭家耀</td>
                <td height="13">1372.5</td>
                <td>750</td>
                <td>562.5</td>
                <td>1290</td>
                <td>2827.5</td>
                <td>6802.5</td>
              </tr>
              <tr>
                <td>19</td>
                <td>郭永昌</td>
                <td height="13">1935</td>
                <td>1263.33</td>
                <td>562.5</td>
                <td>1503.3</td>
                <td>1440</td>
                <td>6704.13</td>
              </tr>
              <tr>
                <td>20</td>
                <td>李宇軒</td>
                <td height="13">1530</td>
                <td>670</td>
                <td>646.25</td>
                <td>-</td>
                <td>3300</td>
                <td>6146.25</td>
              </tr>
              <tr>
                <td>21</td>
                <td>鄭德謙</td>
                <td height="13">1440</td>
                <td>1514</td>
                <td>442.5</td>
                <td>1290</td>
                <td>1210</td>
                <td>5896.5</td>
              </tr>
              <tr>
                <td>22</td>
                <td>馬金發</td>
                <td height="13">4128.75</td>
                <td>990</td>
                <td>735</td>
                <td>-</td>
                <td>-</td>
                <td>5853.75</td>
              </tr>
              <tr>
                <td>23</td>
                <td>李文樂</td>
                <td height="13">1935</td>
                <td>1263.33</td>
                <td>646.25</td>
                <td>1912.5</td>
                <td>-</td>
                <td>5757.08</td>
              </tr>
              <tr>
                <td>24</td>
                <td>馮偉傑</td>
                <td height="13">1665</td>
                <td>1140</td>
                <td>275</td>
                <td>1380</td>
                <td>1155</td>
                <td>5615</td>
              </tr>
              <tr>
                <td>25</td>
                <td>萬雄立</td>
                <td height="13">975</td>
                <td>813.33</td>
                <td>442.5</td>
                <td>1912.5</td>
                <td>1320</td>
                <td>5463.33</td>
              </tr>
              <tr>
                <td>26</td>
                <td>Brad Schadewitz</td>
                <td height="13">1785</td>
                <td>-</td>
                <td>1198.75</td>
                <td>-</td>
                <td>2437.5</td>
                <td>5421.25</td>
              </tr>
              <tr>
                <td>27</td>
                <td>宋幸文</td>
                <td height="13">2070</td>
                <td>1885</td>
                <td>385</td>
                <td>800</td>
                <td>-</td>
                <td>5140</td>
              </tr>
              <tr>
                <td>28</td>
                <td>鄧敏祺</td>
                <td height="13">-</td>
                <td>1080</td>
                <td>2070</td>
                <td>1912.5</td>
                <td>-</td>
                <td>5062.5</td>
              </tr>
              <tr>
                <td>29</td>
                <td>李應東</td>
                <td height="13">1665</td>
                <td>1080</td>
                <td>562.5</td>
                <td>680</td>
                <td>1020</td>
                <td>5007.5</td>
              </tr>
              <tr>
                <td>30</td>
                <td>簡柏堅</td>
                <td height="13">1530</td>
                <td>900</td>
                <td>290</td>
                <td>1080</td>
                <td>1080</td>
                <td>4880</td>
              </tr>
              <tr>
                <td>31</td>
                <td>Vaughan Mason</td>
                <td height="13">-</td>
                <td>4515</td>
                <td>275</td>
                <td>-</td>
                <td>-</td>
                <td>4790</td>
              </tr>
              <tr>
                <td>32</td>
                <td>Mark Mossip</td>
                <td height="13">1530</td>
                <td>1514</td>
                <td>442.5</td>
                <td>1005</td>
                <td>-</td>
                <td>4491.5</td>
              </tr>
              <tr>
                <td>33</td>
                <td>廖樂天</td>
                <td height="13">-</td>
                <td>-</td>
                <td>-</td>
                <td>-</td>
                <td>4365</td>
                <td>4365</td>
              </tr>
              <tr>
                <td>34</td>
                <td>李國恩</td>
                <td height="13">825</td>
                <td>700</td>
                <td>442.5</td>
                <td>870</td>
                <td>1320</td>
                <td>4157.5</td>
              </tr>
              <tr>
                <td>&nbsp; </td>
                <td>&nbsp;</td>
                <td height="13">&nbsp;</td>
                <td>&nbsp;</td>
                <td>&nbsp;</td>
                <td>&nbsp;</td>
                <td>&nbsp;</td>
                <td>&nbsp;</td>
              </tr>
              <tr>
                <td>36</td>
                <td>黎煒健</td>
                <td height="13">-</td>
                <td>-</td>
                <td>-</td>
                <td>1503.3</td>
                <td>2250</td>
                <td>3753.3</td>
              </tr>
              <tr>
                <td>37</td>
                <td>梁紹才</td>
                <td height="13">1215</td>
                <td>550</td>
                <td>1198.75</td>
                <td>760</td>
                <td>-</td>
                <td>3723.75</td>
              </tr>
              <tr>
                <td>38</td>
                <td>林春祥</td>
                <td height="13">1140</td>
                <td>700</td>
                <td>646.25</td>
                <td>-</td>
                <td>1155</td>
                <td>3641.25</td>
              </tr>
              <tr>
                <td>39</td>
                <td>蔣國良</td>
                <td height="13">825</td>
                <td>560</td>
                <td>275</td>
                <td>800</td>
                <td>990</td>
                <td>3450</td>
              </tr>
              <tr>
                <td>40</td>
                <td>馬健民</td>
                <td height="13">825</td>
                <td>1080</td>
                <td>502.5</td>
                <td>930</td>
                <td>-</td>
                <td>3337.5</td>
              </tr>
              <tr>
                <td>41</td>
                <td>Kevin Hind</td>
                <td height="13">1785</td>
                <td>1514</td>
                <td>-</td>
                <td>-</td>
                <td>-</td>
                <td>3299</td>
              </tr>
              <tr>
                <td>42</td>
                <td>李俊民</td>
                <td height="13">1035</td>
                <td>990</td>
                <td>275</td>
                <td>960</td>
                <td>-</td>
                <td>3260</td>
              </tr>
              <tr>
                <td>43</td>
                <td>蕭金標</td>
                <td height="13">825</td>
                <td>813.33</td>
                <td>275</td>
                <td>1140</td>
                <td>-</td>
                <td>3053.33</td>
              </tr>
              <tr>
                <td>44</td>
                <td>張桂康</td> <td height="13">915</td>
                <td>750</td>
                <td>385</td>
                <td>870</td>
                <td>-</td>
                <td>2920</td>
              </tr>
              <tr>
                <td>45</td>
                <td>許灝文</td> <td height="13">1035</td>
                <td>990</td>
                <td>-</td>
                <td>870</td>
                <td>-</td>
                <td>2895</td>
              </tr>
              <tr>
                <td>46</td>
                <td>楊沿泰</td> <td height="13">885</td>
                <td>550</td>
                <td>320</td>
                <td>1005</td>
                <td>-</td>
                <td>2760</td>
              </tr>
              <tr>
                <td>47</td>
                <td>黃海健</td> <td height="13">-</td>
                <td>630</td>
                <td>841.67</td>
                <td>1050</td>
                <td>-</td>
                <td>2521.67</td>
              </tr>
              <tr>
                <td>48</td>
                <td>蔡維臣</td> <td height="13">2520</td>
                <td>-</td>
                <td>-</td>
                <td>-</td>
                <td>-</td>
                <td>2520</td>
              </tr>
              <tr>
                <td>49</td>
                <td>廖炳光</td> <td height="13">1282.5</td>
                <td>813.33</td>
                <td>350</td>
                <td>-</td>
                <td>-</td>
                <td>2445.83</td>
              </tr>
              <tr>
                <td>50</td>
                <td>方鯨霖</td> <td height="13">825</td>
                <td>900</td>
                <td>-</td>
                <td>650</td>
                <td>-</td>
                <td>2375</td>
              </tr>
              <tr>
                <td>51</td>
                <td>蘇勁濤</td> <td height="13">825</td>
                <td>550</td>
                <td>290</td>
                <td>680</td>
                <td>-</td>
                <td>2345</td>
              </tr>
              <tr>
                <td>52</td>
                <td>Chris Marrs</td> <td height="13">-</td>
                <td>590</td>
                <td>385</td>
                <td>-</td>
                <td>1320</td>
                <td>2295</td>
              </tr>
              <tr>
                <td>53</td>
                <td>Michael Long</td> <td height="13">1095</td>
                <td>-</td>
                <td>-</td>
                <td>1140</td>
                <td>-</td>
                <td>2235</td>
              </tr>
              <tr>
                <td>54</td>
                <td>鄧澄濱</td> <td height="13">-</td>
                <td>-</td>
                <td>320</td>
                <td>1912.5</td>
                <td>-</td>
                <td>2232.5</td>
              </tr>
              <tr>
                <td>55</td>
                <td>吳坤河</td> <td height="13">1140</td>
                <td>550</td>
                <td>502.5</td>
                <td>-</td>
                <td>-</td>
                <td>2192.5</td>
              </tr>
              <tr>
                <td>56</td>
                <td>張建平</td> <td height="13">1282.5</td>
                <td>630</td>
                <td>-</td>
                <td>-</td>
                <td>-</td>
                <td>1912.5</td>
              </tr>
              <tr>
                <td>57</td>
                <td>鍾兆倫</td>
                <td height="13">-</td>
                <td>-</td>
                <td>-</td>
                <td>720</td>
                <td>1050</td>
                <td>1770</td>
              </tr>
              <tr>
                <td>58</td>
                <td>廖煒賢</td> <td height="13">825</td>
                <td>-</td>
                <td>275</td>
                <td>630</td>
                <td>-</td>
                <td>1730</td>
              </tr>
              <tr>
                <td>59</td>
                <td>沈興南</td> <td height="13">1035</td>
                <td>560</td>
                <td>-</td>
                <td>-</td>
                <td>-</td>
                <td>1595</td>
              </tr>
              <tr>
                <td>60</td>
                <td>唐進寶</td> <td height="13">945</td>
                <td>550</td>
                <td>-</td>
                <td>-</td>
                <td>-</td>
                <td>1495</td>
              </tr>
              <tr>
                <td>61</td>
                <td>簡敬有</td> <td height="13">1372.5</td>
                <td>-</td>
                <td>-</td>
                <td>-</td>
                <td>-</td>
                <td>1372.5</td>
              </tr>
              <tr>
                <td>62</td>
                <td>鄧偉俊</td> <td height="13">-</td>
                <td>-</td>
                <td>1198.75</td>
                <td>-</td>
                <td>-</td>
                <td>1198.75</td>
              </tr>
              <tr>
                <td>63</td>
                <td>James Robbins</td> <td height="13">-</td>
                <td>550</td>
                <td>-</td>
                <td>610</td>
                <td>-</td>
                <td>1160</td>
              </tr>
              <tr>
                <td>64</td>
                <td>Richard Hood</td> <td height="13">-</td>
                <td>550</td>
                <td>320</td>
                <td>-</td>
                <td>-</td>
                <td>870</td>
              </tr>
              <tr>
                <td>65</td>
                <td>黃鉦鈞</td> <td height="13">-</td>
                <td>-</td>
                <td>-</td>
                <td>760</td>
                <td>-</td>
                <td>760</td>
              </tr>
              <tr>
                <td>66</td>
                <td>黎偉民</td> <td height="13">-</td>
                <td>750</td>
                <td>-</td>
                <td>-</td>
                <td>-</td>
                <td>750</td>
              </tr>
              <tr>
                <td>67</td>
                <td>宋有祿</td> <td height="13">-</td>
                <td>-</td>
                <td>502.5</td>
                <td>-</td>
                <td>-</td>
                <td>502.5</td>
              </tr>
              <tr>
                <td>68</td>
                <td>鄧樹榮</td> <td height="13">-</td>
                <td>-</td>
                <td>385</td>
                <td>-</td>
                <td>-</td>
                <td>385</td>
              </tr>
              <tr>
                <td>69</td>
                <td>Kingsley Long</td> <td height="13">-</td>
                <td>-</td>
                <td>275</td>
                <td>-</td>
                <td>-</td>
                <td>275</td>
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
                <th width="63" title="30-31 May, 2011, Kau Sai Chau Public Golf Course - North Course" scope="col">
                  LEG 1
                </th>
                <th width="63" title="4-5 July, 2011, Clearwater Bay Golf Club" scope="col">LEG 2</th>
                <th width="63" title="" scope="col">LEG 3</th>
                <th width="63" title="" scope="col">Classic</th>
                <th width="80" scope="col">TOTAL</th>
              </tr>
              <tr>
                <td width="42">1</td>
                <td width="246">Betty    Ng</td>
                <td width="85">15850</td>
                <td width="85">6100</td>
                <td width="85">15850</td>
                <td width="85">3150</td>
                <td width="75">40950</td>
              </tr>
              <tr>
                <td>2</td>
                <td>Jannet Sheng</td>
                <td>8475</td>
                <td>10850</td>
                <td>6100</td>
                <td>4930</td>
                <td>30355</td>
              </tr>
              <tr>
                <td>3</td>
                <td>Ho Mei Dik</td>
                <td>4100</td>
                <td>2200</td>
                <td>10850</td>
                <td>10850</td>
                <td>28000</td>
              </tr>
              <tr>
                <td>4</td>
                <td>Melody Chan</td>
                <td>3390</td>
                <td>3745</td>
                <td>4100</td>
                <td>15850</td>
                <td>27085</td>
              </tr>
              <tr>
                <td>5</td>
                <td>Annie Lau&nbsp;</td>
                <td>2710</td>
                <td>15850</td>
                <td>2910</td>
                <td>2510</td>
                <td>23980</td>
              </tr>
              <tr>
                <td>6</td>
                <td>Sun Hiu Fung</td>
                <td>8475</td>
                <td>4930</td>
                <td>-</td>
                <td>-</td>
                <td>13405</td>
              </tr>
              <tr>
                <td>7</td>
                <td>Sandy Tao</td>
                <td>-</td>
                <td>2710</td>
                <td>3390</td>
                <td>6100</td>
                <td>12200</td>
              </tr>
              <tr>
                <td>8</td>
                <td>Elsa Tang</td>
                <td>4930</td>
                <td>2710</td>
                <td>-</td>
                <td>3150</td>
                <td>10790</td>
              </tr>
              <tr>
                <td>9</td>
                <td>Urvashi Sethi</td>
                <td>2200</td>
                <td>1970</td>
                <td>2226.6</td>
                <td>4100</td>
                <td>10496.6</td>
              </tr>
              <tr>
                <td>10</td>
                <td>Bonnie Ngai</td>
                <td>2710</td>
                <td>1680</td>
                <td>2226.6</td>
                <td>2200</td>
                <td>8816.6</td>
              </tr>
              <tr>
                <td>11</td>
                <td>Syliva Chan</td>
                <td>-</td>
                <td>-</td>
                <td>4930</td>
                <td>-</td>
                <td>4930</td>
              </tr>
              <tr>
                <td>12</td>
                <td>Florence Yuen</td>
                <td>-</td>
                <td>3745</td>
                <td>-</td>
                <td>-</td>
                <td>3745</td>
              </tr>
              <tr>
                <td>13</td>
                <td>Debbie Yip</td>
                <td>-</td>
                <td>1800</td>
                <td>1800</td>
                <td>-</td>
                <td>3600</td>
              </tr>
              <tr>
                <td>14</td>
                <td>Pony Leung</td>
                <td>-</td>
                <td>-</td>
                <td>2226.6</td>
                <td>-</td>
                <td>2226.6</td>
              </tr>
              <tr>
                <td>15</td>
                <td>Jacqueline Johnson</td>
                <td>-</td>
                <td>1570</td>
                <td>-</td>
                <td>-</td>
                <td>1570</td>
              </tr>
              <tr>
                <td>16</td>
                <td>Sandy Yim</td>
                <td>-</td>
                <td>1500</td>
                <td>-</td>
                <td>-</td>
                <td>1500</td>
              </tr>
            </tbody>
          </table>
        : <table className="table table-striped">
            <tbody>
              <tr>
                <th scope="col">排名</th>
                <th width="187" scope="col">球手</th>
                <th width="85" title="2011年5月30-31日, 滘西洲公眾高爾夫球場 - 北場" scope="col">第1站</th>
                <th width="85" title="2011年7月4-5日, 滘西洲公眾高爾夫球場 - 北場" scope="col">第2站</th>
                <th width="85" title="" scope="col">第3站</th>
                <th width="85" title="" scope="col">經典賽</th>
                <th width="75" scope="col">積分</th>
              </tr>
              <tr>
                <td width="47">1</td>
                <td height="13" width="187">吳容歡</td>
                <td width="85">15850</td>
                <td width="85">6100</td>
                <td width="85">15850</td>
                <td width="85">3150</td>
                <td width="75">40950</td>
              </tr>
              <tr>
                <td>2</td>
                <td height="13">盛秋燕</td>
                <td>8475</td>
                <td>10850</td>
                <td>6100</td>
                <td>4930</td>
                <td>30355</td>
              </tr>
              <tr>
                <td>3</td>
                <td height="13">何美廸</td>
                <td>4100</td>
                <td>2200</td>
                <td>10850</td>
                <td>10850</td>
                <td>28000</td>
              </tr>
              <tr>
                <td>4</td>
                <td height="13">陳韻如</td>
                <td>3390</td>
                <td>3745</td>
                <td>4100</td>
                <td>15850</td>
                <td>27085</td>
              </tr>
              <tr>
                <td>5</td>
                <td height="13">劉朗琪</td>
                <td>2710</td>
                <td>15850</td>
                <td>2910</td>
                <td>2510</td>
                <td>23980</td>
              </tr>
              <tr>
                <td>6</td>
                <td height="13">辛曉渢</td>
                <td>8475</td>
                <td>4930</td>
                <td>-</td>
                <td>-</td>
                <td>13405</td>
              </tr>
              <tr>
                <td>7</td>
                <td height="13">涂玉華</td>
                <td>-</td>
                <td>2710</td>
                <td>3390</td>
                <td>6100</td>
                <td>12200</td>
              </tr>
              <tr>
                <td>8</td>
                <td height="13">鄧睎文</td>
                <td>4930</td>
                <td>2710</td>
                <td>-</td>
                <td>3150</td>
                <td>10790</td>
              </tr>
              <tr>
                <td>9</td>
                <td height="13">Urvashi Sethi</td>
                <td>2200</td>
                <td>1970</td>
                <td>2226.6</td>
                <td>4100</td>
                <td>10496.6</td>
              </tr>
              <tr>
                <td>10</td>
                <td height="13">倪瑞蓮</td>
                <td>2710</td>
                <td>1680</td>
                <td>2226.6</td>
                <td>2200</td>
                <td>8816.6</td>
              </tr>
              <tr>
                <td>11</td>
                <td height="13">陳綉晶</td>
                <td>-</td>
                <td>-</td>
                <td>4930</td>
                <td>-</td>
                <td>4930</td>
              </tr>
              <tr>
                <td>12</td>
                <td height="13">袁芝韻</td>
                <td>-</td>
                <td>3745</td>
                <td>-</td>
                <td>-</td>
                <td>3745</td>
              </tr>
              <tr>
                <td>13</td>
                <td height="13">葉玉玲</td>
                <td>-</td>
                <td>1800</td>
                <td>1800</td>
                <td>-</td>
                <td>3600</td>
              </tr>
              <tr>
                <td>14</td>
                <td height="13">梁寶兒</td>
                <td>-</td>
                <td>-</td>
                <td>2226.6</td>
                <td>-</td>
                <td>2226.6</td>
              </tr>
              <tr>
                <td>15</td>
                <td height="13">Jacqueline Johnson</td>
                <td>-</td>
                <td>1570</td>
                <td>-</td>
                <td>-</td>
                <td>1570</td>
              </tr>
              <tr>
                <td>16</td>
                <td height="13">嚴婉珊</td>
                <td>-</td>
                <td>1500</td>
                <td>-</td>
                <td>-</td>
                <td>1500</td>
              </tr>
            </tbody>
          </table>}
      <h3>Senior Division</h3>

      {props.lang === 'en'
        ? <table className="table table-striped">
            <tbody>
              <tr>
                <th width="44" scope="col">POS</th>
                <th width="283" scope="col">PLAYER</th>
                <th width="44" title="19-20 April, 2010, KSC Public Golf Course - North Course" scope="col">LEG 1</th>
                <th width="44" title="17-18 May, 2010, Long Island Golf &amp; Country Club" scope="col">LEG 2</th>
                <th width="44" title="23-24 Aug, 2010, Discovery Bay Golf Club" scope="col">LEG 3</th>
                <th width="44" title="7-8 Oct, 2010, Yinli Foreign Investors Golf Club" scope="col">LEG 4</th>
                <th width="44" title="7-8 Oct, 2010, Yinli Foreign Investors Golf Club" scope="col">LEG 5 </th>
                <th width="51" title="7-8 Oct, 2010, Yinli Foreign Investors Golf Club" scope="col">Classic</th>
                <th width="47" scope="col">TOTAL</th>
              </tr>
              <tr>
                <td>1</td>
                <td width="283">Tang Man    Kee</td>
                <td>3745</td>
                <td>-</td>
                <td>10850</td>
                <td>15850</td>
                <td>10850</td>
                <td>13350</td>
                <td>54645</td>
              </tr>
              <tr>
                <td>2</td>
                <td>Fung Wai Kuen</td>
                <td>3745</td>
                <td>10850</td>
                <td>15850</td>
                <td>10850</td>
                <td>5515</td>
                <td>6100</td>
                <td>52910</td>
              </tr>
              <tr>
                <td>3</td>
                <td>Liu Kai Mung&nbsp;</td>
                <td>2540</td>
                <td>15850</td>
                <td>4515</td>
                <td>4930</td>
                <td>5515</td>
                <td>2355</td>
                <td>35705</td>
              </tr>
              <tr>
                <td>4</td>
                <td>Tang Shu Wing</td>
                <td>5515</td>
                <td>4930</td>
                <td>1990</td>
                <td>3390</td>
                <td>2910</td>
                <td>13350</td>
                <td>32085</td>
              </tr>
              <tr>
                <td>5</td>
                <td>Michael Kan</td>
                <td>15850</td>
                <td>4100</td>
                <td>1680</td>
                <td>1680</td>
                <td>-</td>
                <td>3390</td>
                <td>26700</td>
              </tr>
              <tr>
                <td>6</td>
                <td>Daniel Liu</td>
                <td>2540</td>
                <td>2710</td>
                <td>1990</td>
                <td>1570</td>
                <td>15850</td>
                <td>1885</td>
                <td>26545</td>
              </tr>
              <tr>
                <td>7</td>
                <td>Alex Tang&nbsp;</td>
                <td>5515</td>
                <td>2710</td>
                <td>2510</td>
                <td>4100</td>
                <td>3390</td>
                <td>2910</td>
                <td>21135</td>
              </tr>
              <tr>
                <td>8</td>
                <td>Richard Kan</td>
                <td>10850</td>
                <td>6100</td>
                <td>1990</td>
                <td>-</td>
                <td>-</td>
                <td>-</td>
                <td>18940</td>
              </tr>
              <tr>
                <td>9</td>
                <td>Stanley Leung&nbsp;</td>
                <td>1800</td>
                <td>2200</td>
                <td>3150</td>
                <td>2355</td>
                <td>4100</td>
                <td>1570</td>
                <td>15175</td>
              </tr>
              <tr>
                <td>10</td>
                <td>Sung Sing</td>
                <td>-</td>
                <td>-</td>
                <td>4515</td>
                <td>2910</td>
                <td>2510</td>
                <td>4515</td>
                <td>14450</td>
              </tr>
              <tr>
                <td>11</td>
                <td>Siu Kam Piu</td>
                <td>1970</td>
                <td>-</td>
                <td>6100</td>
                <td>2355</td>
                <td>1970</td>
                <td>1885</td>
                <td>14280</td>
              </tr>
              <tr>
                <td>12</td>
                <td>Liu Wai Yin</td>
                <td>1680</td>
                <td>1970</td>
                <td>1570</td>
                <td>1470</td>
                <td>1800</td>
                <td>1410</td>
                <td>9900</td>
              </tr>
              <tr>
                <td>13</td>
                <td>Tommy Kan</td>
                <td>2540</td>
                <td>-</td>
                <td>3150</td>
                <td>-</td>
                <td>2200</td>
                <td>-</td>
                <td>7890</td>
              </tr>
              <tr>
                <td>14</td>
                <td>Lai Wai Man</td>
                <td>-</td>
                <td>3390</td>
                <td>-</td>
                <td>1800</td>
                <td>-</td>
                <td>1410</td>
                <td>6600</td>
              </tr>
              <tr>
                <td>15</td>
                <td>Jason Kwok</td>
                <td>-</td>
                <td>-</td>
                <td>-</td>
                <td>6100</td>
                <td>-</td>
                <td>-</td>
                <td>6100</td>
              </tr>
              <tr>
                <td>16</td>
                <td>Lau Kwong Hon</td>
                <td>-</td>
                <td>-</td>
                <td>-</td>
                <td>-</td>
                <td>-</td>
                <td>4515</td>
                <td>4515</td>
              </tr>
              <tr>
                <td>17</td>
                <td>James Robbins</td>
                <td>1570</td>
                <td>-</td>
                <td>-</td>
                <td>1470</td>
                <td>-</td>
                <td>1320</td>
                <td>4360</td>
              </tr>
              <tr>
                <td>18</td>
                <td>Tong Chun Po</td>
                <td>-</td>
                <td>-</td>
                <td>-</td>
                <td>1970</td>
                <td>-</td>
                <td>2355</td>
                <td>4325</td>
              </tr>
              <tr>
                <td>19</td>
                <td>Leung Sing Choi</td>
                <td>-</td>
                <td>-</td>
                <td>-</td>
                <td>-</td>
                <td>-</td>
                <td>1680</td>
                <td>1680</td>
              </tr>
              <tr>
                <td>20</td>
                <td>Chan Tze Keung</td>
                <td>-</td>
                <td>-</td>
                <td>-</td>
                <td>-</td>
                <td>-</td>
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
                <th scope="col" title="2010年8月23-24日, 愉景灣高爾夫球會">第3站</th>
                <th scope="col" title="2010年10月7-8日, 銀利高爾夫球會">第4站</th>
                <th scope="col">&nbsp;</th>
                <th scope="col">經典賽</th>
                <th scope="col">積分</th>
              </tr>
              <tr>
                <td width="32">1</td>
                <td height="13" width="281">鄧敏祺</td>
                <td width="48">3745</td>
                <td width="47">-</td>
                <td width="47">10850</td>
                <td width="48">15850</td>
                <td width="47">10850</td>
                <td width="51">13350</td>
                <td width="44">54645</td>
              </tr>
              <tr>
                <td>2</td>
                <td height="13">馮偉權</td>
                <td>3745</td>
                <td>10850</td>
                <td>15850</td>
                <td>10850</td>
                <td>5515</td>
                <td>6100</td>
                <td>52910</td>
              </tr>
              <tr>
                <td>3</td>
                <td height="13">廖鍇夢</td>
                <td>2540</td>
                <td>15850</td>
                <td>4515</td>
                <td>4930</td>
                <td>5515</td>
                <td>2355</td>
                <td>35705</td>
              </tr>
              <tr>
                <td>4</td>
                <td height="13">鄧樹榮</td>
                <td>5515</td>
                <td>4930</td>
                <td>1990</td>
                <td>3390</td>
                <td>2910</td>
                <td>13350</td>
                <td>32085</td>
              </tr>
              <tr>
                <td>5</td>
                <td height="13">簡敬有</td>
                <td>15850</td>
                <td>4100</td>
                <td>1680</td>
                <td>1680</td>
                <td>-</td>
                <td>3390</td>
                <td>26700</td>
              </tr>
              <tr>
                <td>6</td>
                <td height="13">廖炳光</td>
                <td>2540</td>
                <td>2710</td>
                <td>1990</td>
                <td>1570</td>
                <td>15850</td>
                <td>1885</td>
                <td>26545</td>
              </tr>
              <tr>
                <td>7</td>
                <td height="13">鄧澄濱</td>
                <td>5515</td>
                <td>2710</td>
                <td>2510</td>
                <td>4100</td>
                <td>3390</td>
                <td>2910</td>
                <td>21135</td>
              </tr>
              <tr>
                <td>8</td>
                <td height="13">簡志強</td>
                <td>10850</td>
                <td>6100</td>
                <td>1990</td>
                <td>-</td>
                <td>-</td>
                <td>-</td>
                <td>18940</td>
              </tr>
              <tr>
                <td>9</td>
                <td height="13">梁紹才</td>
                <td>1800</td>
                <td>2200</td>
                <td>3150</td>
                <td>2355</td>
                <td>4100</td>
                <td>1570</td>
                <td>15175</td>
              </tr>
              <tr>
                <td>10</td>
                <td height="13">宋有祿</td>
                <td>-</td>
                <td>-</td>
                <td>4515</td>
                <td>2910</td>
                <td>2510</td>
                <td>4515</td>
                <td>14450</td>
              </tr>
              <tr>
                <td>11</td>
                <td height="13">蕭金標</td>
                <td>1970</td>
                <td>-</td>
                <td>6100</td>
                <td>2355</td>
                <td>1970</td>
                <td>1885</td>
                <td>14280</td>
              </tr>
              <tr>
                <td>12</td>
                <td height="13">廖煒賢</td>
                <td>1680</td>
                <td>1970</td>
                <td>1570</td>
                <td>1470</td>
                <td>1800</td>
                <td>1410</td>
                <td>9900</td>
              </tr>
              <tr>
                <td>13</td>
                <td height="13">簡鏡棠</td>
                <td>2540</td>
                <td>-</td>
                <td>3150</td>
                <td>-</td>
                <td>2200</td>
                <td>-</td>
                <td>7890</td>
              </tr>
              <tr>
                <td>14</td>
                <td height="13">黎偉民</td>
                <td>-</td>
                <td>3390</td>
                <td>-</td>
                <td>1800</td>
                <td>-</td>
                <td>1410</td>
                <td>6600</td>
              </tr>
              <tr>
                <td>15</td>
                <td height="13">郭永昌</td>
                <td>-</td>
                <td>-</td>
                <td>-</td>
                <td>6100</td>
                <td>-</td>
                <td>-</td>
                <td>6100</td>
              </tr>
              <tr>
                <td>16</td>
                <td height="13">劉光漢</td>
                <td>-</td>
                <td>-</td>
                <td>-</td>
                <td>-</td>
                <td>-</td>
                <td>4515</td>
                <td>4515</td>
              </tr>
              <tr>
                <td>17</td>
                <td height="13">James Robbins</td>
                <td>1570</td>
                <td>-</td>
                <td>-</td>
                <td>1470</td>
                <td>-</td>
                <td>1320</td>
                <td>4360</td>
              </tr>
              <tr>
                <td>18</td>
                <td height="13">唐進寶</td>
                <td>-</td>
                <td>-</td>
                <td>-</td>
                <td>1970</td>
                <td>-</td>
                <td>2355</td>
                <td>4325</td>
              </tr>
              <tr>
                <td>19</td>
                <td height="13">梁勝財</td>
                <td>-</td>
                <td>-</td>
                <td>-</td>
                <td>-</td>
                <td>-</td>
                <td>1680</td>
                <td>1680</td>
              </tr>
              <tr>
                <td>20</td>
                <td height="13">陳子強</td>
                <td>-</td>
                <td>-</td>
                <td>-</td>
                <td>-</td>
                <td>-</td>
                <td>1500</td>
                <td>1500</td>
              </tr>
            </tbody>
          </table>}
    </div>
  );
}
export default merit;
