import React from 'react';

function merit(props) {
  return (
    <div className="container-fluid" id="merit-page">
      <h3>Open Division </h3>

      {props.lang === 'en'
        ? <table className="table table-striped">
            <tbody>
              <tr>
                <th width="142">POS</th>
                <th width="245">PLAYER</th>
                <th width="258">CHAMPIONSHIP</th>
                <th width="142">LEG 1</th>
                <th width="142">LEG 2</th>
                <th width="142">LEG 3</th>
                <th width="142">LEG 4</th>
                <th width="142">YINLI&NINE EAGLES</th>
                <th width="149">TOTAL</th>
              </tr>
              <tr>
                <td width="142">1</td>
                <td width="245">JAMES STEWART&nbsp;</td>
                <td width="258">23775</td>
                <td width="142">1613.8</td>
                <td width="142">15850</td>
                <td width="142">15850</td>
                <td width="142">8475</td>
                <td width="142">16400</td>
                <td width="149">81963.8</td>
              </tr>
              <tr>
                <td width="142">2</td>
                <td width="245">tANG Tsz hang </td>
                <td width="258">5200</td>
                <td width="142">5425</td>
                <td width="142">10850</td>
                <td width="142">5043.3</td>
                <td width="142">15850</td>
                <td width="142">16400</td>
                <td width="149">58768.3</td>
              </tr>
              <tr>
                <td width="142">3</td>
                <td width="245">woNG woon man </td>
                <td width="258">5200</td>
                <td width="142">7925</td>
                <td width="142">6100</td>
                <td width="142">3390</td>
                <td width="142">8475</td>
                <td width="142">6773</td>
                <td width="149">37863</td>
              </tr>
              <tr>
                <td width="142">4</td>
                <td width="245"> TANG man kee </td>
                <td width="258">16275</td>
                <td width="142">985</td>
                <td width="142">1110</td>
                <td width="142">10850</td>
                <td width="142"> </td>
                <td width="142"> </td>
                <td width="149">29220</td>
              </tr>
              <tr>
                <td width="142">5</td>
                <td width="245"> KO ming chak </td>
                <td width="258">9150</td>
                <td width="142">1100</td>
                <td width="142">3745</td>
                <td width="142">5043.3</td>
                <td width="142">4100</td>
                <td width="142">4725</td>
                <td width="149">27863.3</td>
              </tr>
              <tr>
                <td width="142">6</td>
                <td width="245"> LEE wing kei </td>
                <td width="258">7395</td>
                <td width="142"> </td>
                <td width="142">2085</td>
                <td width="142">5043.3</td>
                <td width="142"> </td>
                <td width="142"> </td>
                <td width="149">14523.3</td>
              </tr>
              <tr>
                <td width="142">7</td>
                <td width="245"> CHENG ka yiu </td>
                <td width="258">3300</td>
                <td width="142">1613.75</td>
                <td width="142">2085</td>
                <td width="142">1050</td>
                <td width="142">4930</td>
                <td width="142"> </td>
                <td width="149">12978.75</td>
              </tr>
              <tr>
                <td width="142">8</td>
                <td width="245">WILSON CHOY</td>
                <td width="258">2255</td>
                <td width="142">870</td>
                <td width="142">2910</td>
                <td width="142">2910</td>
                <td width="142">3150</td>
                <td width="142"> </td>
                <td width="149">12095</td>
              </tr>
              <tr>
                <td width="142">9</td>
                <td width="245"> TANG shing chi </td>
                <td width="258">2255</td>
                <td width="142">1613.8</td>
                <td width="142">4930</td>
                <td width="142">1885</td>
                <td width="142"> </td>
                <td width="142"> </td>
                <td width="149">10683.8</td>
              </tr>
              <tr>
                <td width="142">10</td>
                <td width="245"> CHEUNG kin ping </td>
                <td width="258">2827.5</td>
                <td width="142">617.5</td>
                <td width="142">2510</td>
                <td width="142">1500</td>
                <td width="142">3150</td>
                <td width="142"> </td>
                <td width="149">10605</td>
              </tr>
              <tr>
                <td width="142">11</td>
                <td width="245">LIU lok tin </td>
                <td width="258">790</td>
                <td width="142">785</td>
                <td width="142">1625</td>
                <td width="142">2200</td>
                <td width="142">1800</td>
                <td>1680</td>
                <td width="149">8880</td>
              </tr>
              <tr>
                <td width="142">12</td>
                <td width="245"> JANG chel hoo </td>
                <td width="258">1065</td>
                <td width="142"> </td>
                <td width="142">825</td>
                <td width="142">1292.5</td>
                <td width="142">2226.7</td>
                <td width="142">3340</td>
                <td width="149">8749.2</td>
              </tr>
              <tr>
                <td width="142">13</td>
                <td width="245"> Li chun man </td>
                <td width="258">1760</td>
                <td width="142">675</td>
                <td width="142">1110</td>
                <td width="142">1292.5</td>
                <td width="142">2226.7</td>
                <td>1570</td>
                <td width="149">8634.2</td>
              </tr>
              <tr>
                <td width="142">14</td>
                <td width="245">eric lee</td>
                <td width="258">1760</td>
                <td width="142">570</td>
                <td width="142">1440</td>
                <td width="142">990</td>
                <td width="142">1263.3</td>
                <td>1800</td>
                <td width="149">7823.3</td>
              </tr>
              <tr>
                <td width="142">15</td>
                <td width="245">sung hang man </td>
                <td width="258">2520</td>
                <td width="142">617.5</td>
                <td width="142">1110</td>
                <td width="142">1155</td>
                <td width="142">1625</td>
                <td width="142"> </td>
                <td width="149">7027.5</td>
              </tr>
              <tr>
                <td width="142">16</td>
                <td width="245"> Fung sheung wai </td>
                <td width="258">1760</td>
                <td width="142">2465</td>
                <td width="142">700</td>
                <td width="142">770</td>
                <td width="142">1065</td>
                <td width="142"> </td>
                <td width="149">6760</td>
              </tr>
              <tr>
                <td width="142">17</td>
                <td width="245"> Wong ching kwan </td>
                <td width="258">960</td>
                <td width="142">1613.75</td>
                <td width="142">610</td>
                <td width="142">1292.5</td>
                <td width="142">2226.7</td>
                <td width="142"> </td>
                <td width="149">6702.95</td>
              </tr>
              <tr>
                <td width="142">18</td>
                <td width="245"> man hung lap </td>
                <td width="258">2255</td>
                <td width="142">532.5</td>
                <td width="142">1263.3</td>
                <td width="142">1110</td>
                <td width="142">1155</td>
                <td width="142"> </td>
                <td width="149">6315.8</td>
              </tr>
              <tr>
                <td width="142">19</td>
                <td width="245"> ma kam fat </td>
                <td width="258">1890</td>
                <td width="142">870</td>
                <td width="142">1263.3</td>
                <td width="142">1680</td>
                <td width="142"> </td>
                <td width="142"> </td>
                <td width="149">5703.3</td>
              </tr>
              <tr>
                <td width="142">20</td>
                <td width="245">alexander cheng</td>
                <td width="258">1065</td>
                <td width="142">450</td>
                <td width="142">1440</td>
                <td width="142">1080</td>
                <td width="142">1263.3</td>
                <td width="142"> </td>
                <td width="149">5298.3</td>
              </tr>
              <tr>
                <td width="142">21</td>
                <td width="245">wong hoi kin </td>
                <td width="258">570</td>
                <td width="142">1080</td>
                <td width="142">1110</td>
                <td width="142">2510</td>
                <td width="142"> </td>
                <td width="142"> </td>
                <td width="149">5270</td>
              </tr>
              <tr>
                <td width="142">22</td>
                <td width="245">DOMINIQUE BOULET</td>
                <td width="258">5200</td>
                <td width="142"> </td>
                <td width="142"> </td>
                <td width="142"> </td>
                <td width="142"> </td>
                <td width="142"> </td>
                <td width="149">5200</td>
              </tr>
              <tr>
                <td width="142">23</td>
                <td width="245">ANDREW GOOD</td>
                <td width="258">2070</td>
                <td width="142">3050</td>
                <td width="142"> </td>
                <td width="142"> </td>
                <td width="142"> </td>
                <td width="142"> </td>
                <td width="149">5120</td>
              </tr>
              <tr>
                <td width="142">24</td>
                <td width="245"> fung wai kuen </td>
                <td width="258">885</td>
                <td width="142"> </td>
                <td width="142">790</td>
                <td width="142">1440</td>
                <td width="142">1440</td>
                <td width="142"> </td>
                <td width="149">4555</td>
              </tr>
              <tr>
                <td width="142">25</td>
                <td width="245"> Lee kwok yan </td>
                <td width="258">840</td>
                <td width="142">487.5</td>
                <td width="142">750</td>
                <td width="142">1155</td>
                <td width="142">1110</td>
                <td width="142"> </td>
                <td width="149">4342.5</td>
              </tr>
              <tr>
                <td width="142">26</td>
                <td width="245"> Tang wai chun </td>
                <td width="258">1980</td>
                <td width="142">720</td>
                <td width="142">1625</td>
                <td width="142"> </td>
                <td width="142"> </td>
                <td width="142"> </td>
                <td width="149">4325</td>
              </tr>
              <tr>
                <td width="142">27</td>
                <td width="245">GRANT GIBSON</td>
                <td width="258">2827.5</td>
                <td width="142"> </td>
                <td width="142">1440</td>
                <td width="142"> </td>
                <td width="142"> </td>
                <td width="142"> </td>
                <td width="149">4267.5</td>
              </tr>
              <tr>
                <td width="142">28</td>
                <td width="245"> Yeung yuen tai </td>
                <td width="258">690</td>
                <td width="142">750</td>
                <td width="142">750</td>
                <td width="142">770</td>
                <td width="142">1005</td>
                <td width="142"> </td>
                <td width="149">3965</td>
              </tr>
              <tr>
                <td width="142">29</td>
                <td width="245">sung sing</td>
                <td width="258">1665</td>
                <td width="142"> </td>
                <td width="142">990</td>
                <td width="142">1292.5</td>
                <td width="142"> </td>
                <td width="142"> </td>
                <td width="149">3947.5</td>
              </tr>
              <tr>
                <td width="142">30</td>
                <td width="245"> Kan pak kin </td>
                <td width="258">790</td>
                <td width="142">570</td>
                <td width="142">900</td>
                <td width="142">730</td>
                <td width="142">900</td>
                <td width="142"> </td>
                <td width="149">3890</td>
              </tr>
              <tr>
                <td width="142">31</td>
                <td width="245">BRAD SCHADEWITZ</td>
                <td width="258">3765</td>
                <td width="142"> </td>
                <td width="142"> </td>
                <td width="142"> </td>
                <td width="142"> </td>
                <td width="142"> </td>
                <td width="149">3765</td>
              </tr>
              <tr>
                <td width="142">32</td>
                <td width="245">KEVIN HIND</td>
                <td width="258"> </td>
                <td width="142"> </td>
                <td width="142">3745</td>
                <td width="142"> </td>
                <td width="142"> </td>
                <td width="142"> </td>
                <td width="149">3745</td>
              </tr>
              <tr>
                <td width="142">33</td>
                <td width="245">MARK MOSSIP</td>
                <td width="258">730</td>
                <td width="142">532.5</td>
                <td width="142">825</td>
                <td width="142"> </td>
                <td width="142">1625</td>
                <td width="142"> </td>
                <td width="149">3712.5</td>
              </tr>
              <tr>
                <td width="142">34</td>
                <td width="245">siu kam p iu</td>
                <td width="258">960</td>
                <td width="142"> </td>
                <td width="142">650</td>
                <td width="142">930</td>
                <td width="142">1155</td>
                <td width="142"> </td>
                <td width="149">3695</td>
              </tr>
              <tr>
                <td width="142">35</td>
                <td width="245">shum hing nam </td>
                <td width="258">630</td>
                <td width="142">450</td>
                <td width="142">565</td>
                <td width="142">990</td>
                <td width="142">960</td>
                <td width="142"> </td>
                <td width="149">3595</td>
              </tr>
              <tr>
                <td width="142">36</td>
                <td width="245"> fung wai kit </td>
                <td width="258"> </td>
                <td width="142">675</td>
                <td width="142">1263.3</td>
                <td width="142">1570</td>
                <td width="142"> </td>
                <td width="142"> </td>
                <td width="149">3508.3</td>
              </tr>
              <tr>
                <td width="142">37</td>
                <td width="245">leung shui choi </td>
                <td width="258">730</td>
                <td width="142"> </td>
                <td width="142">565</td>
                <td width="142">900</td>
                <td width="142">1263.3</td>
                <td width="142"> </td>
                <td width="149">3458.3</td>
              </tr>
              <tr>
                <td width="142" height="21">38</td>
                <td width="245"> lee kam chuen </td>
                <td width="258"> </td>
                <td width="142"> </td>
                <td width="142">1110</td>
                <td width="142">1885</td>
                <td width="142"> </td>
                <td width="142"> </td>
                <td width="149">2995</td>
              </tr>
              <tr>
                <td width="142">39</td>
                <td width="245"> lee ying tung </td>
                <td width="258">590</td>
                <td width="142"> </td>
                <td width="142">550</td>
                <td width="142">690</td>
                <td width="142">930</td>
                <td width="142"> </td>
                <td width="149">2760</td>
              </tr>
              <tr>
                <td width="142">40</td>
                <td width="245">JAMES ROBBINS&nbsp;</td>
                <td width="258">550</td>
                <td width="142"> </td>
                <td width="142">650</td>
                <td width="142">670</td>
                <td width="142">840</td>
                <td width="142"> </td>
                <td width="149">2710</td>
              </tr>
              <tr>
                <td width="142">41</td>
                <td width="245"> lai wai kin </td>
                <td width="258">670</td>
                <td width="142"> </td>
                <td width="142">750</td>
                <td width="142"> </td>
                <td width="142">1065</td>
                <td width="142"> </td>
                <td width="149">2485</td>
              </tr>
              <tr>
                <td width="142">42</td>
                <td width="245"> lee wing ming </td>
                <td width="258"> </td>
                <td width="142"> </td>
                <td width="142">565</td>
                <td width="142">870</td>
                <td width="142">1005</td>
                <td width="142"> </td>
                <td width="149">2440</td>
              </tr>
              <tr>
                <td width="142">43</td>
                <td width="245"> lee man lok </td>
                <td width="258">960</td>
                <td width="142">487.5</td>
                <td width="142">900</td>
                <td width="142"> </td>
                <td width="142"> </td>
                <td width="142"> </td>
                <td width="149">2347.5</td>
              </tr>
              <tr>
                <td width="142">44</td>
                <td width="245">alFREDo MORALES</td>
                <td width="258"> </td>
                <td width="142"> </td>
                <td width="142"> </td>
                <td width="142">825</td>
                <td width="142">1440</td>
                <td width="142"> </td>
                <td width="149">2265</td>
              </tr>
              <tr>
                <td width="142">45</td>
                <td width="245"> so sek man </td>
                <td width="258"> </td>
                <td width="142"> </td>
                <td width="142">550</td>
                <td width="142">825</td>
                <td width="142">870</td>
                <td width="142"> </td>
                <td width="149">2245</td>
              </tr>
              <tr>
                <td width="142">46</td>
                <td width="245"> tang ching pun </td>
                <td width="258"> </td>
                <td width="142"> </td>
                <td width="142"> </td>
                <td width="142">770</td>
                <td width="142">1440</td>
                <td width="142"> </td>
                <td width="149">2210</td>
              </tr>
              <tr>
                <td width="142">47</td>
                <td width="245">PAUL RILEY</td>
                <td width="258">730</td>
                <td width="142">420</td>
                <td width="142">990</td>
                <td width="142"> </td>
                <td width="142"> </td>
                <td width="142"> </td>
                <td width="149">2140</td>
              </tr>
              <tr>
                <td width="142">48</td>
                <td width="245"> chiang kwok leung </td>
                <td width="258">630</td>
                <td width="142">450</td>
                <td width="142">990</td>
                <td width="142"> </td>
                <td width="142"> </td>
                <td width="142"> </td>
                <td width="149">2070</td>
              </tr>
              <tr>
                <td width="142">49</td>
                <td width="245"> hui ho man </td>
                <td width="258"> </td>
                <td width="142">1800</td>
                <td width="142">&nbsp;</td>
                <td width="142"> </td>
                <td width="142"> </td>
                <td width="142"> </td>
                <td width="149">1800</td>
              </tr>
              <tr>
                <td>50</td>
                <td>shawn morley </td>
                <td>&nbsp;</td>
                <td>&nbsp;</td>
                <td>&nbsp;</td>
                <td>&nbsp;</td>
                <td>1680</td>
                <td>&nbsp;</td>
                <td>1680</td>
              </tr>
              <tr>
                <td width="142">51</td>
                <td width="245">jason kwok</td>
                <td width="258"> </td>
                <td width="142">570</td>
                <td width="142"> </td>
                <td width="142">990</td>
                <td width="142"> </td>
                <td width="142"> </td>
                <td width="149">1560</td>
              </tr>
              <tr>
                <td width="142">52</td>
                <td width="245"> liu ping kwong </td>
                <td width="258">790</td>
                <td width="142"> </td>
                <td width="142">650</td>
                <td width="142"> </td>
                <td width="142"> </td>
                <td width="142"> </td>
                <td width="149">1440</td>
              </tr>
              <tr>
                <td width="142">53</td>
                <td width="245"> Chan wai hung </td>
                <td width="258">550</td>
                <td width="142"> </td>
                <td width="142">565</td>
                <td width="142"> </td>
                <td width="142"> </td>
                <td width="142"> </td>
                <td width="149">1115</td>
              </tr>
              <tr>
                <td width="142">54</td>
                <td width="245">AKASHI SHINTARO</td>
                <td width="258">1020</td>
                <td width="142"> </td>
                <td width="142"> </td>
                <td width="142"> </td>
                <td width="142"> </td>
                <td width="142"> </td>
                <td width="149">1020</td>
              </tr>
              <tr>
                <td width="142">55</td>
                <td width="245">KINGSLEY LONG</td>
                <td width="258"> </td>
                <td width="142"> </td>
                <td width="142">900</td>
                <td width="142"> </td>
                <td width="142"> </td>
                <td width="142"> </td>
                <td width="149">900</td>
              </tr>
              <tr>
                <td width="142">56</td>
                <td width="245"> kan king yau </td>
                <td width="258">885</td>
                <td width="142"> </td>
                <td width="142"> </td>
                <td width="142"> </td>
                <td width="142"> </td>
                <td width="142"> </td>
                <td width="149">885</td>
              </tr>
              <tr>
                <td width="142">57</td>
                <td width="245"> liu wai yin </td>
                <td width="258"> </td>
                <td width="142"> </td>
                <td width="142"> </td>
                <td width="142">710</td>
                <td width="142"> </td>
                <td width="142"> </td>
                <td width="149">710</td>
              </tr>
              <tr>
                <td width="142">58</td>
                <td width="245"> tong chun po </td>
                <td width="258"> </td>
                <td width="142"> </td>
                <td width="142">700</td>
                <td width="142"> </td>
                <td width="142"> </td>
                <td width="142"> </td>
                <td width="149">700</td>
              </tr>
              <tr>
                <td width="142" height="27">59</td>
                <td width="245">CHRIS MARRS</td>
                <td width="258">630</td>
                <td width="142"> </td>
                <td width="142"> </td>
                <td width="142"> </td>
                <td width="142"> </td>
                <td width="142"> </td>
                <td width="149">630</td>
              </tr>
              <tr>
                <td width="142" height="19">60</td>
                <td width="245">RICHARD HOOD</td>
                <td width="258">550</td>
                <td width="142"> </td>
                <td width="142"> </td>
                <td width="142"> </td>
                <td width="142"> </td>
                <td width="142"> </td>
                <td width="149">550</td>
              </tr>
              <tr>
                <td width="142" height="22">61</td>
                <td width="245"> chung siu lun </td>
                <td width="258"> </td>
                <td width="142"> </td>
                <td width="142">550</td>
                <td width="142"> </td>
                <td width="142"> </td>
                <td width="142"> </td>
                <td width="149">550</td>
              </tr>
              <tr>
                <td width="142" height="19">62</td>
                <td width="245"> ng kwan ho </td>
                <td width="258"> </td>
                <td width="142">510</td>
                <td width="142"> </td>
                <td width="142"> </td>
                <td width="142"> </td>
                <td width="142"> </td>
                <td width="149">510</td>
              </tr>
            </tbody>
          </table>
        : <table className="table table-striped">
            <tbody>
              <tr>
                <th width="72">排名</th>
                <th width="72">球手</th>
                <th width="72">錦標賽</th>
                <th width="72">第一站</th>
                <th width="72">第二站</th>
                <th width="72">第三站</th>
                <th width="72">第四站</th>
                <th width="72">邀請賽</th>
                <th width="72">總分數</th>
              </tr>
              <tr>
                <td width="72">1</td>
                <td width="72">JAMES STEWART</td>
                <td width="72">23775</td>
                <td width="72">1613.8</td>
                <td width="72">15850</td>
                <td width="72">15850</td>
                <td width="72">8475</td>
                <td width="72">16400</td>
                <td width="72">81963.8</td>
              </tr>
              <tr>
                <td width="72">2</td>
                <td width="72">鄧子鏗</td>
                <td width="72">5200</td>
                <td width="72">5425</td>
                <td width="72">10850</td>
                <td width="72">5043.3</td>
                <td width="72">15850</td>
                <td width="72">16400</td>
                <td width="72">58768.3</td>
              </tr>
              <tr>
                <td width="72">3</td>
                <td width="72">黃煥民</td>
                <td width="72">5200</td>
                <td width="72">7925</td>
                <td width="72">6100</td>
                <td width="72">3390</td>
                <td width="72">8475</td>
                <td width="72">6773</td>
                <td width="72">37863</td>
              </tr>
              <tr>
                <td width="72">4</td>
                <td width="72">鄧敏祺</td>
                <td width="72">16275</td>
                <td width="72">985</td>
                <td width="72">1110</td>
                <td width="72">10850</td>
                <td width="72"> </td>
                <td width="72"> </td>
                <td width="72">29220</td>
              </tr>
              <tr>
                <td width="72">5</td>
                <td width="72">高銘澤</td>
                <td width="72">9150</td>
                <td width="72">1100</td>
                <td width="72">3745</td>
                <td width="72">5043.3</td>
                <td width="72">4100</td>
                <td width="72">4725</td>
                <td width="72">27863.3</td>
              </tr>
              <tr>
                <td width="72">6</td>
                <td width="72">李永基</td>
                <td width="72">7395</td>
                <td width="72"> </td>
                <td width="72">2085</td>
                <td width="72">5043.3</td>
                <td width="72"> </td>
                <td width="72"> </td>
                <td width="72">14523.3</td>
              </tr>
              <tr>
                <td width="72">7</td>
                <td width="72">鄭家耀</td>
                <td width="72">3300</td>
                <td width="72">1613.75</td>
                <td width="72">2085</td>
                <td width="72">1050</td>
                <td width="72">4930</td>
                <td width="72"> </td>
                <td width="72">12978.75</td>
              </tr>
              <tr>
                <td width="72">8</td>
                <td width="72">蔡維臣</td>
                <td width="72">2255</td>
                <td width="72">870</td>
                <td width="72">2910</td>
                <td width="72">2910</td>
                <td width="72">3150</td>
                <td width="72"> </td>
                <td width="72">12095</td>
              </tr>
              <tr>
                <td width="72">9</td>
                <td width="72">鄧承志</td>
                <td width="72">2255</td>
                <td width="72">1613.8</td>
                <td width="72">4930</td>
                <td width="72">1885</td>
                <td width="72"> </td>
                <td width="72"> </td>
                <td width="72">10683.8</td>
              </tr>
              <tr>
                <td width="72">10</td>
                <td width="72">張建平</td>
                <td width="72">2827.5</td>
                <td width="72">617.5</td>
                <td width="72">2510</td>
                <td width="72">1500</td>
                <td width="72">3150</td>
                <td width="72"> </td>
                <td width="72">10605</td>
              </tr>
              <tr>
                <td width="72">11</td>
                <td width="72">廖樂天</td>
                <td width="72">790</td>
                <td width="72">785</td>
                <td width="72">1625</td>
                <td width="72">2200</td>
                <td width="72">1800</td>
                <td>1680</td>
                <td width="72">8880</td>
              </tr>
              <tr>
                <td width="72">12</td>
                <td width="72">張哲鎬</td>
                <td width="72">1065</td>
                <td width="72"> </td>
                <td width="72">825</td>
                <td width="72">1292.5</td>
                <td width="72">2226.7</td>
                <td width="72">3340</td>
                <td width="72">8749.2</td>
              </tr>
              <tr>
                <td width="72">13</td>
                <td width="72">李俊民</td>
                <td width="72">1760</td>
                <td width="72">675</td>
                <td width="72">1110</td>
                <td width="72">1292.5</td>
                <td width="72">2226.7</td>
                <td>1570</td>
                <td width="72">8634.2</td>
              </tr>
              <tr>
                <td width="72">14</td>
                <td width="72">李銘皆</td>
                <td width="72">1760</td>
                <td width="72">570</td>
                <td width="72">1440</td>
                <td width="72">990</td>
                <td width="72">1263.3</td>
                <td>1800</td>
                <td width="72">7823.3</td>
              </tr>
              <tr>
                <td width="72">15</td>
                <td width="72">宋幸文</td>
                <td width="72">2520</td>
                <td width="72">617.5</td>
                <td width="72">1110</td>
                <td width="72">1155</td>
                <td width="72">1625</td>
                <td width="72"> </td>
                <td width="72">7027.5</td>
              </tr>
              <tr>
                <td width="72">16</td>
                <td width="72">馮尚煒</td>
                <td width="72">1760</td>
                <td width="72">2465</td>
                <td width="72">700</td>
                <td width="72">770</td>
                <td width="72">1065</td>
                <td width="72"> </td>
                <td width="72">6760</td>
              </tr>
              <tr>
                <td width="72">17</td>
                <td width="72">黃鉦鈞</td>
                <td width="72">960</td>
                <td width="72">1613.75</td>
                <td width="72">610</td>
                <td width="72">1292.5</td>
                <td width="72">2226.7</td>
                <td width="72"> </td>
                <td width="72">6702.95</td>
              </tr>
              <tr>
                <td width="72">18</td>
                <td width="72">萬雄立</td>
                <td width="72">2255</td>
                <td width="72">532.5</td>
                <td width="72">1263.3</td>
                <td width="72">1110</td>
                <td width="72">1155</td>
                <td width="72"> </td>
                <td width="72">6315.8</td>
              </tr>
              <tr>
                <td width="72">19</td>
                <td width="72">馬金發</td>
                <td width="72">1890</td>
                <td width="72">870</td>
                <td width="72">1263.3</td>
                <td width="72">1680</td>
                <td width="72"> </td>
                <td width="72"> </td>
                <td width="72">5703.3</td>
              </tr>
              <tr>
                <td width="72">20</td>
                <td width="72">鄭德謙</td>
                <td width="72">1065</td>
                <td width="72">450</td>
                <td width="72">1440</td>
                <td width="72">1080</td>
                <td width="72">1263.3</td>
                <td width="72"> </td>
                <td width="72">5298.3</td>
              </tr>
              <tr>
                <td width="72">21</td>
                <td width="72">黃海健</td>
                <td width="72">570</td>
                <td width="72">1080</td>
                <td width="72">1110</td>
                <td width="72">2510</td>
                <td width="72"> </td>
                <td width="72"> </td>
                <td width="72">5270</td>
              </tr>
              <tr>
                <td width="72">22</td>
                <td width="72">DOMINIQUE BOULET</td>
                <td width="72">5200</td>
                <td width="72"> </td>
                <td width="72"> </td>
                <td width="72"> </td>
                <td width="72"> </td>
                <td width="72"> </td>
                <td width="72">5200</td>
              </tr>
              <tr>
                <td width="72">23</td>
                <td width="72">ANDREW GOOD</td>
                <td width="72">2070</td>
                <td width="72">3050</td>
                <td width="72"> </td>
                <td width="72"> </td>
                <td width="72"> </td>
                <td width="72"> </td>
                <td width="72">5120</td>
              </tr>
              <tr>
                <td width="72">24</td>
                <td width="72">馮偉權</td>
                <td width="72">885</td>
                <td width="72"> </td>
                <td width="72">790</td>
                <td width="72">1440</td>
                <td width="72">1440</td>
                <td width="72"> </td>
                <td width="72">4555</td>
              </tr>
              <tr>
                <td width="72">25</td>
                <td width="72">李國恩</td>
                <td width="72">840</td>
                <td width="72">487.5</td>
                <td width="72">750</td>
                <td width="72">1155</td>
                <td width="72">1110</td>
                <td width="72"> </td>
                <td width="72">4342.5</td>
              </tr>
              <tr>
                <td width="72">26</td>
                <td width="72">鄧偉俊</td>
                <td width="72">1980</td>
                <td width="72">720</td>
                <td width="72">1625</td>
                <td width="72"> </td>
                <td width="72"> </td>
                <td width="72"> </td>
                <td width="72">4325</td>
              </tr>
              <tr>
                <td width="72">27</td>
                <td width="72">GRANT GIBSON</td>
                <td width="72">2827.5</td>
                <td width="72"> </td>
                <td width="72">1440</td>
                <td width="72"> </td>
                <td width="72"> </td>
                <td width="72"> </td>
                <td width="72">4267.5</td>
              </tr>
              <tr>
                <td width="72">28</td>
                <td width="72">楊沿泰</td>
                <td width="72">690</td>
                <td width="72">750</td>
                <td width="72">750</td>
                <td width="72">770</td>
                <td width="72">1005</td>
                <td width="72"> </td>
                <td width="72">3965</td>
              </tr>
              <tr>
                <td width="72">29</td>
                <td width="72">宋有祿</td>
                <td width="72">1665</td>
                <td width="72"> </td>
                <td width="72">990</td>
                <td width="72">1292.5</td>
                <td width="72"> </td>
                <td width="72"> </td>
                <td width="72">3947.5</td>
              </tr>
              <tr>
                <td width="72">30</td>
                <td width="72">簡栢堅</td>
                <td width="72">790</td>
                <td width="72">570</td>
                <td width="72">900</td>
                <td width="72">730</td>
                <td width="72">900</td>
                <td width="72"> </td>
                <td width="72">3890</td>
              </tr>
              <tr>
                <td width="72">31</td>
                <td width="72">BRAD SCHADEWITZ</td>
                <td width="72">3765</td>
                <td width="72"> </td>
                <td width="72"> </td>
                <td width="72"> </td>
                <td width="72"> </td>
                <td width="72"> </td>
                <td width="72">3765</td>
              </tr>
              <tr>
                <td width="72">32</td>
                <td width="72">KEVIN HIND</td>
                <td width="72"> </td>
                <td width="72"> </td>
                <td width="72">3745</td>
                <td width="72"> </td>
                <td width="72"> </td>
                <td width="72"> </td>
                <td width="72">3745</td>
              </tr>
              <tr>
                <td width="72">33</td>
                <td width="72">MARK MOSSIP</td>
                <td width="72">730</td>
                <td width="72">532.5</td>
                <td width="72">825</td>
                <td width="72"> </td>
                <td width="72">1625</td>
                <td width="72"> </td>
                <td width="72">3712.5</td>
              </tr>
              <tr>
                <td width="72">34</td>
                <td width="72">蕭金標</td>
                <td width="72">960</td>
                <td width="72"> </td>
                <td width="72">650</td>
                <td width="72">930</td>
                <td width="72">1155</td>
                <td width="72"> </td>
                <td width="72">3695</td>
              </tr>
              <tr>
                <td width="72">35</td>
                <td width="72">沈興南</td>
                <td width="72">630</td>
                <td width="72">450</td>
                <td width="72">565</td>
                <td width="72">990</td>
                <td width="72">960</td>
                <td width="72"> </td>
                <td width="72">3595</td>
              </tr>
              <tr>
                <td width="72">36</td>
                <td width="72">馮偉傑</td>
                <td width="72"> </td>
                <td width="72">675</td>
                <td width="72">1263.3</td>
                <td width="72">1570</td>
                <td width="72"> </td>
                <td width="72"> </td>
                <td width="72">3508.3</td>
              </tr>
              <tr>
                <td width="72">37</td>
                <td width="72">梁紹才</td>
                <td width="72">730</td>
                <td width="72"> </td>
                <td width="72">565</td>
                <td width="72">900</td>
                <td width="72">1263.3</td>
                <td width="72"> </td>
                <td width="72">3458.3</td>
              </tr>
              <tr>
                <td width="72">38</td>
                <td width="72">李錦泉</td>
                <td width="72"> </td>
                <td width="72"> </td>
                <td width="72">1110</td>
                <td width="72">1885</td>
                <td width="72"> </td>
                <td width="72"> </td>
                <td width="72">2995</td>
              </tr>
              <tr>
                <td width="72">39</td>
                <td width="72">李應東</td>
                <td width="72">590</td>
                <td width="72"> </td>
                <td width="72">550</td>
                <td width="72">690</td>
                <td width="72">930</td>
                <td width="72"> </td>
                <td width="72">2760</td>
              </tr>
              <tr>
                <td width="72">40</td>
                <td width="72">JAMES ROBBINS&nbsp;</td>
                <td width="72">550</td>
                <td width="72"> </td>
                <td width="72">650</td>
                <td width="72">670</td>
                <td width="72">840</td>
                <td width="72"> </td>
                <td width="72">2710</td>
              </tr>
              <tr>
                <td width="72">41</td>
                <td width="72">黎煒健</td>
                <td width="72">670</td>
                <td width="72"> </td>
                <td width="72">750</td>
                <td width="72"> </td>
                <td width="72">1065</td>
                <td width="72"> </td>
                <td width="72">2485</td>
              </tr>
              <tr>
                <td width="72">42</td>
                <td width="72">李永明</td>
                <td width="72"> </td>
                <td width="72"> </td>
                <td width="72">565</td>
                <td width="72">870</td>
                <td width="72">1005</td>
                <td width="72"> </td>
                <td width="72">2440</td>
              </tr>
              <tr>
                <td width="72">43</td>
                <td width="72">李文樂</td>
                <td width="72">960</td>
                <td width="72">487.5</td>
                <td width="72">900</td>
                <td width="72"> </td>
                <td width="72"> </td>
                <td width="72"> </td>
                <td width="72">2347.5</td>
              </tr>
              <tr>
                <td width="72">44</td>
                <td width="72">alFREDo MORALES</td>
                <td width="72"> </td>
                <td width="72"> </td>
                <td width="72"> </td>
                <td width="72">825</td>
                <td width="72">1440</td>
                <td width="72"> </td>
                <td width="72">2265</td>
              </tr>
              <tr>
                <td width="72">45</td>
                <td width="72">蘇石民</td>
                <td width="72"> </td>
                <td width="72"> </td>
                <td width="72">550</td>
                <td width="72">825</td>
                <td width="72">870</td>
                <td width="72"> </td>
                <td width="72">2245</td>
              </tr>
              <tr>
                <td width="72">46</td>
                <td width="72">鄧澄濱</td>
                <td width="72"> </td>
                <td width="72"> </td>
                <td width="72"> </td>
                <td width="72">770</td>
                <td width="72">1440</td>
                <td width="72"> </td>
                <td width="72">2210</td>
              </tr>
              <tr>
                <td width="72">47</td>
                <td width="72">PAUL RILEY</td>
                <td width="72">730</td>
                <td width="72">420</td>
                <td width="72">990</td>
                <td width="72"> </td>
                <td width="72"> </td>
                <td width="72"> </td>
                <td width="72">2140</td>
              </tr>
              <tr>
                <td width="72">48</td>
                <td width="72">蔣國良</td>
                <td width="72">630</td>
                <td width="72">450</td>
                <td width="72">990</td>
                <td width="72"> </td>
                <td width="72"> </td>
                <td width="72"> </td>
                <td width="72">2070</td>
              </tr>
              <tr>
                <td width="72">49</td>
                <td width="72">許灝文</td>
                <td width="72"> </td>
                <td width="72"> </td>
                <td width="72">1800</td>
                <td width="72"> </td>
                <td width="72"> </td>
                <td width="72"> </td>
                <td width="72">1800</td>
              </tr>
              <tr>
                <td>50</td>
                <td width="72">shawn morley </td>
                <td>&nbsp;</td>
                <td>&nbsp;</td>
                <td>&nbsp;</td>
                <td>&nbsp;</td>
                <td>1680</td>
                <td>&nbsp;</td>
                <td>1680</td>
              </tr>
              <tr>
                <td width="72">51</td>
                <td width="72">郭永昌</td>
                <td width="72"> </td>
                <td width="72">570</td>
                <td width="72"> </td>
                <td width="72">990</td>
                <td width="72"> </td>
                <td width="72"> </td>
                <td width="72">1560</td>
              </tr>
              <tr>
                <td width="72">52</td>
                <td width="72">廖炳光</td>
                <td width="72">790</td>
                <td width="72"> </td>
                <td width="72">650</td>
                <td width="72"> </td>
                <td width="72"> </td>
                <td width="72"> </td>
                <td width="72">1440</td>
              </tr>
              <tr>
                <td width="72">53</td>
                <td width="72">陳煒鴻</td>
                <td width="72">550</td>
                <td width="72"> </td>
                <td width="72">565</td>
                <td width="72"> </td>
                <td width="72"> </td>
                <td width="72"> </td>
                <td width="72">1115</td>
              </tr>
              <tr>
                <td width="72">54</td>
                <td width="72">AKASHI SHINTARO</td>
                <td width="72">1020</td>
                <td width="72"> </td>
                <td width="72"> </td>
                <td width="72"> </td>
                <td width="72"> </td>
                <td width="72"> </td>
                <td width="72">1020</td>
              </tr>
              <tr>
                <td width="72">55</td>
                <td width="72">KINGSLEY LONG</td>
                <td width="72"> </td>
                <td width="72"> </td>
                <td width="72">900</td>
                <td width="72"> </td>
                <td width="72"> </td>
                <td width="72"> </td>
                <td width="72">900</td>
              </tr>
              <tr>
                <td width="72">56</td>
                <td width="72">簡敬有</td>
                <td width="72">885</td>
                <td width="72"> </td>
                <td width="72"> </td>
                <td width="72"> </td>
                <td width="72"> </td>
                <td width="72"> </td>
                <td width="72">885</td>
              </tr>
              <tr>
                <td width="72">57</td>
                <td width="72">廖煒賢</td>
                <td width="72"> </td>
                <td width="72"> </td>
                <td width="72"> </td>
                <td width="72">710</td>
                <td width="72"> </td>
                <td width="72"> </td>
                <td width="72">710</td>
              </tr>
              <tr>
                <td width="72">58</td>
                <td width="72">唐進寶</td>
                <td width="72"> </td>
                <td width="72"> </td>
                <td width="72">700</td>
                <td width="72"> </td>
                <td width="72"> </td>
                <td width="72"> </td>
                <td width="72">700</td>
              </tr>
              <tr>
                <td width="72">59</td>
                <td width="72">CHRIS MARRS</td>
                <td width="72">630</td>
                <td width="72"> </td>
                <td width="72"> </td>
                <td width="72"> </td>
                <td width="72"> </td>
                <td width="72"> </td>
                <td width="72">630</td>
              </tr>
              <tr>
                <td width="72">t60</td>
                <td width="72">RICHARD HOOD</td>
                <td width="72">550</td>
                <td width="72"> </td>
                <td width="72"> </td>
                <td width="72"> </td>
                <td width="72"> </td>
                <td width="72"> </td>
                <td width="72">550</td>
              </tr>
              <tr>
                <td width="72" height="22">t60</td>
                <td width="72">鍾兆倫</td>
                <td width="72"> </td>
                <td width="72"> </td>
                <td width="72">550</td>
                <td width="72"> </td>
                <td width="72"> </td>
                <td width="72"> </td>
                <td width="72">550</td>
              </tr>
              <tr>
                <td width="72" height="19">62</td>
                <td width="72">吳坤河</td>
                <td width="72"> </td>
                <td width="72">510</td>
                <td width="72"> </td>
                <td width="72"> </td>
                <td width="72"> </td>
                <td width="72"> </td>
                <td width="72">510</td>
              </tr>
            </tbody>
          </table>}
      <h3>Ladies Division</h3>

      {props.lang === 'en'
        ? <table className="table table-striped">
            <tbody>
              <tr>
                <th width="51" scope="col">POS</th>
                <th width="177" scope="col">PLAYER</th>
                <th width="117" title="19-20 April, 2010, KSC Public Golf Course - North Course" scope="col">LEG 1</th>
                <th width="110" title="19-20 April, 2010, KSC Public Golf Course - North Course" scope="col">LEG 2</th>
                <th width="97" title="19-20 April, 2010, KSC Public Golf Course - North Course" scope="col">LEG 3</th>
                <th width="99" title="19-20 April, 2010, KSC Public Golf Course - North Course" scope="col">TOAL</th>
              </tr>
              <tr>
                {' '}<td height="0">1</td>
                <td width="177">Vicki Ho</td>
                <td width="117">6100</td>
                <td width="72">15850</td>
                <td width="72">6100</td>
                <td width="72">28050</td>
              </tr>
              <tr>
                {' '}<td height="0">2</td>
                <td width="177">Pony Leung</td>
                <td width="117">10850</td>
                <td width="72"> </td>
                <td width="72">15850</td>
                <td width="72">26700</td>
              </tr>
              <tr>
                {' '}<td height="0">3</td>
                <td width="177">Jannet    Sheng</td>
                <td width="117">4930</td>
                <td width="72">10850</td>
                <td width="72">10850</td>
                <td width="72">26630</td>
              </tr>
              <tr>
                {' '}<td height="0">4</td>
                <td width="177">Wong Lai</td>
                <td width="117">15850</td>
                <td width="72"> </td>
                <td width="72"> </td>
                <td width="72">15850</td>
              </tr>
              <tr>
                {' '}<td height="0">5</td>
                <td>Jacqueline Leung</td>
                <td width="117">4100</td>
                <td width="72">4100</td>
                <td width="72">4930</td>
                <td width="72">13130</td>
              </tr>
              <tr>
                {' '}<td height="0">6</td>
                <td>Melody Chan</td>
                <td width="117">2510</td>
                <td width="72">6100</td>
                <td width="72">4100</td>
                <td width="72">12710</td>
              </tr>
              <tr>
                {' '}<td height="0">7</td>
                <td>Jolia Lo</td>
                <td width="117"> </td>
                <td width="72">4930</td>
                <td width="72">2910</td>
                <td width="72">7840</td>
              </tr>
              <tr>
                {' '}<td height="0">8</td>
                <td width="177">sandy Tao</td>
                <td width="117"> </td>
                <td width="72">3390</td>
                <td width="72"> </td>
                <td width="72">3390</td>
              </tr>
              <tr>
                {' '}<td height="0">T9</td>
                <td width="177">Annie Lau</td>
                <td width="117">3150</td>
                <td width="72"> </td>
                <td width="72"> </td>
                <td width="72">3150</td>
              </tr>
              <tr>
                <td height="0">T9</td>
                <td width="177">Elsa Tang</td>
                <td width="117">3150</td>
                <td width="72"> </td>
                <td width="72"> </td>
                <td width="72">3150</td>
              </tr>
              <tr>
                <td height="0">11</td>
                <td width="177">Sethi    Urvashi</td>
                <td width="117"> </td>
                <td width="72"> </td>
                <td width="72">2910</td>
                <td width="72">2910</td>
              </tr>
              <tr>
                <td height="0">12</td>
                <td width="177">Bonnie    Ngai</td>
                <td width="117">2200</td>
                <td width="72"> </td>
                <td width="72"> </td>
                <td width="72">2200</td>
              </tr>
              <tr>
                <td height="0">13</td>
                <td width="177">Betty Ng</td>
                <td width="117">1970</td>
                <td width="72"> </td>
                <td width="72"> </td>
                <td width="72">1970</td>
              </tr>
            </tbody>
          </table>
        : <table className="table table-striped">
            <tbody>
              <tr>
                <th width="69" scope="col">排名</th>
                <th width="161" scope="col">球手</th>
                <th width="114">第1站</th>
                <th width="107">第2站</th>
                <th width="105">第3站</th>
                <th width="95">總分</th>
              </tr>
              <tr>
                <td>1</td>
                <td width="161">何美迪</td>
                <td width="114">6100</td>
                <td width="72">15850</td>
                <td width="72">6100</td>
                <td width="72">28050</td>
              </tr>
              <tr>
                <td>2</td>
                <td width="161">梁寶兒</td>
                <td width="114">10850</td>
                <td width="72"> </td>
                <td width="72">15850</td>
                <td width="72">26700</td>
              </tr>
              <tr>
                <td>3</td>
                <td width="161">盛秋燕</td>
                <td width="114">4930</td>
                <td width="72">10850</td>
                <td width="72">10850</td>
                <td width="72">26630</td>
              </tr>
              <tr>
                <td>4</td>
                <td width="161">王麗</td>
                <td width="114">15850</td>
                <td width="72"> </td>
                <td width="72"> </td>
                <td width="72">15850</td>
              </tr>
              <tr>
                <td>5</td>
                <td width="161">粱嘉韻</td>
                <td width="114">4100</td>
                <td width="72">4100</td>
                <td width="72">4930</td>
                <td width="72">13130</td>
              </tr>
              <tr>
                <td>6</td>
                <td width="161">陳韻如</td>
                <td width="114">2510</td>
                <td width="72">6100</td>
                <td width="72">4100</td>
                <td width="72">12710</td>
              </tr>
              <tr>
                <td>7</td>
                <td width="161">羅潔凝</td>
                <td width="114"> </td>
                <td width="72">4930</td>
                <td width="72">2910</td>
                <td width="72">7840</td>
              </tr>
              <tr>
                <td>8</td>
                <td width="161">涂玉華</td>
                <td width="114"> </td>
                <td width="72">3390</td>
                <td width="72"> </td>
                <td width="72">3390</td>
              </tr>
              <tr>
                <td>T9</td>
                <td width="161">劉朗琪</td>
                <td width="114">3150</td>
                <td width="72"> </td>
                <td width="72"> </td>
                <td width="72">3150</td>
              </tr>
              <tr>
                <td>T9</td>
                <td width="161">鄧睎文</td>
                <td width="114">3150</td>
                <td width="72"> </td>
                <td width="72"> </td>
                <td width="72">3150</td>
              </tr>
              <tr>
                <td>11</td>
                <td width="161">Sethi    Urvashi</td>
                <td width="114"> </td>
                <td width="72"> </td>
                <td width="72">2910</td>
                <td width="72">2910</td>
              </tr>
              <tr>
                <td>12</td>
                <td width="161">倪瑞蓮</td>
                <td width="114">2200</td>
                <td width="72"> </td>
                <td width="72"> </td>
                <td width="72">2200</td>
              </tr>
              <tr>
                <td>13</td>
                <td width="161">吳容歡</td>
                <td width="114">1970</td>
                <td width="72"> </td>
                <td width="72"> </td>
                <td width="72">1970</td>
              </tr>
            </tbody>
          </table>}
      <h3>Senior Division</h3>
      {props.lang === 'en'
        ? <table className="table table-striped">
            <tbody>
              <tr>
                <th width="51">POS</th>
                <th width="99">PLAYER</th>
                <th width="55">LEG 1</th>
                <th width="55">LEG 2</th>
                <th width="60">LEG 3</th>
                <th width="56">LEG 4</th>
                <th width="56">LEG 5</th>
                <th width="119">YINLI&NINE EAGLES</th>
                <th width="119">LEG 6 </th>
                <th width="71">TOTAL</th>
              </tr>
              <tr>
                <td width="51">1</td>
                <td width="99">TANG MAN KEE</td>
                <td width="55">15850</td>
                <td width="55">5425</td>
                <td width="60">15850</td>
                <td width="56">15850</td>
                <td width="56"> </td>
                <td>20020</td>
                <td width="119">15850</td>
                <td width="71">88845</td>
              </tr>
              <tr>
                <td width="51">2</td>
                <td width="99">SUNG Sing</td>
                <td width="55">4930</td>
                <td width="55"> </td>
                <td width="60">10850</td>
                <td width="56">10850</td>
                <td>6100</td>
                <td>6773</td>
                <td width="119">4515</td>
                <td width="71">44018</td>
              </tr>
              <tr>
                <td width="51">3</td>
                <td width="99">TANG SHU WING</td>
                <td width="55">4100</td>
                <td width="55">3050</td>
                <td width="60">4630</td>
                <td width="56">1585.3</td>
                <td>3745</td>
                <td>16275</td>
                <td width="119">2226</td>
                <td width="71">35611.3</td>
              </tr>
              <tr>
                <td width="51">4</td>
                <td width="99">DANNY KAN</td>
                <td width="55">10850</td>
                <td width="55">2257.5</td>
                <td width="60"> </td>
                <td width="56">1585.3</td>
                <td>10850</td>
                <td>3765</td>
                <td width="119">1683</td>
                <td width="71">30990.8</td>
              </tr>
              <tr>
                <td width="51">5</td>
                <td width="99">tong chun po</td>
                <td width="55">1350</td>
                <td width="55">942.5</td>
                <td width="60">1380</td>
                <td width="56">2540</td>
                <td width="56">15850</td>
                <td width="119">3128</td>
                <td width="119">1683</td>
                <td width="71">26873.5</td>
              </tr>
              <tr>
                <td width="51">6</td>
                <td width="99">MICHAEL KAN</td>
                <td width="55">6100</td>
                <td width="55"> </td>
                <td width="60">4630</td>
                <td width="56">5515</td>
                <td>3745</td>
                <td width="119">3128</td>
                <td width="119">3150</td>
                <td width="71">26268</td>
              </tr>
              <tr>
                <td>7</td>
                <td>wiilliam fung</td>
                <td>2200</td>
                <td>1695</td>
                <td>2085</td>
                <td>1885</td>
                <td> </td>
                <td>9150</td>
                <td>6100</td>
                <td>23115</td>
              </tr>
              <tr>
                <td width="51">8</td>
                <td width="99">SIU KAM PIU</td>
                <td width="55">1625</td>
                <td width="55">7925</td>
                <td width="60">4630</td>
                <td width="56">1290</td>
                <td width="56"> </td>
                <td>2700</td>
                <td width="119">1210</td>
                <td width="71">19380</td>
              </tr>
              <tr>
                <td width="51">9</td>
                <td width="99">FRED MORALES</td>
                <td width="55">3390</td>
                <td width="55">767.5</td>
                <td width="60">1740</td>
                <td width="56">5515</td>
                <td>2910</td>
                <td width="119">1760</td>
                <td width="119">1170</td>
                <td width="71">17252.5</td>
              </tr>
              <tr>
                <td>10</td>
                <td>so sek man</td>
                <td> </td>
                <td> </td>
                <td> </td>
                <td>3390</td>
                <td>1680</td>
                <td>1110</td>
                <td>10850</td>
                <td>17030</td>
              </tr>
              <tr>
                <td width="51">11</td>
                <td width="99">STANLEY LEUNG</td>
                <td width="55">1800</td>
                <td width="55">942.5</td>
                <td width="60">4630</td>
                <td width="56">2540</td>
                <td width="56"> </td>
                <td width="119">2321</td>
                <td width="119">4515</td>
                <td width="71">16748.5</td>
              </tr>
              <tr>
                <td width="51">12</td>
                <td width="99">mancent man</td>
                <td width="55"> </td>
                <td width="55">1255</td>
                <td width="60">2910</td>
                <td width="56">4100</td>
                <td>1800</td>
                <td width="119">2025</td>
                <td width="119">2226</td>
                <td width="71">14316</td>
              </tr>
              <tr>
                <td>13</td>
                <td>DAniel liu</td>
                <td>1350</td>
                <td>2257.5</td>
                <td>1535</td>
                <td>1585.3</td>
                <td>1500</td>
                <td>1020</td>
                <td>3150</td>
                <td>12397.8</td>
              </tr>
              <tr>
                <td width="51">14</td>
                <td width="99">lee kwok yan</td>
                <td width="55"> </td>
                <td width="55"> </td>
                <td width="60"> </td>
                <td width="56">1885</td>
                <td>2200</td>
                <td width="119">4725</td>
                <td width="119">1350</td>
                <td width="71">10160</td>
              </tr>
              <tr>
                <td>15</td>
                <td>mean lee</td>
                <td> </td>
                <td> </td>
                <td> </td>
                <td>2540</td>
                <td>2510</td>
                <td>2321</td>
                <td>2226</td>
                <td>9597</td>
              </tr>
              <tr>
                <td>16</td>
                <td>wong ching kwan</td>
                <td> </td>
                <td> </td>
                <td>2510</td>
                <td> </td>
                <td>4930</td>
                <td>2321</td>
                <td>&nbsp;</td>
                <td>9761</td>
              </tr>
              <tr>
                <td>17</td>
                <td>alex tang</td>
                <td>1625</td>
                <td>1455</td>
                <td>1320</td>
                <td>1290</td>
                <td>1970</td>
                <td> </td>
                <td>1500</td>
                <td>9160</td>
              </tr>
              <tr>
                <td>18</td>
                <td>taylor chiang</td>
                <td>1440</td>
                <td>767.6</td>
                <td>2085</td>
                <td>1440</td>
                <td> </td>
                <td>1760</td>
                <td>1350</td>
                <td>8842.6</td>
              </tr>
              <tr>
                <td>19</td>
                <td>tony lee</td>
                <td>1500</td>
                <td> </td>
                <td>1535</td>
                <td>1210</td>
                <td>1440</td>
                <td>1760</td>
                <td>1140</td>
                <td>8585</td>
              </tr>
              <tr>
                <td width="51">20</td>
                <td width="99">tommy kan</td>
                <td width="55">1970</td>
                <td width="55">1100</td>
                <td width="60">1740</td>
                <td width="56">1155</td>
                <td width="56"> </td>
                <td width="119">2025</td>
                <td width="119">&nbsp;</td>
                <td width="71">7990</td>
              </tr>
              <tr>
                <td width="51">21</td>
                <td width="99">billy tam</td>
                <td width="55">2510</td>
                <td width="55"> </td>
                <td width="60">1260</td>
                <td width="56"> </td>
                <td width="56"> </td>
                <td width="119">2321</td>
                <td width="119">1260</td>
                <td width="71">7351</td>
              </tr>
              <tr>
                <td>22</td>
                <td>tang shu wa</td>
                <td> </td>
                <td> </td>
                <td> </td>
                <td>1380</td>
                <td>1570</td>
                <td> </td>
                <td>1440</td>
                <td>4390</td>
              </tr>
              <tr>
                <td width="51">23</td>
                <td width="99">betty ng</td>
                <td width="55"> </td>
                <td width="55">720</td>
                <td width="60"> </td>
                <td width="56">1110</td>
                <td>1320</td>
                <td width="119"> </td>
                <td width="119">1080</td>
                <td width="71">4230</td>
              </tr>
              <tr>
                <td>24</td>
                <td>lau kwong hon</td>
                <td>2910</td>
                <td> </td>
                <td> </td>
                <td> </td>
                <td> </td>
                <td>1080</td>
                <td>&nbsp;</td>
                <td>3990</td>
              </tr>
              <tr>
                <td width="51">25</td>
                <td width="99">ALFONSO MORALES</td>
                <td width="55"> </td>
                <td width="55"> </td>
                <td width="60"> </td>
                <td width="56">1080</td>
                <td>1380</td>
                <td width="119"> </td>
                <td width="119">&nbsp;</td>
                <td width="71">2460</td>
              </tr>
              <tr>
                <td width="51">26</td>
                <td width="99">alain liu</td>
                <td width="55">1260</td>
                <td width="55"> </td>
                <td width="60"> </td>
                <td width="56"> </td>
                <td width="56"> </td>
                <td width="119">1050</td>
                <td width="119">&nbsp;</td>
                <td width="71">2310</td>
              </tr>
              <tr>
                <td>27</td>
                <td>jackson kam</td>
                <td> </td>
                <td> </td>
                <td> </td>
                <td>1155</td>
                <td> </td>
                <td> </td>
                <td>1110</td>
                <td>2265</td>
              </tr>
              <tr>
                <td width="51">28</td>
                <td width="99">Jack Fung</td>
                <td width="55"> </td>
                <td width="55"> </td>
                <td width="60"> </td>
                <td width="56"> </td>
                <td width="56"> </td>
                <td width="119">1890</td>
                <td width="119">&nbsp;</td>
                <td width="71">1890</td>
              </tr>
              <tr>
                <td width="51">29</td>
                <td width="99">JAMES ROBBINS</td>
                <td width="55"> </td>
                <td width="55"> </td>
                <td width="60">1440</td>
                <td width="56"> </td>
                <td width="56"> </td>
                <td width="119"> </td>
                <td width="119">&nbsp;</td>
                <td width="71">1440</td>
              </tr>
            </tbody>
          </table>
        : <table className="table table-striped">
            <tbody>
              <tr>
                <td width="55"><strong>排名</strong></td>
                <td width="75"><strong>球手</strong></td>
                <td width="67"><strong>第1站</strong></td>
                <td width="67"><strong>第2站</strong></td>
                <td width="64"><strong>第3站</strong></td>
                <td width="60"><strong>第4站</strong></td>
                <td width="63"><strong>第5站</strong></td>
                <td width="80"><strong>邀請賽</strong></td>
                <td width="61"><strong>第6站</strong></td>
                <td width="71"><strong>總分數</strong></td>
              </tr>
              <tr>
                <td width="55">1</td>
                <td width="75">鄧敏祺</td>
                <td width="67">15850</td>
                <td width="67">5425</td>
                <td width="64">15850</td>
                <td width="60">15850</td>
                <td width="63"> </td>
                <td>20020</td>
                <td width="61">15850</td>
                <td width="71">88845</td>
              </tr>
              <tr>
                <td width="55">2</td>
                <td width="75">宋有祿</td>
                <td width="67">4930</td>
                <td width="67"> </td>
                <td width="64">10850</td>
                <td width="60">10850</td>
                <td>6100</td>
                <td>6773</td>
                <td width="61">4515</td>
                <td width="71">44018</td>
              </tr>
              <tr>
                <td width="55">3</td>
                <td width="75">鄧樹榮</td>
                <td width="67">4100</td>
                <td width="67">3050</td>
                <td width="64">4630</td>
                <td width="60">1585.3</td>
                <td>3745</td>
                <td>16275</td>
                <td width="61">2226</td>
                <td width="71">35611.3</td>
              </tr>
              <tr>
                <td width="55">4</td>
                <td width="75">簡栢堅</td>
                <td width="67">10850</td>
                <td width="67">2257.5</td>
                <td width="64"> </td>
                <td width="60">1585.3</td>
                <td>10850</td>
                <td>3765</td>
                <td width="61">1683</td>
                <td width="71">30990.8</td>
              </tr>
              <tr>
                <td width="55">5</td>
                <td width="75">唐進寶</td>
                <td width="67">1350</td>
                <td width="67">942.5</td>
                <td width="64">1380</td>
                <td width="60">2540</td>
                <td width="63">15850</td>
                <td width="80">3128</td>
                <td width="61">1683</td>
                <td width="71">26873.5</td>
              </tr>
              <tr>
                <td width="55">6</td>
                <td width="75">簡敬有</td>
                <td width="67">6100</td>
                <td width="67"> </td>
                <td width="64">4630</td>
                <td width="60">5515</td>
                <td>3745</td>
                <td width="80">3128</td>
                <td width="61">3150</td>
                <td width="71">26268</td>
              </tr>
              <tr>
                <td>7</td>
                <td>馮偉權</td>
                <td>2200</td>
                <td>1695</td>
                <td>2085</td>
                <td>1885</td>
                <td> </td>
                <td>9150</td>
                <td>6100</td>
                <td>23115</td>
              </tr>
              <tr>
                <td width="55">8</td>
                <td width="75">蕭金標</td>
                <td width="67">1625</td>
                <td width="67">7925</td>
                <td width="64">4630</td>
                <td width="60">1290</td>
                <td width="63"> </td>
                <td>2700</td>
                <td width="61">1210</td>
                <td width="71">19380</td>
              </tr>
              <tr>
                <td width="55">9</td>
                <td width="75">FRED MORALES</td>
                <td width="67">3390</td>
                <td width="67">767.5</td>
                <td width="64">1740</td>
                <td width="60">5515</td>
                <td>2910</td>
                <td width="80">1760</td>
                <td width="61">1170</td>
                <td width="71">17252.5</td>
              </tr>
              <tr>
                <td>10</td>
                <td>蘇石民</td>
                <td> </td>
                <td> </td>
                <td> </td>
                <td>3390</td>
                <td>1680</td>
                <td>1110</td>
                <td>10850</td>
                <td>17030</td>
              </tr>
              <tr>
                <td width="55">11</td>
                <td width="75">梁紹才</td>
                <td width="67">1800</td>
                <td width="67">942.5</td>
                <td width="64">4630</td>
                <td width="60">2540</td>
                <td width="63"> </td>
                <td width="80">2321</td>
                <td width="61">4515</td>
                <td width="71">16748.5</td>
              </tr>
              <tr>
                <td width="55">12</td>
                <td width="75">萬雄立</td>
                <td width="67"> </td>
                <td width="67">1255</td>
                <td width="64">2910</td>
                <td width="60">4100</td>
                <td>1800</td>
                <td width="80">2025</td>
                <td width="61">2226</td>
                <td width="71">14316</td>
              </tr>
              <tr>
                <td>13</td>
                <td>廖炳光</td>
                <td>1350</td>
                <td>2257.5</td>
                <td>1535</td>
                <td>1585.3</td>
                <td>1500</td>
                <td>1020</td>
                <td>3150</td>
                <td>12397.8</td>
              </tr>
              <tr>
                <td>14</td>
                <td>李國恩</td>
                <td> </td>
                <td> </td>
                <td> </td>
                <td>1885</td>
                <td>2200</td>
                <td>4725</td>
                <td>1350</td>
                <td>10160</td>
              </tr>
              <tr>
                <td>15</td>
                <td>黃鉦鈞</td>
                <td> </td>
                <td> </td>
                <td>2510</td>
                <td> </td>
                <td>4930</td>
                <td>2321</td>
                <td>&nbsp;</td>
                <td>9761</td>
              </tr>
              <tr>
                <td>16</td>
                <td>李永明</td>
                <td> </td>
                <td> </td>
                <td> </td>
                <td>2540</td>
                <td>2510</td>
                <td>2321</td>
                <td>2226</td>
                <td>9597</td>
              </tr>
              <tr>
                <td width="55">17</td>
                <td width="75">鄧澄濱</td>
                <td width="67">1625</td>
                <td width="67">1455</td>
                <td width="64">1320</td>
                <td width="60">1290</td>
                <td>1970</td>
                <td width="80"> </td>
                <td width="61">1500</td>
                <td width="71">9160</td>
              </tr>
              <tr>
                <td width="55">18</td>
                <td width="75">蔣國良</td>
                <td width="67">1440</td>
                <td width="67">767.6</td>
                <td width="64">2085</td>
                <td width="60">1440</td>
                <td width="63"> </td>
                <td width="80">1760</td>
                <td width="61">1350</td>
                <td width="71">8842.6</td>
              </tr>
              <tr>
                <td width="55">19</td>
                <td width="75">李應東</td>
                <td width="67">1500</td>
                <td width="67"> </td>
                <td width="64">1535</td>
                <td width="60">1210</td>
                <td>1440</td>
                <td width="80">1760</td>
                <td width="61">1140</td>
                <td width="71">8585</td>
              </tr>
              <tr>
                <td>20</td>
                <td>簡鏡棠</td>
                <td>1970</td>
                <td>1100</td>
                <td>1740</td>
                <td>1155</td>
                <td> </td>
                <td>2025</td>
                <td>&nbsp;</td>
                <td>7990</td>
              </tr>
              <tr>
                <td width="55">21</td>
                <td width="75">譚文義</td>
                <td width="67">2510</td>
                <td width="67"> </td>
                <td width="64">1260</td>
                <td width="60"> </td>
                <td width="63"> </td>
                <td width="80">2321</td>
                <td width="61">1260</td>
                <td width="71">7351</td>
              </tr>
              <tr>
                <td>22</td>
                <td>鄧樹華</td>
                <td> </td>
                <td> </td>
                <td> </td>
                <td>1380</td>
                <td>1570</td>
                <td> </td>
                <td>1440</td>
                <td>4390</td>
              </tr>
              <tr>
                <td>23</td>
                <td>吳容歡</td>
                <td> </td>
                <td>720</td>
                <td> </td>
                <td>1110</td>
                <td>1320</td>
                <td> </td>
                <td>1080</td>
                <td>4230</td>
              </tr>
              <tr>
                <td width="55">24</td>
                <td width="75">劉光漢</td>
                <td width="67">2910</td>
                <td width="67"> </td>
                <td width="64"> </td>
                <td width="60"> </td>
                <td width="63"> </td>
                <td width="80">1080</td>
                <td width="61">&nbsp;</td>
                <td width="71">3990</td>
              </tr>
              <tr>
                <td width="55">25</td>
                <td width="75">ALFONSO MORALES</td>
                <td width="67"> </td>
                <td width="67"> </td>
                <td width="64"> </td>
                <td width="60">1080</td>
                <td>1380</td>
                <td width="80"> </td>
                <td width="61">&nbsp;</td>
                <td width="71">2460</td>
              </tr>
              <tr>
                <td width="55">26</td>
                <td width="75">廖煒賢</td>
                <td width="67">1260</td>
                <td width="67"> </td>
                <td width="64"> </td>
                <td width="60"> </td>
                <td width="63"> </td>
                <td width="80">1050</td>
                <td width="61">&nbsp;</td>
                <td width="71">2310</td>
              </tr>
              <tr>
                <td>27</td>
                <td>甘瑞源</td>
                <td> </td>
                <td> </td>
                <td> </td>
                <td>1155</td>
                <td> </td>
                <td> </td>
                <td>1110</td>
                <td>2265</td>
              </tr>
              <tr>
                <td width="55">28</td>
                <td width="75">馮偉傑</td>
                <td width="67"> </td>
                <td width="67"> </td>
                <td width="64"> </td>
                <td width="60"> </td>
                <td width="63"> </td>
                <td width="80">1890</td>
                <td width="61">&nbsp;</td>
                <td width="71">1890</td>
              </tr>
              <tr>
                <td width="55">28</td>
                <td width="75">JAMES ROBBINS</td>
                <td width="67"> </td>
                <td width="67"> </td>
                <td width="64">1440</td>
                <td width="60"> </td>
                <td width="63"> </td>
                <td width="80"> </td>
                <td width="61">&nbsp;</td>
                <td width="71">1440</td>
              </tr>
            </tbody>
          </table>}
    </div>
  );
}
export default merit;
