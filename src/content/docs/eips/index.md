---
title: EIPwiki Contributor’s Guide
description: The ultimate resource on Ethereum Improvement Proposals (EIPs) for research nerds.
---

Hey, this is the 2077 Collective guideline for writing articles for the EIP wiki. I’m happy you’ve decided to contribute and I’m excited to see what you come up with. Let’s jump straight in.

## What is the EIPwiki?

The EIP wiki is a database that contains *Investopedia* or *Binance Academy* style articles on Ethereum Improvement Proposals (EIPs). I assume some familiarity with EIPs, but if you don’t know what those are and want to contribute, you can start with the ([first article](https://eips.wiki/eips/get-started/)) that will go up on the website—What is an EIP/ERC?

The overarching goal of the EIPwiki is to provide a hub of easy-to-digest explainers of what every single EIP/ERC is and what it does. The goal of each article is for the reader to leave with a high level overview of what that EIP/ERC is and does. I’ll soon breakdown what we’re looking for in an EIPwiki article but you should have it in the back of your mind that the EIP wiki articles are “goldilocks” articles:

* They should provide enough context that a relatively novice reader can read them and grok the core idea.

* They should provide enough depth that the reader feels they understand the subject but they should also not be too complex or involved.

* They should not be so short that they are equivalent to reading the title of the EIP but they also shouldn’t be so long that they scare away readers.

A great way to think about the wiki is as a great complement to the 2077 Collective Research blog. The blog will provide more indepth coverage of the EIPs, while the wiki will be the equivalent of a primer.

I hope I’ve gotten the idea of what the EIP-wiki should be across to you. Let’s now go over what we expect from an EIP wiki article.

## How to write an EIP-wiki article

Note that as much as this is a guide, I will do my best to ensure that you don’t feel confined to writing any sort of way.

Afterall, this shouldn’t be the EIP-1 equivalent for the EIPwiki [this is an inside joke that I will not explain any further; read [EIP-1](https://github.com/ethereum/EIPs/blob/master/EIPS/eip-1.md) if you want to get it :)]

The basic structure of an EIP-wiki article is as follows:

- Intro text that briefly discusses the overview of what the EIP/ERC is and does.
    
    2-6 lines is the ideal length for this section.
    
    The ERC-20 standard is arguably the most popular EIP. If I were writing an EIP wiki article on it, I’d have something like this for the intro:
    
    *“EIP-20 or as it’a more commonly known ERC-20 indisputably the most popular Ethereum Improvement Proposal. It was proposed in 2015 and the standard defines a set of agnostic criterion that fungible tokens should conform to in a bid to enable interoperability between different fungilbe tokens while still allowing for developer freedom when creating these tokens. This article will provide a high level overview of what ERC20 is, why it was needed at all, how it works and the benefits and drawbacks of implementing it.”*
    
- **Introduction**
    
    This section will provide history and context needed to understand the EIP/ERC. Continuing with the ERC20 example, here’s a rough example of what this section could look like:
    

*“By design, blockchains are supposed to be permissionless, i.e., anyone can do anything (except re-org the chain ofc.) However, this freedom comes with a unique set of problems, most notably coordination and standardization. The coordination problem is not intuitive because we often forget that, at the end of the day, a blockchain is simply a data structure. And that data structure needs to communicate with other components, e.g., wallet apps, to provide functionality for users. A world where everyone launches their own tokens, all with different designs and functionality, sounds wonderful but it results in interoperability problems. That is to say, you could have two tokens, e.g., $SHIB and $DOGE that both live on the same blockchain but they would need different types of contracts to swap them or different configurations of a wallet app to show in the wallet. Two different tokens are manageable but there are currently over 500,000 tokens. If each one were completely unique, the blockchain would be completely unusable. The list of potential problems is virtually endless. Fabian Vogelsteller proposed ERC-20 in 2015 to address this problem*.”

This section can be arbitrarily long; the goal is that it should provide a solid background and the necessary context for the EIP being discussed. By the time I’m done with this section I should understand why the EIP is necessary.

- **What is EIP-XXX?**
    
    This section begins to go in depth into what the EIP being discussed is. Carrying on with the same example:
    

*“ERC-20 is a standard for fungible tokens created on the Ethereum blockchain. Fungible means the token can be exchanged with another token of equal value. This type of token is different from Non-Fungible Tokens which have no other token of equal value. In essence, ERC-20 is a set of specifications for tokens that have other tokens of equal value.*

*It’s important to note that while ERC20 is defined as a standard, it does not prevent developers from writing their own fungible tokens that deviate from the standard. ERC-20 just defines an (relatively) agnostic specification that allows interoperability with other tokens that follow the standard. Also, ERC-20 tokens can still have unique behaviour/functionality as long as they conform to the standard, which we’ll discuss next.”*

As you can see, this section contains a high level description of what this EIP is, it glosses over some details but hammers down on the fundamentals.

- **How does EIP-XXX work/Technical details of EIP-XXX**

This section should briefly go over the technical details of the EIP being discussed. Sticking with the ERC-20 example:

*“To really understand ERC-20, we need to first discuss what a token is exactly.*

***Tokens on Ethereum***

*Let me let you in on a dirty secret, a “token” is a smartcontract that is essentially ja key-value pair database with inbuilt functions that determine it’s functionality.*

*In less geeky-terms, a token is a table with functions that can change parts of the table.*

*A function is a broad programming term that describes a block of code that performs an action. The functions in token smart contracts are methods that allow the caller to implement some predetermined behaviour on the key-value database.*

*You can imagine the token database as:*

| address | balance |
| --- | --- |
| 0xc0ffee254729296a45a3885639AC7E10F9d54979 | 10 |
| 0x999999cf1046e68e36E1aA2E0E07105eDDD1f08E | 100 |
| 0xe2Acd08b6eC1149acF4ccce48e954a58690d043E | 2 |

*And a potential function would be:*

`*send (source_address, receiving_address, amount)*`

*where send is a function that alters the database by removing “amount” from the balance of source_address and adding it to receiving_address*

*It’s ok if you find this confusing; all you really need to know is that a token is essentially a big table with functions that can modify the table.*

*With that that out of the way, we can go back to discussing ERC20.*

***ERC-20***

*The ERC20 standard is a list of functions and events that a token must implement to be ERC-20 compliant.*

*These functions are:…”*

I’ll stop there for the sake of brevity but I believe you understand the key idea of this section. Again, this section can be arbitrarily long but the goal is to provide some insight into the technical details of how the EIPs/ERCs being discussed work.

- Goals/Benefits of EIP-XXX

This section outlines the potential benefits of implementing the EIP. It should be the antithesis of the problems introduced in the background section.

- Drawbacks of EIP-XXX

EIPs almost inevitably have some drawbacks. This section is meant for discussing those drawbacks. Continuing with the same example:

*“The seemingly perfect ERC20 standard has ever so slightly limited innovation in the space of token design, as tokens that don’t follow this standard are usually not catered for by wallets of token charts…”*

- Conclusion

This is the final section and it provides a summary of the subjects covered in the article and, by extension, the EIP discussed.

That about covers everything about writing an EIPwiki article.

Again, as the writer, you have full autonomy over the article and you can decide to add or remove sections as you see fit, provided the end goal of making the EIP easy to understand is achieved.

Here is a list of EIPs grouped by their [class](https://eips.ethereum.org/)*.* Feel free to pick any EIPs, even if we’ve already covered them. Your submission will be accepted and published, provided you improve on the previous work. Note that we’re actively encouraging you to write on EIPs that have not been covered, as that will provide the most use to the community. You can find that list [here](https://docs.google.com/document/d/1kd5jghPr4yJNV675XBjhmlYKr4uJajaT13u-WqWrVck/edit?usp=sharing)

You now have everything you need to contribute. Go forth and crush it.