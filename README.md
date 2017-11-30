# Lamassu ATM Process Improvement Documentation
------- 

### Background 

BitSwipe has been contracted to assist a client with their conversion of fiat currency to Bitcoin.  This client receives fiat currency from their deployed Lamassu ATMs and needs to convert this currency to Bitcoin in order to pay their ATM customers.  In the process, the client receives a percent of each transaction in the form of revenue.

### Current process

1. The client receives fiat currency from the Lamassu ATM and deposits the currency into their bank account.
2. The client then wires this currency over to a BitSwipe bank account.
3. BitSwipe wires these funds to the Kraken exchange.
4. BitSwipe exhanges these funds for Bitcoin.
5. BitSwipe sends Bitcoin to the client’s wallet.
6. The client uses the new Bitcoin to pay customer when they deposit fiat currency into the Lamassu ATM. 

### Proposed process

1. The client receives fiat currency from the Lamassu ATM.
2. The Lamassu server initiates an exchange of fiat currency to Bitcoin on the client’s behalf.
3. The Lamassu server sends the Bitcoin to the customer’s wallet
4. The client deposits fiat currency received from the ATM to their bank account and then wires these funds to their Kraken account.

### Technical background

The Lamassu ATM runs on open source technology.  The front-end ATM interface runs on javascript and Ruby and the back-end server runs on Javascript.  There are various plugins for wallets (BitGo, Bitcoind, Coinapult, Blockchain.info, GreenAddress) and exchanges (Kraken, Bitstamp, Coinbase, Coinapult, Coinfloor, itBit).

-------

# Implementation Requirements for Kraken API

### Signup

- First, sign up for a Kraken account: [https://www.kraken.com/en-us/signup](https://www.kraken.com/en-us/signup)

- Then, verify your account in order to deposit and withdraw funds: [https://www.kraken.com/u/verify](https://www.kraken.com/u/verify)

- Once verified, deposit fiat funds to the USD balance of your account.


### Create an API key

Under settings, and API, create a new key:

[https://www.kraken.com/u/settings/api](https://www.kraken.com/u/settings/api)

Assign it the following permissions:

[![](https://support.lamassu.is/hc/article_attachments/115001782992/Kraken_API_1.png)](https://support.lamassu.is/hc/article_attachments/115001782992/Kraken_API_1.png)

Copy down the API Key and Private Key shown.

[![](https://support.lamassu.is/hc/article_attachments/115001783192/Kraken_API_2.png)](https://support.lamassu.is/hc/article_attachments/115001783192/Kraken_API_2.png)

 

### Configuring in your admin

Open the 'Third Party Services / Kraken' panel in your Lamassu admin. Input the API Key and Private Key credentials, clicking Submit:

[![](https://support.lamassu.is/hc/article_attachments/115001781551/Kraken_panel.png)](https://support.lamassu.is/hc/article_attachments/115001781551/Kraken_panel.png)

Then navigate to the 'Global Settings / Wallet Settings' panel. Select Kraken from the Exchange and Ticker drop-down list under the tab for each currency that you'd like to enable trading for:

[![](https://support.lamassu.is/hc/article_attachments/115001783312/Kraken_wallet.png)](https://support.lamassu.is/hc/article_attachments/115001783312/Kraken_wallet.png)
 

### Testing

Test trades by placing purchases at the machine and ensure fiat is converted into the relevant cryptocurrency in your Kraken balances.

## Documentation Articles
  
<h5>
<li>
  <a href="https://support.lamassu.is/hc/en-us/articles/115002068029-Setting-up-the-Lamassu-admin">Setting up the Lamassu admin</a>
</li>

<li>
  <a href="https://support.lamassu.is/hc/en-us/articles/115002091225-Configuring-Bitcoin-Core-bitcoind-">Configuring Bitcoin Core (bitcoind)</a>
</li>

<li>
  <a href="https://support.lamassu.is/hc/en-us/articles/115002092045-Updating-your-backend-software">Updating your backend software</a>
</li>

<li>
  <a href="https://support.lamassu.is/hc/en-us/articles/115002066669-Unpairing-your-machine">Unpairing your machine</a>
</li>

<li>
  <a href="https://support.lamassu.is/hc/en-us/articles/115002092905-Latest-software-releases-notices">Latest software releases &amp; notices</a>
</li>

<li>
  <a href="https://support.lamassu.is/hc/en-us/articles/115002093145-Lamassu-server-commands">Lamassu server commands</a>
</li>
</h5>

-------

# TODO

- Research implementation for cloud infrastructure
- Kubernetes or Docker
- Simplify setup process
- Security and penetration testing
- Automate server configuration
- Documentation updates and fix broken links
- Process improvement for user experience
- Engineering team call