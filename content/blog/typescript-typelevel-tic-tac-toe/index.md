---
title: "TypeScript Typelevel Tic-Tac-Toe: Overkill edition!"
date: "2022-09-16"
description: "A fully functioning, dynamically sized, Tic Tac Toe Game with a
UI, all on the typelevel. The TypeScript typesystem is very powerful!"
---


At [Mirdin](https://mirdin.com/) we help students to practice writing software. You might be familiar with how practicing guitar or some sport is very different from just playing/performing.

You will get better from just playing but it takes much longer and your understanding of what you have learned is much worse. You will learn what to do but have a harder time explaining what you have learned.   

This is exactly how it normally is to work towards becoming a senior engineer. Senior engineers that have been through a lot gain intuition. They know that one design decision should be taken over another but they might have a hard time explaining exactly why. <b>So do you really have to spend 10 000 hours just working on projects to 
achieve mastery ?</b>


At Mirdin we believe there is a more effective way.
We try to give meaning behind every design decision to not have to use gut feeling or past experiences with similar design decisions to have an opinion on what direction to take.

One way we do this is by giving students a series of short design exercises that takes just a few hours to finish but will contain a lot of opportunities for things to go wrong. Then we give the students immediate feedback on how their earlier design choices affected later requirements. With smaller groups or private students, we design specific requirements for each implementation that are meant to poke holes at a student's design. 

The Tic-Tac-Toe challenge is not exactly in this vain but instead gives students the challenge to write a Tic-Tac-Toe program that cannot go wrong, and produce compile time errors for as many incorrect uses as possible. For example, making a move with the same player twice. 

When I was a student at Mirdin a few years ago I decided to try to write Tic-Tac-Toe completely on the typelevel in TypeScript. This proved to be very challenging but fun. I have now expanded on that initial attempt and written this post to explain how it works in the hope to teach some more advanced typelevel TypeScript.
And maybe also make you interested in doing something similar for fun.

I have a lot to thank the excellent Type-Challenges for helping me learn enough type-level trickery to get this done. 
https://github.com/type-challenges/type-challenges

## The post

This is going to be a post about advanced type-level programming.  I’ll be showing you a sequence of functions, from top to bottom (mostly). I recommend treating each snippet like a puzzle. Try to understand how each of them works as you go along until you feel you could have written it yourself. We’ll start off small, with some academic-seeming type tweaks, but pretty soon you’ll find implementing type-level board logic a piece of cake.

I showed it to Jimmy and he was dismissive . He’s a PL Ph. D. with 10 years in Haskell, and finds type-level programming easy and uninteresting. After finishing the whole post he had a funny reaction, and shared the draft with his friends.

![Jimmy says post is jaw dropping](./jaw_dropped.png)
![Jimmy says he did not like the post at first, then loved it](./jimmy_comments_1.png)

I hope you can have a similar experience but maybe get past the 'I Hate it' 
quicker! 

It was also his idea to add the `___DISPLAY___` that i will show you in just a sec, thanks for that Jimmy! 

Let's go! 


### Where to find the code?
The latest code can be found [here](https://github.com/note89/typelevel-tic-tac-toe/blob/master/tic-tac-toe.ts) just paste it into [typescript-playground](https://www.typescriptlang.org/play) to follow along.
</br>
<a target="_blank" href="https://www.typescriptlang.org/play?#code/PTCwCgQAgFQeygBwDYEMCeVXLgOwOYTQAWApgE6lQCWAzlrOoqbQMbnWIAuSa6+5OAFdcAEyhwAZlC5korOKNIA6IsCjEuXRLQBcILtVzpleUsC5NSyUgDdrAWkOsnqF1zik1aqAGFFVFwsQeIA7tSyjMxsHNxQ9uS01HjxACzKAOzKqd6Q6gDEhUXFJaVlpT7lVdVllVD1DY0ACnwMAOKoALZUjb1Q+XV9Q1JDo-2VDpNT0zOzc9MDef1j9TBWNvbIK-WL0PkrMNQuMG4O8D1juwXzN7czV8vb9QCqAJJPjQ-7YwDKMACCACUYD8oAAJACigIh2y+NXh1UqCORFSWPhgxDoNHonUwqC0pE6cRGqCgSlYpFwPGeAA0oAAKMhkACUqiWAAZlFAftZSKwePgulQAEZwVDkcRJABeVHpAGYoABeAB8UDlAA85QAaKCpJWq1Lq1I60hcVjMqA+ACMXN8glo9HCyC2wsCckk1ESPA8UE6cHsPgATFyAFJCWg8SlBcjyOBwCVGfEsLD0XBCTqumP0q0KlV+OMJ3BJ+nqxVWnXoRVy5nMnzouQR-Hh+RkVgAa3orpwoSgTq2XCE5FwUGhABFLUt4FBaMQ4D3QsR8dOuEmZHJBd1sTRcGyQD5Xs7SIKtn77I7qM6oK7Y0SL6QnNRNxRBIkfOFIuSo1Bn-HfSxaKg+AsLuYBLGC-oUFAAD6MGjq8PxNAAMv8ACaMFQJIv6krYdBCNgUCUIglC0FG+LJLgPgjLIVCsIOlBUsuq5UeuQpspYzBQB03Q-NQMpKmqADcEA+DsKLIhA7FUDB0kydJcEIchaGybJ-GiCJ-RiQiwngBJVicUKPwrgO9CKvUdqoDOADy5BNBZtAADw8lwELkC+9kQPUXGkIhcaIPZADaHlQNAUCWQQcBGPgUAbl44D1NAOZaoG2pynK2nxeoo7kKgPZBQl2pQMlOqpTqVqBjqgblVAVrlmqVVyrVgZWulwXqH49r0AA6kYeVtTVxVVZVpX1QqLUhb4nqsDYUDdRRcWtfUiXVY1BVDdVI1jW1LQYAwK5tpSSBwEkhh4L1i21TVm31AAstgmHkN04inrFGXnTqABEYLWDg71XQeNjHr6EFnVAACsoNXVA22YM99CoJI0bRUKW6hKd80hf1dUVVVZXFQqOYtQAuhAyqk9pRAAFRU9TNMAAJcLQDikOqzD8kzrnxjT1OgSFGmaTUukccpUFtP810QlBKEQjAUEwJZUF-ECMsqaZXkoaa8CGeKXD2V5WvGcq6n8-C2nAFzXP04zzOs1w7MvubFM821fPG+UgtScLovi1B8FQZZABybSWa8gfC-xXmvLQYX4BFBC6wZRnhobSyia7bs6ZADvU5bTMs3yts-uQDtOw0adVO70Ge2LEu+-8UGjoC-ydcLUH8RipAR7Q-xZTl8fcYntDJ7zZfp5TWcUzn1v53bnPmyXqcj8UFct74gKWT8PxQWC-yb51Act63pl2kdtBghZnV4H3pD60nRuLyUpvjxPDO5zbM9F3Pd-30Uy-Kb4ryAl8IhCW29d77xbvxCa5ApqkDPrQC+uAr430Hl-b+iwkRoIfksTBqI9h3HwTcL42w1jMA2NYJ4RCxiHGOKcc4sIJgEMYQsQYTw3gfFLiw0YEJ-ajlBJCaEFCGFMKYZQ9hYjxjYNGDASEUA2G+EsqOGE8EoD-BgEMURjRpEwm4eOSyAAxWAMi9GvGAX0DR4jBHYOEcIuEOCf7YLsfY026hrGuLce4yYPgPHeJ8bcZxLt74YO-kEixnx7F7CKL0QEpAACOQhPSEijPQUu4SCiRNCQvIJgSHFoLrEsUcLBqD4GHKgYc-wmjvHugwahZxaGeCvGKCUOoFC4CSBGSKEhpCSVoD4QixEowdMbEEegzERSNNEDqbAeAorvmIBhEQ-JyL0B8M9HUe1SDXQggAITcG2HUC44AIOsj3UIkyxDYiaEdCI5FLKsFoogagpBRAgQnNACmKjLySAWSdVpvpww8GvIgQcsU3kfK2F83Aiy8A4n+QRU0g4SnTkpEkYU01bDYCEFQUpT0dq4DgN6YgggezMwpNwJZPh3n-CBvYeQpSJC4GQJga8nRUBKBoJIdSDg1xUBiluPFPAILkE5dy3gGBIJYmovIOiX4UBiqFSnKAXLJXPS3Oi5A1BxD0moMoFQUB+VYGQJQVlmBZXoCebWJY7zfDYHVQQWAqB9qbPsDs9s9KGCinFGECIcy8XUuTFiUkChbzTUME+Dm8rQXWudB0zqs4jnkBOW60kzhXDuHqR6iUV4hAEp5cjRcqZ8UYSMHQMg4gA03geSGx8VBC4UqgJHS5x0bl3KEA8p5vZ4wdgwr+IwDhTVYHOUGlApp20xVoGyLJuSck4JCWMeRiiVhL2nb8AEwJQSjCXREwoKx+EwkuKkgJU6t0zozse7JZ7F6zoyZutJ26hjPBgCY9dZiD3FAyZk6d57b3BLyOiV4TRdD5laRqyCtA2ycAeXa2QWISJQpKecmOHThS7JkAgI1ogOmSoUEoN8ZBhzoGEAREQ24fRmE6SKiFcGcQDJSGQSg-jrXkGGdQUpTRBCiCEPyeyNItQoSHuoCE6oujDsAz4RjzHWPsc4zrd6qB3pQAAD5QHesKd6H1WDyaU+9UQ71VSmVkxpxTynWWaeU8KQzWnhQ6YruJwpknFDScMhwOOMArTfnVEEMQ9BNZcGc4KVFpASEsC1DAQM7nPOiG83AJzkVUABaC-QPTUAAAGAASAA3q5gAvhl0LWXktCXAJJWA0XfOxfi1YEyy4-NGbTBmSCSnRRwBsHSxrRSjBcEK9AO4PhBOyqLD8wDtmkj2Y41xnjfGvF+KWP5duHygLCmyuR7AC3spHDJPiZNlXCaMi0DofQwB8B0C4MoI7sghDCmUEGw7lB8CZlacAUGpAACcohUDslYM90GqBnuoAAByiEDMKAAbKlP78NSDA+ew1dkwpnupFBha6AkcGACFIEuYiwhoFUGoNIAjQheylO9AgFrQ4gaUCwKKbNa46C5GgGlzLVocuZcDPl9EbnsWwDC6wOlopIjXlJCIci5GMOSEkBQL83SXk-AwD4BnxnTMqcV4Z5nymdNGfeqQRXkh5P5deeoTqVBFw0tkJQGis4jjJiqZKj0XokDa3I5KiMfnpcIEF7gYXzEzd-nq4kfZ3qKOegjPEDFVAPTqnbUYb8bg5nO46ViWJ8S1WS4QDboP3orAiWS6gDL2n3paa1xrnXWWjPJeFLn9XBftfvT10p5LrB0t5414XrTxfks+EN3qucGhUAm8JaQc3EUKT0Gtw2PkeBxCIAd6M6rkV9zSFCFQToQhkCGBQJgainQJDZv2Ty00IqedMbs8OIiDn+SO7kFwVG25rn4Slz4WTOmtOoBb8ZnXGurOK9dF-9-WnWCV+UwpGVx138X+ARkgnQ0wzkBW1IEW1JBJGQFW1QHWzexXBkEqwrEIx52HBIjdHxDfCoFwAH3EFJG6F9wwkEC3z5zmVcwHXEFCx1FoAQEXx7xpVoPeVC34lYAt2H1Q3kCNSCG3xjDjwIB8EPwkxPyk3PxGFky-2V3k05ybyryL3ky3AVHeVzCgGe1nwIB6VPT6igAAGpqojCTDjC3NzDTCLCzCbC3NTJnsRJH989jNX9ZNf8zMACVNXDhR3D3p-9ldXDWAQD9D6hswoB3kwjLDzCaxTCwiIjrCEiYjjC4iGQEirCYj7Cs8c9G8n9lNXDi9S9y8cjFd8ia9ktS9WAK8Sjq82cQjUirD0jwj6iojqoLRMilh5dZCP95CoBVclC8jq9ejyiRJ5QLQIjqx+IHCM4fBngPc8B4BXgqQKBYMfluN+N7V9o4YoAhcUh1V9oUsqUlMtkjNfByjOdKABwhw4ZhwOtlj85hc9iqBksqUAAyKAY4t404iuWY8iBYpYxIe4y+Z4JLIKBoKCJobNH4vAa6QkTMWgRYjwPRb5cif4cgfAdMKMRta5IE1UZmCLegekekNsQDIwcXGMV4ZkFUWwCKUQC0AAfnrSgEAyIISG0mK3BMhLmNwBhN93hKpDgCRMhR+VRPRO6CpCxNWOBP4meHC0pEiwHUwAZKJMA2eEpOVGpI1XqGZLsAoC6xcWm2gD6zQAG3IhVK5L+OjBWPInsilLEwEPjEAxDB52QClH1w0D2z0BADO2IAuyuzgE6GAE6COHtCkC4GACCx+HYE4DDLoFoExVoGAEDC+3h3yFjMxSDTFNtlBnZAyGBwyAanBimxuHrCxDIyxFRiY2IEwDiQiCxSvAiHI2tmNLIjwC5FeB4HzSvAHxwP9NIAXCXBJDJFgKTHEA8AeVYC1B8FxxoC4AAHItjFxXVfx+Uzky1pAGyZxhBkBxBrwjApohAlAy1hwpAPRWAWMth1VLtnkGYJAYx+UXlXhZyt8-Rg8KQmNkCGVMBRA8BZyCUjA2wad6By1FyAKlwbUdRpzoNHQtydyjUAKo9SQvlLiqAEgkgUgRh0QrBIzYguAIKO0V9JQdpZAlxUYCKrw4KGAcABVpB8U6MaddCQIfAfgsdh9dAfBNBtBPTgBGx2xBVJBuw-SAy4lggllHt2Q5QMhUhnt2Q-sLBspWl7pOgHAdjcAnArAnA4AHBbiAS4M1LmAxKJLQZAw-tgd8hszDLjLgd2KPSDtvTfTrsgz2AjpQzwysKozuBgA0yWBEzkzUhUyHR0z-TMyHBszcz8yrRCzf0oqL104t0oYlYTDX0tIlgISuAoTuTYTliESBTkS8ARSMTxSrlJSksZS8S5TrjFSGRiTZE1SNTxBtTWTP1y5or1AMQsQsRwwOkZSLIGBZyix9pRBZz0COIp9spuhoxpcB9Oh6AoKoBbUY4+USdplIJRrqKRUTyjhzyyQ4BWBaB9lMRuCtxSQZwhRJylg+xfQHUccOzPVIIfQRAlAvRsV9qN9MRdCsBz9HjuUvy4AXkOL9sQBQggblBul3KuBjT8BTA0TgBvzdrgBFwxAms2xEzgAWkMMflsA9LgJNBOhkB8gMM49hRs1qB7AHA0bsSixkAsa9DoAfB-YrrRy9JRqhRLSyRjsOAibhkJAEgGAVKuQfBZruhSkZq5ByaMathVrewLwXQsVEAUBHlRyEB0dDqyDMwL8qA+afBOdJViIV8eALqBdtiuTltLxUA5b1UecfkRkulRaJ8KbsA-qbKQAeK2w+KBLrthL2loVHsrRgdQYrQpLnsLBKswaHB+zbY6AHBUAHB+qnksa+1xQWaKA6d1BEJ99NxNyex8d+aWqoZOTyIeS4TsrBS4N8rMyJTrSpTTJSqPNyqFSoAlTqrVSqSaSmS9UdSI11ABa9J-gtlfB+IujLN5CfBUr0rC6sr+SS7hS0SCquAK7L5e7fB1ifBolZUKRZEpbIg4zzaFbhqqBF6dQZSsRY7JQEBvyGBCI0AKRMyfAqlla5lVbxUyk+66DLr9j3dPcbaqBdbV9x08leYuiyqvN67G7ANZCLR9R4hW6GrIIfAh7ZTgHSlKrlSzN3oIG8w6q26WTYGlg-95MgH5SkGG6qqwGNN0HVRMGYHO63TY0jhY9Hx5aPRkwfR1IUHwH6gMHW63SlM2HVNyGoHNTuGSHAC0GOGKGaT-71BbpjAkBSA4Bh0GQ9zkADyOlcQSJkB1zhxJUp8IwLRoNcAALiKeAtsRrE7xrk6lggI5ygKGUjBI9+SRVisyFwVcrhxHjGKUr87oTMrEhi7XGy7MSirrTB7UGNcNN1j6QQmlcwnRGCGKriG2G5NuiYn+HKH27Gq9xc6phDFlFlFOo15A4ABCKYFO9EBAKxtcJcV0Y3ZIcgNZS-JmsxkdO84gvg68WcqaWip5Wcjx6AXwKi0tdzYTGwF5VKxYqelEme8uoJnE-iekfyZ4QmBBwhmR0BmqluzUqhpHEuMZ3ACZvKqZwJptBevu-jFe0gNeqgGU2ZacVteW9tYrA+jerETp6iU+7akVS+twRJKkKc2xogl5HweZqJ1TGJpZuJkB4RkF+Q2q6B9JigbZmhg6+hokdVJhmauAIF6q6FlJyBuqlOl2KAAARTeAAC0XYymZBggoB8cASNG3VJVRcyTKR17XQr9uy9UGbX7XnS0zroA2qDH1a4U4zf7yNFjbUsVB0bUoCw9XGab1AbnF7X7F60pc7HmX6B6kn4G8Hu6OIVX+IlWlNVXMnoB1XfAfZ-nSAoJBN8SoIqVehTIlWIX6guiGg1nF62jxHNn4XqHit6aBrrXa6vM7X7IYBVQhhTJYB6hnWFdGg1mo3PWBH6qfXdWqB-WnlA3bWYsXNw3+Io3lnkkRCooEnqqE28W4XsHfW9J+munRBM3yqFYysc3+JZtwWg35T-Ii2ln421FE20nK2CW30SXXhyX-hWlF9EgKWlh-quLDBjBBxkBBLg7ohQ6aypQCWoJ-Z8VSBdAoIfAfYF8qBSLtyoAAArWFbg0pICRxvSEYUerk8e3xye-xw5wq45rRhAV0LFlUvtmk3ffCk943LFZAJg6KfFTzKFrV0JvB39jVF5TvIgh5uQGu-EyFn0AmsrTmt0DWrk5QPd3Op1DpVsyRw9WK29eK4EQqPmSdMjqAZQejpoJWNzCFwk6q0kyCCkjZ2k4h94Khmj2oNEJYZiqGB3NzQUGlcMbD4VvW1h7FuTVJrhuBqFvhsRpN+oJTthsh1T-F3O9uCnY+1PRpsayp-WrFCnL5s8u1OjUgRghAAg2lYcc94PIwCVwC6T1fHO2mpYekRoRJ0R8tjVC0dSIzXh-zzhwLt0hoHh7FrTgL2knwC0FjlB9j8k2FiLhk3jlN3O+kV4PHQjIDrvDs9HTNOLYQHgZLFL8o10e6KgHAOAUCnNEiba3ax2zig7UnKkEOnC5QJQWwYAdkIO5AQMMmu28WrS3AMk7ZjvMzqgACdADpazkz7lfTrYyjH5UI5Libjj2D7joxhzrst00gb1SCXoPznbyL0YX8UL874LvoK7mL0R8LtSJYds+cwrkVcUUUlPCjVxpb7Ag7nFvBl5PTmbtcb3EiZmwQtbpZTeuZWQI6Mzr7qkVc3sKgUcAOWctRNsPFecZF+lI9o96W1glQesCXGr9az87kf4PRGET72evg1jkkrb1LuLvRuQbSq09C6QG1Q6B0agALLAV9hmQFycRcHgIM-ATQHvHcjl0kYUBslpL5JIAgWzua00N7urhr-HoZ1FkFEuYrNRUyFBuBem7oc76LwDOBf4ICHbsQ6FHgSjNuw3uj+jkj3L1HrvecInPg50lxyFXsMXwXpHngc+lgxDxW6KEm664h6by8Fg783AX8qAbH7vactRLEY3iyU30gc7+7y3iya3nPuL13D38Pn3nnx3m5ulOnzMpbrEagzz9QYrUcOAKKUyE35GN4q3oCO31pEP1vtulvtv-g9HIIIfyJvRDVOANTNURFyjekb8-ARF+sUpACsd9AcCUIQyC57tGMWa4WidpbsgZAZgJ6I9jgQQ2azn3ANi6dp2w7b1ey-0wM4M5yhGVy5gbC6MzygK7ypM0GFMl5QzJRgQqOZDIOyBqjQ5cgvWITLr0AzwB0qAUcsOVDlCEwksbmJTGFiNYEsjSpSFsjfxKyICw2PgVEtlEwCdlSQRgJQOqGnBFIBswKcjMljqyZh28SwR5q5AwChsks6WKAP5CoHMxmS6YTMITHgEu96OWWHwKB2FCYB+B6oDpDcz6pCCKAQ1FghU2QyuoYArXAGsACBqhAQaXXaMhDShr4AYaO1BMgjVEBI0UacAYUKe3zjjocaeNWQQ4CSDFImwxECuAgK5KhsC2KiDgegHshINSYbcfyMwIoDExpiSwUlpwHsj-AtQWydYtEMQAyBr84oMgRiysZ0YYBwzHdlACSFICkoWoVAVqH8iyEtQSucoRpjQEtt-I5YWQoTBKHlQlcDQ-yNqD8LvRCYEQ4rPkLUQQskG-kBoRvT6HGABhOof4Hcl8H9ClmpkAYSCXmi9D229APgcz3BDo4JkYglLvagvDdsJwLwXwcsLJKrDWUVUejsoE2EnALwgYHYUFB6HIFkAOoC4UNx1D+RTh4wicrwK+isodQnwwHJ0NVCAY3hWpFRHckKz+Js2+AfwJCnxAwBW0NgByMQKWAhhY4MgWEcw1b6mg6KPoItvKygCCYchgGcEZCMtowjh0DkfyLUKSgtDtQqQP4S23ehlQ1M70OUKkA6E4CWYzZQbNyCbYQi8AxI1EfCPWJfQKcLBcUBrWV5RRSQt0OWu2gSxaCuKug-QSuxwpGD4wJg2GuYOxRWDAwgZM2qf2prKBHB+4Ocgam7D0B8cfBOrskMFQipH6k7BCnvR8D7QCM0gI7GeG2JbFisVfI2p-RNEionRNjWAGxD0iEjeR0I-kT4IhahClBdTPVNGMJizD+I6WfyAAGlSAMg4cE6JGAwARBKWXLCmLTHxj2QhMZnDAHzHoB4xVoYscliyygjl0UAW6JEGeCGAQOH6HwNdCMDhgwopAeyP7HWIFIPQRBGXuywOgc5zkVodkBOPRBXUGAYQmMP7DEyth4K0gGwAQEiAjBCQ3APEP4NMJkYRAKfUIMOF5C18E8cSO-AgHnEvd1yPALEBcQRRq9VxcyEkNuIXB0MtwZGOESLQOj+wHy0gfVJQFoiJAo+jKWlJeHbFpgo4RBWHgOkF5kC6+IySCUeK-A4ACAFAIMRxDAmdiiCPY3wbOLGGuRJhIw6YbwOqEzCgorw1yGdXqB7icec0eMbORXH4BZAs5NtqhwvH1AGSpA-yPRMpCMTiAzEoKIBgwkQTux-sZ4eRJjHUS5wuANAf4haCYSRJfY0gAOPbRstF8B0dkK-WexaSmKK4JjFBOr7biRgDEyIBpM5zcE+QS4mcluETxnioAF45HFeKOqiBxAZGRCQxB9CSo0hO0c4vCjJwRANePE2QD+Pe7-jBwSQTYJgF95QxlGwk-SSUm3F7dSyCEmwLX2QlARyAwPTEI6B2iqD98-sKwhXDknCTsJELXCX4JjDDD0AAwltiRN2G8DxJdE4yXxJYl102JbreqfR1IE6hJJB4xqYFOamgk26RUrsT2LEmdSKJRtfcdJOTg+A9ElBP4qwHsg+QJ2WoMEEUjoyKTlJQ4tScOFMnnItJUxaAG0Cj6dgUMdKUgTtAQJbBZxnYU0DtKgDLTIInONaZL0ghapIUMUqPoizxFwCoAc0-0gtPsjlg5QSWCkSgK6F6R-pnQQGVDJwnRiHhStRYbGN9yTIJhlU6qTMNqmwyIWw0rCfAFVAMk3ArANulDMBm4zuxUM5UAjLGnKAiZOoKGWgNrHQBSZcAApItJel0YtQj08gJtLsbbSOWB01+uyB8DHS3R6g0CmUkMnc9LwN0rssOOHAcynp5ybmYow+mdV7A302ASJj+nzTWZfIeyNqCtCgztQ5USsRXBZlsz7I2MpGWVKnClT4ZH1YmejKIkJjTI1s1DkJJGn4ziGRMkmbrMtmeysJlM6mR1Npl3J6ZlBRmeTCaooh+OyVY9PUFHCbYogyYG9KR3EgxyM5hUvgJBCPgdQTik0GwIVnqDaVJA3zPwIXKoA8CYIkkMBpZHegCRegEg+aKXPLnHwHQ9QauVBFrnKYaQDcpuWyWDGniKcpkaGA1lxFEhLAxckjBQDLnr0IQk8zAFAC7k9z3oC8zcf3ObnRyYqjidOMVh4h8RVYBkXiKQD1Lpzd5uCdQPSAPlHseqi3arvGBxyXU2UkqNhEuElRjlluSkx+Z8yeR8g0A2UH5Ii0WIMAkKDA1Cj6MlQxQ1klWKWpeB8CAomm0YE+TuVeqzcT5QrGKCX2Xyr5OA00MdCLlxzMsGI0oZMP9x8DMxjsWAHNNOGRihoSegnaAJvw7rfh7Aw4HHqwooDoB9GUUF5tgFohoAQgFBf0iKhvlMUEAhoPUAQtFG88UUNgOORfKXQKKv0hLBoP4GUadBcAwAQEHOGADz1hwKSQoMosvRLB1F6YeDOIB0U9h-uiAbdlSHPLATrwTLCXCQpPk4iMQwgSXlLVwAe47UKQRlixhjiU04FWwArj6EvYoS3S7vKBcjAM48BaAw8hhcVjMWaK+gpkLwdaRZmLFFp5YG+aTEKzFYrFYwdJXAEQFZLIUQMrUHkuVAFLq2BYDDANmTBHxtYx+NjGfi4Dgj7IKS3ADqCsUzTM5R6b9L0Fmi+Koo+i5JIYtsS7zSehOTACKIpyIYoMCAXAuygYCmpIInZVGPhlNBTlOwmATqlBndBuACUJFKgPuID5Lgg08vE0lzx8C2L32cMYUUYFGUQVueoqM1DGAoGXhRkW+aiOQN7xHtiOQnIIPtgJY2h2oo-OsipRNr9g5A4QHxR0nuUU0cRDQUoTVBn70jAwGKnMB0KMylCmoGKyqISrlC4qlMpw-XEGFtCLiLlNCgCfRHiVGQqAV09WlvlFHBd-IUCGBDqHbl7UJ5m4pZkpg5WVzuVwqiudAhsBLNyVBLOULaAEKSsZ5OldbvDya5DJgsr9SgCqk8n+CLAqI9lZyumifF85bxdeZYAFW8D9VVAT4pXKgBWrxVpAM1VKoVS8DK2ZqoVXaoiG8wfWBcu1cFwtUEswowE+hR7wqbYRQ8KMPDL6NNwD5BeUnACN0AJZbt5wNEOlOZNdSQU5A6ymMBKjhXPKKAOoBBZFMXHx4v6Cq6-rGCpAfktima3pt+kcQhIRlHScZasJP7LEp2O8qdMVjaCmgrF4yrpb4O6W9LfBfS-iINMBBDru8g09ieapaUjZcAbSsbB0u5FdLelyoJZpOqwYd1axna00N0t7X90IWA6kcOOtCBzDGg+6pGd0rqlxtp1R+WdfOscxLrfAK6tdfNEaBUNaxPgANZgFtzB5iszNcxlmrhjOg5wDzT9rNzubqonkFcUcIErwDYAHIN8uGSjKvVPAoILMxDfbN9wYydZAMuANksqV5L81r61DTfPgDuy66s47DRbP1k3zSoVMlDdsCSx1SlM+QtDbrNo3QR0NJ81UEFBY0xC2NuGjjQrBPlkbKC-S7dVwBg2AQ4NyAXtaCAhZ5L+IIYqEVwBJFwj7IUmoJfBschkwQiDaggOMuyG68fAaKq0NiqxUfQcVrq96ASo+hEq7NJKh1a7yWD-BLwkqeFaMt57Ird+1SI4LUmOD1IsFFcfTfgCbWKgzoVivQvUCUxdquAPamZq0i6XNZzFvSucMnFejdKotRmWLbuoS0ORD1fSs6Jppk1ZaYtpoYrZTTk3cb-EiiqZdsC2TjJYQSVC+QS0FJvZMy+EVAiYyZUlqgtSwBrZ6nLUrgjAWxFlHLQ6SSBKC+YeMA0tXA+gfgiSkgdyESXWTjuMYE1egG5UdQdQv4C1R42KwDbM0pkHgZ223DTbCwSYWgDmIW14QKcNY7ebWrsRXpegXkLkZdo3TNbplovXNJuH+67ljykEr3NGtVV6BrQXIHRQ9TO2n40cDoSlTNDRjQAZVUAE5IPI4h6xGVVWCHWIECHGAzkm2hUqqCUwnIcd+OoIUZhGUUASdeOvHf0vbU-oE5KwLHeIEXSfa61jC9QFSiZ094tiRNSFI+OkA3bRR1xEgtFLlRwT26HmPgs9AfLGMQOCACgUgEoA4RhA9ALnb+H9gXg1kYGynCGjdzAaewVSB6rHCiiww2Qrc9ekzvcjzRjiELQ7RMiChNBfBY8upkFDHUQtLdSDanQTqMwa7kAJMXwXAjYx2Bkg4YeyICFVDpYgoNcwCGA0EAPUG5QUDNKIEAxbJp5RBDzPACdS5CmghWZuebrTYXhGgK8qwGA1939z6gW8pYJ3gh6J1BCWOcEBZCD3K7mw+e4Rb8rkBc789lLAXAL3upNcGyUeLplmv+JzzgIJA85GEr0jON5kQpGHguAlwU9gJLSZ3B+WvEi18CSwBsp2UlSB6ldIemxtGFH1m6R95c3fcHpV1h6I9QUIiOfvDCAZAQue7SK3op3kArd9QR3TjJzku75oTet3UjI9246FSNOyiX4Doi+C7d-uiFmfub0ORf9V++aNHvwBgMPNFANTEFA82RR9FQ2OiNPJQPkBAMOeiAJXtb3E6-9qHAA6TsANBCdQNupGXbtxJIzoD++y-cvMQNgNRA2UUIA3Mr106VFb6RoF5HoCqqNA1gZgDGEmXGKR4qOqgLFrt1h7fB6Oy7elosSmR117CMg3XWJ2e7twhwhIWMAZJbI1D2we-eOoer2RNhWyL3WTqnWGHiN7CEwxCxf1U6gDOhyCHoeIa2HQk76mrYoqvSLFb8LoRrW8Tj3nIP0vBkxZk2Kz+HDA2AO3YmN4FOiztmY6QHbpzEbbeitSjiNEfPJc7TIlu7I7EfGRbaT4OoX3TUp8Mta6xfQV7eMKtrqJWdT23OmXBo43QIIC8Bo2JBI6d5U1lk5VG0axBqpNSNzD+XpGX2+ZV9KidFBeDiw2BBdHg77cOBFHm1XqS4FVJzhWXprCCeJEcMIAn09VSQL+4KQ2W-LMMI1LBW8WTklSHH58dkwtCwR6OrL-Jn478Ochny8obmW7TZJQDmNj7LxVk8st-V8mIoTkwU-VOcaBMip09PAJnTWoekWRjGQvRarLu7CgaDuOjEiEeR1Cc0twkncQALTQxPJOMVADjPLUtrC4o8NuX7qKFEAmAK4Wet-aAdchRgud7u3Y6IHsh26dQTQYAw7qd1f6QD+i3wf8CmNoAAsPx-LdKipBM7ShSejoVTKj3+w8ScR23Y1tMhOQfjXSyU3FrZMynxkHQrkwlq5PymEDipjzCyf-1smqdnusnXkctObslTRRziKaFNNz0v99kJoPRt8BammdycOYXAgQTumtQ9ps02yYYOodfMmKOqQyScPcnGT9KpnTqGDNcB6DAk2418eviJKHISZ+g74IjMvR2pxOr00yalNsnEzLplM8RsAxJmmdg0io7VqwQM7qjyMfWFQH2a-IX0RigZb4ZCLimluMi+5XIsCAIB+0aMR5iKZmMZnbtLADk+AfGTcCgoHK+pYmEEJR5kj7xHMVskXMzblz9q3wekYZL+BtzjSjdQkFz3+Q1zWyQmFur0ixaXTzu903yblRJYP9F6-OQeetVDYOoTM9QE5C2I-G+CpIZ3RXHVOJKZzKpz1AaffaaxTQXJr-fOfmj+RG0SRtMSMEvMEGjoTuhLdBZ4AMlndbdTc42ivNEHvzfgRcUBS-orcu85OWbpmb4IjmdwFcT44-PFNgW6Dc5g1uObFOZmOTYZijR3SCgMk8zqZsuSB1PkMYyLqy0kJmu50doGLRWPSP6cvi8nP9cqEA7QfIOWntDWl4wL6f4gvnUOsWpw5uZUx6nqhgl8gJGcAwiWSIJF6JYt3LR4GztkqXs6fhwiHluUWjHNT4vFT0ALjg4tCTIdNBGXZznqPTKCR+LCVFiPIYSpCm7E+R6uraQ8xduGT2QQt4y+Ibpp8DxW2wraQU35eePCGZ8CSqc3DEjAx4vN63dVBGCg0zZ6RZmyzRZuUxWbFUqoN1VyrFXtWLVEMjiNlcStLnGl+W+pfQAhYXSAhSV2bcMno3qW66OZ8LfNBO2pj0xyfFC9IHGv0ANzW5iULQDLGdDei-iOywvoDQyNRrf3PAMNt+R4BA1DYZGG5K4AC0I1e3W6yEoO5+WarxWCK5iiiuJ4WW3Y-S3XVGv2QepuAYIXNff1Cn-BgNgxjRIJmyJzSeG-4tf3dNRjfc1QvjpEMkONHGzvQG1ktjbMj4ptHZurU8GiQ1kNVSSFnZ2fCNs7issaQ5HgGOScHYhvgrQ7jrJ1KYYz-Jlw0EKSz0ggoqqgERAETZUpHDua1-ZsNjPaX0Ayh3C1-pf2dKPTqZk5OCOnnN9OD4IgenNneP7GyQnBhPRnGKzO65bS6v68A2d3Pn+1lcgSx1ZsAIJwRqZnlbbe5FBRkllcx2zVn0wWr4dnln7VrmdvVsOobtjpB7fzkIIRUMUX6Prb0gnBHU2yXZPIagON699F+ig1YZ0sg2RwpQm-TAY6HXmsjtAfRbcnuQK0GTgITqL4KcOS2adRmFO1zZ0sgHxr-a-q5drUshWjtTp5M+MjD2dRdLRvIKJufGsvrEuSMjbVbesv5nAMeZj9V2b4PpIhgMACEH8D8AWRkw9Rym49pPQmt1AW7IIIwT3LYcmuMiySA4Gn3DIby9nUIN73CXUrrcekQuI6ExDTQWCF99yRmsEACAugPvf0pWj14pyYg0ZSPm6ObCzULBkUoKl+HuN0pJOPva+7+GKx32XkAAHUnh5w2YhcN0m1SA2mj3RfBCpnfdWXx8fyAoffHA-DR-0QizRusTAGpZNiLwySNORQ687QAEOrTJgpuCPvT7ia6qSwDPqox8Fj+yQ5sMMZYjdAXkEIU8VsE5x9Z84PDuowV1dAHR1kw4SbSIslQkpvokudSpe0PAoTfLFzX6tZTa5elH+l2a7Efa0cMTvKZjxcNo6AgJlUUNgnUdVfIDABOHCZWQT1xBo4j-EuI8R9xl4w8aU4vgalZBWvzdIY134cRy8kVS+IYnBpNqHol-BfJLwBNWiHzxSDig2TbnSSIwQHy38QoM7WysY6XbtinKTBd-hGTBo-84yf-cAYGD8pACwHVIBwKkCahGVnsftYWezqgCqhTh7ZOFJBvgnlr0a5EO-LAtdAdIlAZJSgGEAjXp8C0PAKaY326cqI+ebg+Xlw8wAjBJnz4dtGLRGf9hYFlAAZ0mhuL-FgldAILK8CUD2LnSU4Ho0RugCqgXxh1JKYGosth5YH1+PZzJr3rkW8n6gAJ484aDvIGtkQb58ErCdhLrrv2+3mtl+ZLBc2HBS-O89fpj3yKpScydbQaRgvRuMPQ+9C8CCZ4EXiqd0oY4f7nYTHz-EpyGXKduUcKVT+MomVqf1Pf+wApp-7QG51PAw7IKyoJwrhiO8IyAPx1AD4wjr5o9ILgfSETYLDUOdIBkm5kAyBgh7qHIKBK7DZSvIGMruuihGIYKvCo9JGQCi6svwaxLIRKR1xgRFHSo+e9Y+zqS2BoO0+SJw15in5coOdYWr4BnmaSwwASL3ZvYOwnnuL2PgUyzGwUDnTxh-xDKvzBMt6AhuT0Ltu1YHYIBUPg8pkc1zrAFfYAw9QJoLKlbjT02E0jN2aBasn6U1SYOoa26QCTf4B8lNmAO3gHBEpueA-EdN-ZEzdCvoklxXALm9pvxpidxbjqKW+wDlu1F9b3AOCNrfyWOISt7kU27SW4i3Xbb3x524RQ9v83uABm73BORDvkAI7voDO78yTuMbrsThAcAXtqJg3x742Ke8aBbttqF2aaLDA3RXv+YPgZB2-FrRTu02rM4QAFiz38R6T9Jgo8gATPtQSjymVKLpmKMOhLNJK7p768qP+uPggbi95Yiptpwb3d7xsHpJuae3Y3L7zSG+5fhTxUH4aRi6Vm1jdRZAnt0yEB49wxGQPpZytx9Eg-lHIh6Hk95ImQ-nv2EcbzBJh9TwOoOkguDE9OBW07ACPnRpYO++nifu-WcAaO5FH+DPAMT-52jxBHsh0eAjoHnlSx5JVUyLVen3THWdDePAngKH3j5J9jlcfgPXOzsr6izv76JPXHlvon2RPd4PJ04jwAgBZQyMJESHsYE+-Fn0Jp7Uh6T8R7dfvxyPqmuANI3QBZ7aALqACukqupZ6kv9kWz6Ganscfr3XH8zzx8veheGHYb0YLdHAx2pSCbRy4De9fp7R48AKFDGYhYSizkwwXp3LpIZWrhnPOX191+-rEQQux87rTwx50-baIP+nzI1QCS-wAt2D0fCCl5jvOo47WersWx+KyWRs0QaC4A0DTeLv23GX+jzkaY-Te4As3llLu7Y8VwkvUMxNLt5thLvBXobVL7HfbAabODO7+jTO4uZ-ZJ3B23ZFDNmgtu9vvj6Oxshe9thUrRgHlR951ADuT42-RAKkCPdFeMPeX4hAV7Q-r3BlZnxoA2gS2F3W0u9Jryj848G9qWd3-OAyf294-32BPttOybh8Ogd3DVqDxhBNe+nJvsAYIGFgp9cZqf+d-Hy2np+Q-cA0PxMPcPG+s+vXa3qO8EE0Ktv+fBdoX8Xcy8PUjP9Gse5O+gAyfSPL4TwcED1C8+M3vjmnxTTp8q-Dv2AUD0yP09rJ3nyPqzxnIC-o+g3mP8+XwYEPVxYAgfOuvaI4M5RPgjv5KqrZygI+7C-X+wAd+09MfdPTVib9BrVsgqefEf7sV98QC1RDPymZKLpk59p-NC9JtP1VFj82+c-Cf0PyCsN8p+3v5fi5gVEz+YrS-fXtP6DAA8ae0-xoMDzB6z9YqZf07xPxc2Byt-I-zfkVXass1mbe-aPfv4gAyBD-U-0-4HNB95VMie-uf6f39jn-V+t+IKjIKP-atMiJ-a-nKDu839p+-sS-uzYf7L+hANvZoXskD-u8s3NtZOiFtu-F-EM8zbdTXwh6+3O+z3rvkLx69CPNH04gvfDECXAeVGaBG11EIPxNg+vRn1oAw-Tf1V8xAC-zj9G-Gmyh8OoBH2T96TBALD89-GwHH8MAvSHwCQVfPw08yAi5iL8xvEv0n8oA0X2wCK-TfyoDEAOv1FUbNK-3gCsAk+BP91PSP1YCO-Yv2z96AhANv8tvB-0p99vUEgQCd3UoTwN9TTvz0JkfIAKk8--KhAx9AArH3p0SvBoC9gYQcAJ4BPbWaBjduvbQOyRMA0X0rkkA-gO7EUA9YWL8cVUQKh9rApPxYCXAu1QIDmPJqy4DLAi1QR8KAgQI8CYEHALQC6Azn2LdXAi5kr88A4INmNyAwgJs4s-XwNIC4g6+BBUW-WwJF9-AivzCCiVZwKsC7VPgKr9IgzwIyDEgljxSCOIUoJgRxA+-yN8HvLNxkC0guQPegFAwYT9VwAB3xJ9gA1QPjkhle9HeB50PdFXs+PGe0aNYA5qixsGgNhC+gW1SdkJtJg0eCWBZyQai3AnOYnA0AQMEVHRQOACcxTA-kQ6h6oBzfnmmgKTZDneBSuAMD69xAUeWcwuALyBg1aAU1CQQB4WnVaoyAA+wpxoeaFAAdCXDiDwd59YcF5Q4lJyzIBPQRiCCBSeRYxoh-Sa5TwJ9aAPB18C4cND4J+KTgCW5qmXvFqZPBMgE7hu4Rmw9d5SJ-xp1vXOtxPhFLAxSgAIxJGScNY-SW1Jh0lGzErlKQ+oBpDUOOkNFUGQskL69O4aOGN1qQokNV1NLKg0AMU7a0zTseQztSFB1YGLy1gmMdkLrp7AnkKWCBOaYM8gvfRCEshLIR3VGDVQ1EArgvIeKz8hhbJGQBtZxejSMM+gDQ2AZxQ1mx0t+IewKI12EE23lI8LPORPhT1FRH2FNhH4R1BThc4TuFu2QaR+EkNNWjpJ11R4XBsyBeyAtCG6Iw39h0wHzFf0fhXi2AZxrHc3oAIwuw16BEw6GVKwUwtYTTD5SYUzuEJzFi0BBdTT1DlN4wnML6B6TQEC1BuTPMOTD7IVMOWdWTMwwlDn-B0OzD2EI0N8gnvTXSr9Gw5sKTCCwtsKLDunHUFvM8Se8w9N-hBjSoQ7hfYWuE6wsYAbCmwrUBbCJw9sICdxEQDH0DrWQEDXhAQeyGSw73P0Apwn3G1BA11hEEJGQEgZLGUNRgQ8Orhjw08PPD-zWcgywfhLLCGpsAdDA3wrqXAGfCjDN8O9goQT8OSwMw48x-D0sP8KGp2qQ8GPBnwpcIgiJYKCMsgzw5LCjCRgWCNXAvJGQRxA7oeMBZQCQUQDAjKzUAMgiTw7CPPCCIwQngjQwiFmTDysGwASxiGUMKoZ-wp11JBZxKiKBFAQaQxojMIuiLPChQnQhrd+IZLBggsIwEBghAMXLFqJ95U0Bcg3IMNhbYYAB4QUN3w+SPsgi2GG01xw0eTDAY8UdSPjBWRPr3MgrIGyDshFQ4Bn8ggbD6HMiTI2qVLEixTnx3CnMEqRtloxJLAZx-YWon1CGzAYKGB5IJCFQgPtNe3d9ivabkJx3JYcykI6yNhC+ofASPQVQ5QQDH8geMHjEsgGhdSEDBsonjCggtQfKL5ZnYK0GyjSo0qPKifAZuU3tuQWcB7B2vJiF61kYIEI0BBUGVm3BGwexRHIHRPrzYwOsR4LoAXgySPpBFDLmhi09I8SIMjuRZUGZAvQySKmjkwBkh+BmouQ1kNO7MNkXCYAMEXv9NyI-BjBOcD3DfI5qOMHK8ooWgHQAMwZrBHxYHOQCeDTUCAFb06QdLDz0T9dekshl5T6MP1y5VuA+j-EN4AgNTFJuy5osRXsh4UluJ+0vsEAZ6L4BviV4DiNjtU7SjxGIlgBzEgbHgwTkIoxSHBAIQRCCaAoQUECUU+vDaLnA5Daa2AZZrJqLnAQYnaNKVkYzuwSFLvScCZjQY-lgzVtYI4BXxxQBpEG1YYxKOnBmonSQst+QQcBtRSdWRGZjPUTwQ5iWY1u1EBuBNGOHAMYq7SGwEaICA1NNzK7WVB7tSOw4ggnK9knNRRRyF8EfjJLHk1XzE+CnUaQK0PfQhgAkQts7VYhksgHYx2N6BnYiFnSNiGfDk9j7DH1hItO8Z+wFRBwWMCPNVwG6OqtfleXQBVqoLUDcw+cDwC3wbABGC1pzkWjUQ1P5DgEl47rPr0i0kvC+y2sOGHDXzDLZWjSNkbMZLU0VaABJ3IBi424LLjAZXJWq0ezZqIZi5Y8mI7jZYiUFYtUOTuMzQvQpMUSNVzFax2NQgRL12RG4uGHoBFreAAAA1UPDD05wKePbAZ4rUCdFV1e-VXii4z1G2snRFqWAZZxFDQZI1NUgAxjerHQHsh8hTLXrjG4rUFXpR+FeMni94ra3PMCxHUGqUaDRcMrYS8FqGKx54uACXjlGbsUkiAbIG3o1kxXwTXNNI1QxzDoEiFgZxZxPXDPiUxJZm8MM4eoEKULmZ+O0i7JMMLzUYJaMM4E4E4iS9Db3XwQ0lCZfCXv1cE-EFDYdQQOQUlnhfBNOE0hKOSwS96WAFRFL4y6NbR4RfYTKlZxeMUGFqY+UkHjlYsVyL0yxZC2dFYAHMXPi+EhKz8hSxRazET9Y2sWwSo7XhPBjvIfhNUShEh2RESaDXwUkSKE3MUyx-IIsRLFahKsRgTx444gMN-IBnA8jixPMUrF8sDBKDimKHuLiMIQMQBM8N7cwIiMQksL3UCGgAJJclpAaHWM5n3EANWAEaLtCqRICO1GJ8+gp3zCTivWKJHggAA">TypeScript Playground as of 2022-09-16</a>

## First: End result demo!

There is gonna be a lot of code so to peak your interest let me present you with the end result.
A UI for playing Tic-Tac-Toe on the typelevel where type errors are used to display the state of the game and provide feedback for correct play.

```typescript
// ##################################
// ##################################
// #          Play a Game           #
// #              of                #
// #--------------------------------#
// #           Typelevel            #
// #          Tic-Tac-Toe           #
// #--------------------------------#
// #              UI                #
// #          STARTS HERE           #
// ##################################
// ##################################
// 
// This is my attempt of a decent UX (hehe).
// 0. Select game board size (3 => 3x3, 4 => 4x4, etc) 
// 1. Cross will be the first to move
// 2. Just enter coordinates as a number xy
//    (13 => Coordinate(x=1, y=3))
// 
// The status checks below will turn RED 
// To show what state the game is in.
//
// Illegal moves will be compile-time errors
// with decent error messages.
//
// Hover ___DISPLAY__ for a visual representation
// of the current state of the game.
```

### Display
![](display_2.gif)

### Current state highlighting
![](states_of_game.gif)

### Error handling
![](errors.gif)


##  Requirements  

If you would like to give this a try yourself, here are the requirements.

Design an API for a Tic-Tac-Toe board, consisting of types
representing states of the board, along with functions 
`move`, `takeMoveBack`, `whoWonOrDraw`, and `isPositionOccupied`.

* All functions must be pure
* All functions must return a sensible value and may not throw exceptions
* A move can only be made if
  - the game is not over
  - the player is the current player
  - the `move` is valid (i.e. not already played)
* Calling `TakeMoveBack` on a board with no moves is a compile-time error
* Calling `WhoWonOrDraw` on a tic-tac-toe board but the game has not finished is a compile-time error
* `IsPositionOccupied` works for in-play and completed games.

## Some extra design decisions
I wanted the game to be possible to play on boards of any size, (3x3, 4x4, 5x5, etc).
To achieve this the winning positions need to be calculated from `Size` instead of hard-coded. 
This is possible but a bit fiddly. I have not yet achieved the ability to have two games of different `Size` in the same project. To do that I would have to parameterize the program a bit more, this is something to try in a later version (famous last words). 

## Show me the code! 

Soon!... The reason this is written in TypeScript is that it's the language I know best, and also the language I want to get better at the most but also TypeScript has a bunch of typelevel features that very few other mainstream typed languages have. 

We will go through the code top to bottom, except for the "UI" code, which will be left for last.
There are a lot of comments in the code that are also meant to explain the program, so I will reuse them here.
<style>
details{
 background: #ededed; 
 border-radius:5px; 
 padding: 10px;
 margin-bottom:10px;
}

summary {
  cursor: pointer;
  user-select: none;
}

html {
  scroll-behavior: smooth;
}
</style>

<div style="background:rgba(255,99,71,0.8);  padding: 10px; border-radius: 10px;" >
  <h4 style="color: yellow; margin: 0px; padding: 15px 0px;"><b>A Note about Utils</b></h4>
  <div class="font " style="color: #fafafa; ">The code contains a quite extensive section of utility functions, 
  Instead of going though all of them first, the explanation is inlined as a optional reading at first use. So if you are more interested in how to model the problem and would like to be able to take functions like <b>UnionToIntersection</b> for granted you can. 

  But if you really want to know how that is implemented you can by clicking the arrow next to the section
  </div>

  <details>
  <summary>Util name: Click here to expand</summary>
    Here is an explanation.
  </details>
</div>



# Capturing the concepts contained in Tic-Tac-Toe
### Player


```typescript
type Player = Cross | Circle;
  interface Circle { __type: "O";     }
  interface Cross  { __type: "X";     }
```

We use `interface` instead of `type` to get the type-level information 
(when you hover / or read a compile time error) to show `Circle`
instead  `{__type: "Circle"}` which it would do with `type`.
It makes it a bit more pretty (not much more difference than that). 

### Square
```typescript
type Square = Player | Empty;
  interface Empty  { __type: "Empty"; }

```

### Size
```typescript
// ##############################################
type Size = GameSize;
// ##############################################
```

The `GameSize` is set to `3` for this walk-through. </br>
_(Size was here before i made the UI at the top therefore the redeclaration)_

### Column & Row
```typescript
// Column and Row can potentially be different sizes
// Note: winning on the diagonal will have to change 
// If the game is not square.
type Column      = ToUnion<FromToInc<1,Size>>;
type Row         = ToUnion<FromToInc<1,Size>>;
type Coordinates = CartesianProductString<Column, Row>
```


The type of `Column` and `Row` is (in this case) `1 | 2 | 3`.
First, we generate numbers between `1` and `Size` which gives us`[1,2,3]`
then we turn that into a union and end up with `1 | 2 | 3`.

`Coordiantes` have the type instance of  
`"22" | "21" | "23" | "12" | "11" | "13" | "32" | "31" | "33"`. 


##### Utils used
<!-- Arithmetic START -->
<details>
<summary>Arithmetic: FromToInc, FromToDec, PlusOne, MinusOne</summary>
<h3>Arithmetic</h3>

In a `3x3` game, `11,22,33` form a diagonal, in a `4x4` game the diagonal is `11,22,33,44`. 
Any player that has one of these diagonals has won the game.

To be able to derive diagonals and other winning positions from  `Size` we need the ability to do some
math on the typelevel. Luckily that is very possible in TypeScript.
Our needs contain only the ability to do plus and minus one. This ability will allow us to perform 
typelevel recursion.

With many of these more exotic recursive types, there is a limit to how far they will work and 
sometimes there are issues, which means you will have to try something different.
A recursive type in TypeScript 4.5 has a max call stack of [`999`](https://github.com/microsoft/TypeScript/pull/45711/files#diff-d9ab6589e714c71e657f601cf30ff51dfc607fc98419bf72e04f6b0fa92cc4b8R15233)



```typescript
// MinusOne<N>
// Defined between 1 and 1000
// Take a number N
// Check if length of empty array + 1 unknown element 
// is equal to N, if it is, return length of array 
// which then is one less then N.
// If not, recursively call MinusOne with an array 
// that is one element longer.
type MinusOne<N extends number, Arr extends any[] = []> = [
  ...Arr,
  unknown
]['length'] extends N
  ? Arr['length']
  : MinusOne<N, [...Arr, unknown]>

// PlusOne<N>
// Defined between 0 and 999
// Start with an array of length 0 and check if it is 
// equal to N. 
// If it is add one element to the array and return 
// it's length.
// If not recursively call PlusOne with an array that is 
// one element longer.
// This way we get N + 1
type PlusOne<N extends number, Arr extends any[] = []> = 
  [...Arr]['length'] extends N
    ? [...Arr, unknown]['length']
    : PlusOne<N, [...Arr, unknown]>

// FromToInc<Lower,Higher>
// Gives back an Array of all numbers 
// between Lower and Higher (inclusive)
// Example: FromToInc<1,3> = [1,2,3]
type FromToInc<From extends number, 
               To extends number, 
               acc extends any[] = []> = 
        From extends PlusOne<To> 
          ? acc 
          : FromToInc<PlusOne<From>, To, [...acc, From]>;

// FromToDec<Higher,Lower>
// Gives back an Array of all numbers 
// between Higher and Lower (inclusive)
// Example: FromToDec<3,1> = [3,2,1]
type FromToDec<From extends number, 
              To extends number, 
              acc extends any[] = []> = 
        From extends MinusOne<To> 
          ? acc 
          : FromToDec<MinusOne<From>, To, [...acc, From]>;
```
</details>
<!-- Arithmetic END -->

<!-- UTIL ToUnion START -->
<details>
<summary style="cursor: pointer; user-select:none">To Union</summary>
<h3>To Union</h3>

```typescript
// Example: ToUnion<[1,2,3]> = 1 | 2 | 3
type ToUnion<T extends Array<any>> = T[number]
```

Array has a index signature of `number`
```typescript
// something like
type Array<T> = { [index: number]: T ...}
```
So by indexing with `number` we get back `T`.
See [index-signatures](https://www.typescriptlang.org/docs/handbook/2/objects.html#index-signatures) for more info.

`ToUnion` is purely to have a nicer API that explains better what is being done.

</details>
<!-- UTIL ToUnion END -->


<!-- Cartesian Product START -->
<details>
<summary>Cartesian Product</summary>

<h3>Cartesian Product</h3>

```typescript
// CartesianProduct<X,Y>
// Example: 
// CartesianProduct<"a" | "b", "c" | "d"> = "ac" | "ad" | "bc" | "bd"
type CartesianProductString<T1 extends ToStringableTypes,T2 extends ToStringableTypes > = `${T1}${T2}`;
type ToStringableTypes = string | number | boolean | bigint;
```
```typescript
type Cartesian...<T1 extends ... ,T2 extends ...> = ${T1}${T2}
```
`T1` and `T2` can both be a union with multiple members.
Say
```typescript
T1 = "a" | "b" | "c" 
T2 = "d" | "e" | "f"
```
which gives us 

```typescript
${ "a" | "b" | "c" }${ "d" | "e" | "f" }
```

We have three choices for the first part of the string, and three choices for the second part.
So for each choice we have three other choices to choose from
```typescript
`a${"d"| "e" | "f"}` | `b${"d" | "e" | "f"}` | `c{"d" | "e" | "f"}`
```
If we multiply the three choices for the second part, we get the cartesian product of the two initial types.
```typescript
"ad"| "ae" | "af" | "bd" | "be" | "bf" | "cd" | "ce" | "cf"
```


[The Algebra of algebraic data types](https://gist.github.com/gregberns/5e9da0c95a9a8d2b6338afe69310b945)
Is a great resource if you want to learn more about this
and after reading that, you can see that
we need a member from both `T1` and `T2`, so we have `T1 * T2 choices`.
So for our `T1` and `T2` of `"a" | "b" | "c"` and `"d" | "e" | "f"`  we have
`3 * 3 = 9 possible pairs`

```typescript
// Algebraic refactoring
 1 + 1 + 1 + 1 + 1 + 1 + 1 + 1 + 1 = 9
 "ad"| "ae" | "af" | "bd" | "be" | "bf" | "cd" | "ce" | "cf"

 (1 * (1 + 1 + 1)) + (1 * (1 + 1 + 1)) + (1 * (1 + 1 + 1)) = 9
 `a${"d"| "e" | "f"} | `b${"d" | "e" | "f"}` | `c${"d" | "e" | "f"}`

 (1 + 1 + 1) * (1 + 1 + 1) = 9
`${ "a" | "b" | "c" }${ "d" | "e" | "f" }` 
 (3) * (3) = 9
 ```

A goal in the program is that as much as possible of the types are derived from other more basic types. 
The `CartesianProduct` function is used to produce coordinates between `Rows` and `Columns`, 
```typescript
// simplified
type AllCoordinates = 
  CartesianProduct<Columns,Rows> = Col1Row1 | Col2Row1 | ... | Col1Row2
```
</details>
<!-- Cartesian Product END -->



#### _Side note_
_Actually, the type of Column and Row is `2 | 1 | 3`._
_When you define a union like `type A = 1 | 2 ` the type will become `A = 2 | 1` which on the typelevel is equivalent, however, in this application, we very much care about traversal order and numbers being in order so we need to do some extra tricks sometimes to combat this._
_Maybe TypeScript makes no guarantees on the order of union members, so by scrambling them on purpose
it hinders people from depending on something that is not part of the spec._


### Winning positions

 The way we are going to see if a player has won yet
 is by using the fact that we know what combination of
 positions are winning, if a player has all of them they have won.
 Steps:

 1. Create a union of all the winning positions
    ```typescript
    ["11", "12", "13"] | ["21", "22", "23"] | ... 
    ```

 2. Check what the current state of all of them are
    ```typescript
    [Circle, Cross, Empty] | [Circle, Circle, Circle] ... 
    ```

 3. Create an intersection those states, and remove the array/tuple
    ```typescript
    [Circle & Cross & Empty] | [Circle & Circle & Circle] | ... 
    [never] | [Circle]
    never | Circle
    Circle
    ```

 Only time we get a value is when **all three are the same**

 Now we can check if the player is the winner, 
 by checking if the intersection contains a player.
 ```typescript
 PlayerCircle extends Intersection ? true : false
 ```

```typescript
// WinningPositions
// All the winning positions for a Tic-Tac-Toe game.
// Example
// ["11", "12", "13"] | ["21", "22", "23"] | ...
type WinningPositions =
  // Rows
  | GetRowPositions<Column, Row>
  // Columns
  | GetColumnPositions<Column, Row>
  // Diagonals
  | GetDiagonalPositions<Size>

// ###################################
// #### Winning Positions Helpers ####
// ###################################

type GetRowPositions<C extends Column, R extends Row> = 
    R extends Row 
      ? [CartesianProductString<C, R>] 
      : never;

type GetColumnPositions<C extends Column, R extends Row> = 
    C extends Column 
      ? [CartesianProductString<C, R>] 
      : never;

type GetDiagonalPositions<S extends Size> = 
    StringConcatTuples<Diagonals<S>>

// Only first type parameter is allowed to be supplied
type Diagonals<
      Size extends number, 
      _FromToSize extends number[] = FromToInc<1,Size>, 
      _SizeToFrom extends number[] = FromToDec<Size, 1>, 
      > =  
    | Zip<_FromToSize, _FromToSize> 
    | Zip<_FromToSize, _SizeToFrom>


```

`WinningPositions` is just the union of all positions that are winning. A position for us is just a combination(array) of coordinates. _(A chess position is not just a bunch of squares but also the pieces on those squares so maybe `WinningPositions` is not the best name)._


`GetRowPositions` and `GetColumnPositions` "iterates" through either row or column and
then creates the Cartesian product between those values. 
In code, it would read something like 
```typescript
forEach(Row).map((r) => getCatesianProduct(Column, r))
```
So the output is `["11", "21", "31"] | ["21", "22", "23"] ...` for `Row` for example. 
When you do `R extends Row ? ... | ...` in TypeScript, that is "looping" over `R` and creating a union of all the results.
The details of this are discussed in great detail in the <a href="#union-to-intersection">`UnionToIntersection`</a> util explanation.

`Diagonals`  have two parameters that are not allowed to be used when calling the type-level function. 
This is so they can be used to bind the result of a typelevel function to allow for reuse in the function body.

Here we are generating two arrays `[1,2,3]` and `[3,2,1]` and then we do two `Zip` operations
```typescript 
Zip<[1,2,3],[1,2,3]> 
```  
and 
```typescript
Zip<[1,2,3],[3,2,1]>
``` 
which produces `[[1,1],[2,2],[3,3]]`
and `[[1,3],[2,2],[3,1]]` 

We then turn each tuple into strings using `StringConcatTuples` in `GetDiagonalPositions`. Resulting in
`["11", "22", "33"]` and `["13", "22", "31"]`.


##### Utils used

<!-- ZIP START -->
<details>
<summary>Zip</summary>
<h3>Zip</h3>

```typescript
// Zip two arrays together
// Example: 
// Zip<[1,2,3],["a","b","c"]> = [[1,"a"],[2,"b"],[3,"c"]]
type Zip<
      T extends any[], 
      U extends any[], 
      Acc extends any[] = []
      > = 
  T extends [infer Head, ...infer Tail] ? 
  U extends [infer Head2, ...infer Tail2] ? 
  Zip<Tail, Tail2, [...Acc, [Head, Head2]]> : Acc  : Acc;

```
Zip is a quite simple recursive function looking very much like the code version would, there is some neater ways where you would infer both heads and tails at once. 
https://github.com/type-challenges/type-challenges/issues/4495

But with that implementation TypeScript fails to do type inferencinging later in the program.
</details>
<!-- ZIP END -->

<!-- String Concat Tuples START -->
<details>
<summary>String Concat Tuples</summary>
<h3>String Concat Tuples</h3>

```typescript
// Join tuples together to strings
// Example: 
// StringConcatTuples<[[1,2],[3,4]]> = ["12","34"]
type StringConcatTuples<T extends [number, number][]> = 
  {[Key in keyof T]: `${T[Key][0]}${T[Key][1]}`};
```
`StringConcatTuples` is so we can use coordinates as keys, and do a lookup from coordinate to a square.

We use [mapped types](https://www.typescriptlang.org/docs/handbook/2/mapped-types.html)
since it allows us to loop over the members in a type
`keyof` gives us a type that is the union of all the `keys` in `T`.
</details>
<!-- String Concat Tuples END -->


### Board

```typescript
// Fundamental data type of the game.
// Board contains a mapping from Coordinate to Square
// A Square is either Empty, Cross, or Circle.
type Board = { [s in Coordinates]: Square };
```

# Game States
```typescript
// The game can be in one of three states:
// 1. Round in progress
// 2. Won
// 3. Draw
type GameStates = 
  | Round<any, any, any> 
  | Winner<any, any, any>
  | Draw<any, any> 
```

### Round
```typescript
// ###################################
// ####           Round           ####
// ###################################
// 
// A Round has a bunch of Squares and a Player that is next 
// to move. It also has a previous Round or Nil, 
// to be able to allow for undoing moves.
interface Round<
  B extends Board,
  P extends Player,
  R extends Round<any, any, any> | Nil
> extends HasPrevious<R> {
  __tag: "round";
  board: B;
  nextToMove: P;
}
  interface Nil    { __type: "Nil";   }

// We separate our HasPrevious interface from the 
// Round interface.To be able to use it in other interfaces.
// And have type level functions where the only 
// constraint is that it has the HasPrevious interface.
interface HasPrevious<R> {
  previous: R;
```


### Winner

```typescript
interface Winner<
  S extends Player,
  PrevR extends Round<any, any, any>,
  Curr extends Board
> extends HasPrevious<PrevR> {
  __tag: "winner",
  winningPosition: Curr;
  winner: S;
}

```

### Draw
```typescript
interface Draw<R extends Round<any, any, any>> 
    extends HasPrevious<R> {__tag: "draw";}
```


#### Initial board & round

```typescript
type InitialBoard = { [key in keyof Board]: Empty };
type InitialRound = Round<InitialBoard, Cross, Nil>;
```

#### Game State Helpers
```typescript
type GetBoard<R extends GameStates>
                  = 
                    R extends Draw<any, infer B>         ? B
                  : R extends Round<infer B, any, any>   ? B
                  : R extends Winner<any, any, infer B>  ? B
                  : never;
```

# Game actions

### Move
There is only one action, it's to make a move.

```typescript
// ...
// Last two arguments are not allowed to be passed in, 
// It's used to reduce duplication in the function body.
type Move<
  CurrentRound extends Round<Board, P, any>,
  P extends Player,
  Position extends AvailableSquares<CurrentRound["board"]>,
  _NextBoard extends Board = 
    SetSquare<CurrentRound["board"], Position, P>,
  _NextRound extends Round<any,any,any> = 
    Round<_NextBoard, GetNextPlayer<P>, CurrentRound>
> = 
HasWon<P,_NextRound> extends true ?
  ? Winner<P, CurrentRound, _NextBoard>
  : NoMoreSquares<_NextBoard> extends true
    ? Draw<CurrentRound, _NextBoard>
    : _NextRound
```
Move steps:
1. Check if the position is part of `AvailableSquares[CurrentRound['board']]`
2. Create two variables, which are the board and round after the move has been applied
   `_NextBoard` and `_NextRound`
3. Check if player has won in the `_NextRound`, if `true` return `Winner<P, ...>`
4. Check if the game will have no more squares after this move, if true return `Draw<...>`
5. Else return next Round.

# Game state functions

### Available Squares
```typescript
// Squares that are possible to play on
type AvailableSquares<B extends Board> = {
  [Coordinate in keyof B]: B[Coordinate] extends Empty ?
        Coordinate 
      : never;
}[keyof B];
```

`AvailableSquares` loops through the coordinates and replaces every square with either the `Coordinate` or `never`
```typescript
{
 "11": never, 
 "12": "12",
 ...
}
```
We then lookup all values for all keys with `[keyof B]` this produces a union like 
`never | "12" | ... ` and since `never` represents the absence of a value.
`never` gets removed from unions leaving only the squares that are possible to play.

### Get next player
Toggles between the players
```typescript
type GetNextPlayer<P extends Player> = 
  P extends Cross ? Circle : Cross;

```

### Set square
Find and replace what is on a square, by looping through all coordinates
until we find the one we want to set.
```typescript
// Sets a Square to a Player
type SetSquare<B extends Board, CoordinateToSet, Player> = {
  [Coord in keyof B]: Coord extends CoordinateToSet ?
      Player 
    : B[Coord];
};
```
### No more squares

If the `Board` extends `never` that means there was nothing in the union
returned by `AvailableSquares<B>`, thus there are no more squares to play on.
```typescript
type NoMoreSquares<B extends Board> = 
  AvailableSquares<B> extends never ? true : false;
```
### Get winner
```typescript
// If there is a winner in the Squares provided then 
// the winner is returned.
type GetWinner<B extends Board> =
   UniqueInSequence<LookupCoordinates<WinningPositions,B>>

// LookupPosition returns the state of the squares 
// at each position listed
// ["11", "12", "13"] | ... -> [Circle, Circle, Circle] | ..
type LookupCoordinates<
        Coords extends Array<Coordinates>, 
        B extends Board> =
    { [Key in keyof Coords ]: B[Coords[Key]] }

// If there is any Array that contains only the same element
// then that element will be returned
type UniqueInSequence<P extends Array<unknown>> =
  P extends Array<unknown> ? 
    UnionToIntersection<P[number]> : never

```

We use the `WinningPositions` together with a `Board` to look up the state of all those winning tuples.
We then see if any of those tuples of coordinates only contain one player.

`GetWinner` might not be the perfect name, because it gives back whatever is unique in a winning set of squares so for example it would return `Empty` for the initial board. 
*(So the game starts out with `Empty` as a winner one could say)*

#### Utils used

<!-- Union To Intersection START -->
<details id="union-to-intersection">
<summary>Union To Intersection (very long!)</summary>
<h3>Union To Intersection</h3>

This is going to be the longest explanation in the whole post (it even has a quiz!)
so bear with me. I think this can be very instructive if you don't already know all this
at a deep level. This was very useful for me to write if nothing else.


```typescript
// UnionToIntersection<X>
// Takes a union like `A | B | C` and 
// returns an intersection like `A & B & C`
type UnionToIntersection<U> = 
  _PutUnionMembersIntoFunctionArgumentPosition<U> extends 
      ((k: infer I)=>void) 
          ?  I 
          : never

type _PutUnionMembersIntoFunctionArgumentPosition<U> = 
      U extends any 
        ? (k: U)=>void  
        : never;
```
The creator of `UnionToIntersection` is as far as i know [Jcalz](
https://github.com/microsoft/TypeScript/issues/29594#issuecomment-507673155
)

It's not much code is it, but there is a lot to unpack! and it's worthy of a through 
explanation.
The function has been somewhat of a debated topic, if it's a hack or not?, and if it should be included in official `lib.d.ts` or not.
I'm most certainly don't think this is a hack at all, if this would break in a future version of 
TypeScript, i think that would break a lot of other things too.

Sources where i learned about this function
* https://stackoverflow.com/questions/50374908/transform-union-type-to-intersection-type/50375286#50375286
* https://github.com/microsoft/TypeScript/issues/29594#issuecomment-507673155


There are two parts to the `UnionToIntersection` function and i will go through them separately now.

### PART 1
```typescript
type _PutUnionMembersIntoFunctionArgumentPosition<U> = 
      U extends any 
        ? (k: U)=>void  
        : never;
```

This is using `U` as a 'naked' type parameter.
Seems this lingo is no longer part of the [official docs](https://www.typescriptlang.org/docs/handbook/2/conditional-types.html#distributive-conditional-types), which is a shame,
will make it harder to understand, why things act like they do.


[Naked type parameters distributes over a union](https://stackoverflow.com/questions/51651499/typescript-what-is-a-naked-type-parameter
). 
This means the conditional part will be applied to each member of the union.
and the result will be a union of all applications of the conditional.
)

Let me show you. 

```typescript
type _PutUnionMembersIntoFunctionArgumentPosition<U> = 
      U extends any 
        ? (k: U)=>void  
        : never;

type ABC = "a" | "b" | "c"
type _ = _PutUnionMembersIntoFunctionArgumentPosition<ABC>
```

#### Replacement steps naked type param
To Replace `U` with supplied type `ABC` in the body 
of `_PutUnionMembersIntoFunctionArgumentPosition` 
check if `U` is 'clothed' or 'naked'. 
`U` is naked do a replacement for each member in 
`ABC` and make a union of the results.

```typescript
  "a" extends any ? (k: "a")  => void : never 
| "b" extends any ? (k: "b")  => void : never 
| "c" extends any ? (k: "c")  => void : never
```

Which simplifies to 
```typescript
  (k: "a")  => void  
| (k: "b")  => void  
| (k: "c")  => void
```

#### Common error
Many people (including myself in the past) think that a type parameter
get's inlined into the type level function like.

```typescript
_PutUnionMembersIntoFunctionArgumentPosition<"a"|"b"|"c">
("a" | "b" | "c") extends any ? 
  (k: "a" | "b" | "c")  => void : never
```


# **-------- THIS IS WRONG! --------**


To get that behavior, the type parameter need to be 'clothed'.

#### Clothed example

```typescript
_PutInFunctionArgumentPosition<U> = 
    [U] extends [any] 
        ? (k: U)=>void 
        : never

type ABC = "a" | "b" | "c"
type _   = _PutInFunctionArgumentPosition<ABC>
```

#### Replacement steps clothed type param
To Replace `U` with supplied type `ABC` in the body of 
`_PutInFunctionArgumentPosition` check if `U` is 'clothed' or 'naked'. 
`U` is 'clothed' so do the replacement **inline**.

```typescript
(["a" | "b" | "c"] extends [any] ? 
    (k: "a" | "b" | "c")=>void : never)
```

Which simplifies to
```
(k: "a" | "b" | "c") => void
```

### QUIZ 
To test yourself on the difference between 'naked' and 'clothed',
Think of the results of `Inline` and calling the functions
with `ABC` and `ABC3`

```typescript
type ABC  = "a" | "b" | "c"
type ABC3 = ABC | 3

type ABC_Inline_Extends_A      = ABC extends   "a"    ? 
                                     (k: ABC) => void 
                                    : never
type Naked_Extends_A<T>        =  T  extends   "a"    ? 
                                     (k:  T ) => void 
                                    : never
type Naked_Extends_String<T>   =  T  extends  string  ? 
                                     (k:  T ) => void 
                                    : never
type Clothed_Extends_String<T> = [T] extends [string] ? 
                                     (k:  T ) => void 
                                    : never
```

#### QUIZ Answers
<a href="https://www.typescriptlang.org/play?#code/PTAEBEEsGcGMBsCGkC2BTATgLlAFwBYyhEAOGA9gEaKXwCeoAdubqGgB6Ky72j7kB3YqwHkMAa2gBYAFAhQAIQCuIsZNCJoG0Oka5E8HeQAmaeLNm46JNKACCCgMKhQAXlAAiRB9AAfT5Q+-h6wHpbWtg6OAMxu9k5+oNEWMlY28Y4A+gCSjPCQjGiZAKLsuGiMxtCZdi51cVFsZRVVdV4+dQD8oAAU4jhRAJRuAHygAG7kkMagOIXjmOHpAHKI4mjGJc2V1XYAPAAqY-V17qAHLhzlO23e9d19OOegw65jk9OzTGgLGEu2q3Wm1K1yqmQAyrgMAUAOaHY5xZ5NUFaUDQKGwlwPfouC6vd5TGZzH6LVIRUCOeAsfAbLYoiEYxhwo5xADaBwAusiWlpWejoUyudinnjRhNCV95qT-qBcvlCgAlNDQJTwXBadxRHJ5ApFEE8mqyEBGsAK4rggCqABkDsTfiaTaBigANAAKVrsyzsB2yAHlllhHQBaEOhsPhiNhx0HQhaaD8ARaOjkJR4fCIViNAQ0xjEHWFGZEZisWDkRjQaaYDagADkjDWGxrjug5GEoGM5GVTBYoBhaFYxhgGMoKmrKdwADpHY0rjzPHdhRl8eLPnbpWT0gqAAxxQG0-U7Gp7KJjB1yU3m6223o49rLj7GM-yF3uz3ev0B4OR78-x3FBa5gQKYwvgbYoJAIGsAAZmgZigPk6xprYBBEPGKbwDMlC2GgACOSiQOMBgVKwjq4K2BC2HKuoaJQ5ALAANKA2YVKApblpWAowkhaI2LAkBQZAsCgEojCQGWTG2OmCxTue5w0ng5IkIgGCIOg5QYL2-Y1log78pAI7lDM46gHRmDcWxg64GJ9bmLJFaMLAyHyWkthKSpalmRcRB1g2xg1jJxqyXuwLbGC+wnk+ppoCQSCOc8AiQAQaJKCQMWQNWLkZIxXlaPWQJoq2HbaBg0WxWgui4I6UFiGwXCgegKBYRpBQZBolQ6A22gidZJlQdxJUqmq0ABcAjouO03I3BNi53mKD6SiSfyycEgSTa0003jgHiBPeEprkt8jBKEa1aBtjyeKEu2rt89rnpFm3zh4V0zP4Uoaa9i33eds1vCuj53bJ2R9RRCnpG5qn9mZRa+RJrGIIBhCMOIvXcSDFYoGlAmwBmPUIU5MCOgAYiJsB7BNK1BBdHgjETJNk94Yz+MTDlk4EjOgMzpMhNTjrKKwkDtmWNasCVBi8HjaYZox9lxQQGagFhUliUozU6dFLTESZCO2KR5KoDF5XETjZYjbKoAqRRGnQLBbaaNo1upZgGa2CVMVcIbejm6qtjVRpNYHDWoCOtQ1tGbmCbPEQSih3m3G0cYDDkMD8lQSTVkmykmUKgAjLuvl0gakKcceTg0wD8hmpaNpPN93jPUHsknC4-jfTtc2EmNTct7el3t9M90vh6Xo+v6gayT+E8Ro6wUF4eRewiXjhl4FFele78WJaBKqpfkGXklE2XELlMMtoLxVr45FVVTVaB1To5VNbHjTwzMKCdYgwmieJSf9cqqrqiNTuE1Zw3D0kyUAM0659yJDdUkh0Ag+BAa0MBXEZpt1+vNfajojqINCnGRkqCHrc3rlg8uYAXC1yetAhu8DW5UIwR3ZaRDe4MP7gDGUCoABMcRKTUn3HghkxcIpkNAJXK8OBzpDGgQPN0Q93yjy-JPJRjpeEURCvSeeTJF7L1GrJJUbs4oXASklbeaU97pAPpHLQCA+EzFPkVD+jpXZlQqnmeUaBAGyVZFELkSDeQoKFA9KRrCYFvS+jiYJBI2EcNiO4GeB4wSaLhFEaIOjRGXmrhQ28UCQk0PIV3Ih6Con-XkE3RI30WHFJka+YeH4x7yCUY0oBdw-FogIRAohOTikLVuvA7auCURtM4h0uhJDYEHTADgk6QzMQzUqX9HpcDJkuFiNMlBIycRJBeNQ0hK98mUPrtgwp9CqlMIqScv6RywkiKyVtLpCyjmjOkWcnuFyHyZ3JAqAALDwqkajZ6JIIYvVJjoxGZOuXsp0si3wj0-OPRpk9HSsgyLEXxeDQB8gIYEyRTgxkQt0fIN6QA" target="_blank">Typescript Quiz Answers</a>

_Note:_
_If we would change the type of `_PutUnionMembersIntoFunctionArgumentPosition` to be
`(k: U) => void`, we would also get `(k: "a" | "b" | "c") => void`.
We need the `U extends any ?` to distribute the union._

Moving on....

### PART 2 ###
```typescript
...PART1 extends ((k: infer I)=>void) ? I : never
```

So Part 1 gave use the result
```typescript
  (k: "a")  => void  
| (k: "b")  => void  
| (k: "c")  => void
```

We are not replacing any type-parameter in PART2, so we can just 
inline the results from calling `_PutUnionMembersIntoFunctionArgumentPosition<U>`.

```typescript
(    (k: "a")  => void) 
   | (k: "b")  => void) 
   | (k: "c")  => void)
) extends ((k: infer I)=>void) ? I : never
```

(If you have not heard about `infer` before look at these docs.
https://learntypescript.dev/09/l2-conditional-infer)

We are saying here that there is a function  
```typescript
((k: infer I) => void) 
```
that can be either      
```typescript
     (k: "a") => void 
  or (k: "b") => void 
  or (k: "c") => void
```
**It's not the argument to the function that can be `"a" | "b" | "c"`.
There are three separate functions with those argument, and we DON'T know which one we will have.**
Therefore ghe only **SAFE** argument to 
```typescript
((k: infer I) => void) 
```
the intersection of all possible arguments.

That might had been a bit confusing, so let's look at one example

```typescript
type T = (k: HasName) => void | (k: HasAge) => void
const func : T = ...
```

If we now want to call `func` what argument do we need to give it ?

Well we don't know if `T` is 
```typescript
   (k: HasName) => void 
or (k: HasAge)  => void
```
So we need to call `func` with an argument **that is both**. 

```typescript
type Dog = HasName & HasAge
const dog : Dog = createDog("Fido", 3)
func(dog)
```

_Thank AnyHowStep for this [answer](
https://github.com/microsoft/TypeScript/issues/29594#issuecomment-507701193
) that helped me write this section_
</details>
<!-- Union To Intersection END -->

### Has Won
```typescript
type HasWon<
  P extends Player,
  B extends Round<any, any, any>
> = P extends GetWinner<B["squares"]> ? true : false;
```

# Extra functions from requirements

### Who won or draw ?
Just a function that gives back a string informing 
who won or if it's a draw, only possible to call when the game state is 
either `Draw` or `Winner`

```typescript
type WhoWonOrDraw<
    A extends Draw<any,any> 
  | Winner<Player, any, any>> = (
  state: A
) => A extends Winner<infer P, any, any>
  ? PlayerWinnerString<P>
  : DrawString;
  type DrawString = "The game was a draw";

type PlayerWinnerString<P extends Player> = 
  P extends Circle ? 
    CircleWonString
  : CrossWonString
  type CircleWonString = "Circle Won the game"
  type CrossWonString = "Cross Won the game"

```

### Take move back
Any round except the initial round has a previous round. 
This function gives back that previous round.

```typescript
type TakeMoveBack<
        R extends HasPrevious<Round<any, any, any>>
        > = 
        R["previous"];
```

### Is position occupied?
```typescript
type IsPositionOccupied<
  RW extends Winner<any, any, any> | Round<any, any, any>,
  Coord extends Coordinates,
  B extends Board = GetBoard<RW>
> = (
  B[Coord] 
) extends Empty
  ? false
  : true;
```

**That is all the code related to the fundamentals of the game!**

There is some extra code for the 'Game UI' to play the game in a nicer
way than you will see in the tests.
We will go through that code last.

# Tests


Note, since these are `typelevel` tests we want to be able
to test that we do get `type-errors`, when we should while 
allowing the program to compile. TypeScript gives us this handy comment we can use to check for type errors.
> `@ts-expect-error`
<a href="https://www.typescriptlang.org/docs/handbook/release-notes/typescript-3-9.html#-ts-expect-error-comments" target="__blank">`@ts-expect-error`</a> gives an error if there is **no** error.

_I have hidden the tests in a collapsible section, so you can skip them if you want._

### Test Utils

**To be able to write any useful tests we need `equality`! How do you check if two types are Equal?**

Once again type-challenges to the rescue!

The `Equal` and `Expect` functions used in the tests have been taken directly from
<a href="https://github.com/type-challenges/type-challenges/blob/master/utils/index.d.ts" target="__blank">
type-challenges 
</a>
repo.

#### Equal
```typescript
Equal<X,Y> 
Check if two types are equal.

type Equal<X, Y> = 
  (<T>() => T extends X ? 1 : 2) extends 
  (<T>() => T extends Y ? 1 : 2) ? true : false;

```
For full discussion around this function see this  <a href="https://github.com/Microsoft/TypeScript/issues/27024#issuecomment-421529650" target="__blank">TypeScript issue</a>

> ...It relies on conditional types being deferred when T is not known. 
> Assignability of deferred conditional types relies on an internal isTypeIdenticalTo check, 
> which is only true for two conditional types if:
> 
>   * Both conditional types have the same constraint
>   * The true and false branches of both conditions are the same type
> <a href="https://github.com/Microsoft/TypeScript/issues/27024#issuecomment-510924206">
> - fatcerberus</a>


#### Expect
```typescript
// Expect<T>
// Give type-level error if T is not true
type Expect<T extends true> = T;

```

<details>
<summary>Show Test Cases</summary>
<h3>Test cases</h3>

```typescript
// ##################################
// #              TEST              #
// ##################################
// #         Correct strings        #
// ##################################
type CircleWonStringTest = 
  Expect<
      Equal<
          ReturnType<WhoWonOrDraw<WinCircleFinal>>, 
          CircleWonString
          >
        >;

type CrossWonStringTest = 
  Expect<
      Equal<
          ReturnType<WhoWonOrDraw<WinCrossFinal>>, 
          CrossWonString
          >
        >;

type DrawStringTest = 
  Expect<
      Equal<
          ReturnType<WhoWonOrDraw<DrawFinal>>, 
          DrawString
          >
        >;

// ##################################
// #              TEST              #
// ##################################
// #         No double moves        #
// ##################################
// @ts-expect-error
type NoDoubleMove = Move<
                      Move<InitialRound, Cross, "33">, 
                                         Cross, "13">;

// ##################################
// #              TEST              #
// ##################################
// #      No start with Circle      #
// ##################################
// @ts-expect-error
type NoStartWithCircle = Move<InitialRound, Circle, "33">;


// ##################################
// #              TEST              #
// ##################################
// #      No taking a used square   #
// ##################################
// @ts-expect-error
type NoTakingAUsedSquare = 
  Move<
    Move<
      InitialRound, Cross,  "33">, 
                    Circle, "33">

// ##################################
// #              TEST              #
// ##################################
// #  InitialRound has no previous  #
// #  Don't allow to take too many  #
// #           moves back           #
// ##################################
// @ts-expect-error
type NotToManyMovesBack = TakeMoveBack<InitialRound>;


// ##################################
// #              TEST              #
// ##################################
// #         Making a move          #
// #       and taking it back       #
// #   Gives back the start state   #
// ##################################
type MoveOne      = Move<InitialRound, Cross, "33">;
type BackToNormal = TakeMoveBack<MoveOne>;
type Outcome      = Expect<
  Equal<
    InitialRound, 
    BackToNormal
  >>;

type BackFromDraw = Expect<
                      Equal<
                        TakeMoveBack<DrawFinal>, 
                        DrawStep8
                           >
                          >;
type BackFromWin = Expect<
                      Equal<
                        TakeMoveBack<WinCrossFinal>, 
                        WinCrossStep4
                            >
                          >;

// ##################################
// #              TEST              #
// ##################################
// #       IsPositionOccupied       #
// ##################################
type Test = Expect<
  Equal<IsPositionOccupied<WinCrossFinal, "12">, false>
>;

type Test2 = Expect<
  Equal<
    IsPositionOccupied<WinCrossFinal, "33">, 
    true
  >>;

type Test3 = Expect<
  Equal<
    IsPositionOccupied<InitialRound, "33">, 
    false
  >>;

// @ts-expect-error
type Test4 = Expect<
  Equal<
    IsPositionOccupied<InitialRound, "33">, 
    true
  >>;

// ##################################
// #              TEST              #
// ##################################
// #    GAME That ends in a draw    #
// ##################################
type DrawStep1 = Move<InitialRound, Cross, "13">;
type DrawStep2 = Move<DrawStep1, Circle, "23">;
type DrawStep3 = Move<DrawStep2, Cross, "33">;
type DrawStep4 = Move<DrawStep3, Circle, "12">;
type DrawStep5 = Move<DrawStep4, Cross, "22">;
type DrawStep6 = Move<DrawStep5, Circle, "11">;
type DrawStep7 = Move<DrawStep6, Cross, "32">;
type DrawStep8 = Move<DrawStep7, Circle, "31">;
type DrawFinal = Move<DrawStep8, Cross, "21">;
type DrawOutcome = Expect<
  Draw<any> extends DrawFinal ? true : false
  >;


// ##################################
// #              TEST              #
// ##################################
// #     GAME That Cross Wins       #
// ##################################
type WinCrossStep1 = Move<InitialRound, Cross, "13">;
type WinCrossStep2 = Move<WinCrossStep1, Circle, "11">;
type WinCrossStep3 = Move<WinCrossStep2, Cross, "33">;
type WinCrossStep4 = Move<WinCrossStep3, Circle, "21">;
type WinCrossFinal = Move<WinCrossStep4, Cross, "23">;
type WinCrossOutcome = Expect<Equal<
   WinCrossFinal["winner"], Cross
>>;

// ##################################
// #              TEST              #
// ##################################
// #     GAME That Circle Wins      #
// ##################################
type WinCircleStep1 = Move<InitialRound, Cross, "13">;
type WinCircleStep2 = Move<WinCircleStep1, Circle, "11">;
type WinCircleStep3 = Move<WinCircleStep2, Cross, "33">;
type WinCircleStep4 = Move<WinCircleStep3, Circle, "21">;
type WinCircleStep5 = Move<WinCircleStep4, Cross, "22">;
type WinCircleFinal = Move<WinCircleStep5, Circle, "31">;
type WinCircleOutcome = Expect<Equal<
   WinCircleFinal["winner"], Circle
>>;

```
</details>


# UI

I know it's a bit silly to call this a UI, but hey, it gives you visual indications
of the state of the game and yells at what you are doing wrong if you 
try to play the game incorrectly. 
So that is a rudimentary UI. 

#### Display
![](display_2.gif)

#### Current state highlighting
![](states_of_game.gif)

#### Error handling
![](errors.gif)

<details>
<summary>UI Display Code that was shown at the beginning of the post</summary>

```typescript
// To play along
// Copy the code into the TypeScript playground
// https://www.typescriptlang.org/play
// 
//
// ##################################
// ##################################
// #          Play a Game           #
// #              of                #
// #--------------------------------#
// #           Typelevel            #
// #          Tic-Tac-Toe           #
// #--------------------------------#
// #              UI                #
// #          STARTS HERE           #
// ##################################
// ##################################
// 
// This is my attempt of a decent UX (hehe).
// 0. Select game board size (3 => 3x3, 4 => 4x4, etc) 
// 1. Cross will be the first to move
// 2. Just enter coordinates as number 
//    (13 => Coordinate(x=1, y=3))
// 
// The status checks below will turn RED 
// To show what state the game is in.
//
// Illegal moves will be compile-time errors
// with decent error messages.
//
// Hover ___DISPLAY__ for a visual representation
// of the current state of the game.
type GameSize = 3;

//   ##############################
type ____________DISPLAY___________ = d
//   ##############################

type GameStatus =  CrashOrPass<SetError<
  GameLoop<[
  //  Ongoing game
  // 13,23,33

  // Draw 
  // 13, 23, 33, 12, 22, 11, 32, 31, 21

  //  Cross Win
  //  11, 32, 22, 12, 33 

  //  Circle Win
  //  13, 11, 23, 22, 12, 33

  //  Play a taken position
  //  11, 11

  //  Malformed move
  //  11, "Hello"

  // Illegal move
  //  55

  //  Play moves after game is won
  //  11, 32, 22, 12, 33 13

  ]
>>>


/**********@ts-expect-error*******/
//   ##############################
type _______GAME_YET_TO_START______ = 
        GameYetToStart<GameStatus>
//   ##############################

/**********@ts-expect-error*******/
//   ##############################
type ________GAME_IS_ONGOING_______ = 
        GameIsOngoing<GameStatus>
//   ##############################

/**********@ts-expect-error*******/
//   ##############################
type ________GAME_IS_A_DRAW________ = 
        TheGameIsADraw<GameStatus>
//   ##############################

/**********@ts-expect-error*******/
//   ##############################
type ________CROSS_HAS_WON_________ = 
         CrossHasWon<GameStatus>
//   ##############################

/**********@ts-expect-error*******/
//   ##############################
type _______CIRCLE_HAS_WON_________ = 
        CircleHasWon<GameStatus>
//   ##############################

// ##################################
// ##################################
// #--------------------------------#
// #           Typelevel            #
// #          Tic-Tac-Toe           #
// #--------------------------------#
// #              UI                #
// #           ENDS HERE            #
// #--------------------------------#
// ##################################
// ##################################

```
</details>

### Ui Code
#### UI Helpers
```typescript
// 'd' is just to hide the variable as 
// much as possible in the UI above
type d = ShowBoard<GetBoard<GameStatus>>

// These are functions give type errors when the game is 
// not in their state.Then we combine that with 
// @ts-expect-error to flip that behavior
type TheGameIsADraw<T extends Draw<any, any>> = T
type CrossHasWon   <T extends Winner<Cross, any, any>>= T
type CircleHasWon  <T extends Winner<Circle, any, any>> = T
type GameIsOngoing <T extends 
                    Round<any, any, Round<any,any,any>>> = T
type GameYetToStart<T extends InitialRound> = T

```

I use `@ts-expect-error` to turn the type errors around. So it shows an error when the types actually type check. 
That is useful here, in the absence of something like "extends everything except X". 
```typescript
type CrossHasWon<T extends Not<Winner<Cross,any,any>>> = T
```

#### Game Loop
```typescript
type GameLoop<A extends Array<number>, 
              R extends Round<any,any,any> = InitialRound, 
              P extends Player = Cross> = 
  A extends [infer Head, ...infer Tail] ?
    Head extends number ?
      Tail extends Array<number> ?
        NumToStr<Head> extends Coordinates ?
          NumToStr<Head> extends AvailableSquares<R["board"]> ?
            Move<R,P,NumToStr<Head> > extends Round<any,any,any> ?
              GameLoop<Tail, Move<R,P,NumToStr<Head> >, GetNextPlayer<P>> : 
              Tail extends [] ? 
                Move<R,P,NumToStr<Head> > 
                : GAME_ERROR<`No more moves allowed, game is over`>
          : GAME_ERROR<`Square '${Head}' already taken`>
        : GAME_ERROR<`Coordinate '${Head}' is illegal`> 
      : GAME_ERROR<`Tail of Coordinate array is malformatted`>
    : GAME_ERROR<`Coordinate '${Head extends ToStringableTypes ? Head : never}' is not a number`>
  : R

type GAME_ERROR<T extends string> = `__ERROR__: ${T}`
type SetError<T> = [T, T extends GAME_ERROR<string> ? "error" : "noError"]
type CrashOrPass<T extends [unknown, "noError"]> = T[0];
type NumToStr<N extends number> = `${N}`
```
First of we create some data abstraction in that we allow the players to enter `number` instead 
of `Coordinate` then we do some conditional checks to see if that number can be cast into a 
`Coordinate` this makes the UI easier to use since we don't have to add `""` around all moves.

We are kind of able to simulate `X extends not<...>` (i.e type-error if X does extend) a bit with `SetError` and `CrashOrPass` which needs to be used together, I don't know how to put them together into one typelevel function or even better get `GameLoop` to have this constraint by itself. With more work, it's probably possible.

`GameLoop` is a recursive typelevel function that ends when the game ends or an error occurs.
The errors give informative information like `__ERROR__: Square '${Head}' already taken` 
I think it's really cool that we can just inject `Head` into a string and get type errors like 
![](custom-errors.png)

To not just get a return type of a custom error but actually get a compile-time error highlighting it we wrap `GameLoop` in
`SetError` and `CrashOrPass`.
```typescript
type SetError<T> = [T, 
                    T extends GAME_ERROR<string> ? 
                        "error" 
                      : "noError"
                   ]
```
If the return type that extends `GAME_ERROR<string>` then set the second value in the tuple to `"error"`.

`CrashOrPass` then takes the return type from `SetError` and if the second value is **not** `"noError"`
we get a compile time error, which is exactly what we want.
```typescript
type CrashOrPass<T extends [unknown, "noError"]> = T[0];
```
If we do not get a compile-time error the first value of the tuple is returned 
which is just non-error type. 

_(In TypeScript types propagate if possible even if there is a type-error, like here `T[0]` is not the part with the type-error so that propagates.  We use this to also show the error in `___DISPLAY___`)_

I know it's common in Erlang and [Elixir](https://elixirschool.com/en/lessons/intermediate/error_handling) to follow this type of pattern on the value level. 
by returning `{:ok, data } | {:error, reason}`.


### Display

Best for last, the display is the coolest feature!
We want to produce a UI like 
```typescript
{
  [X,X,O],
  [X,_,O],
  [_,_,O],
}
```
To show the state of the game when hovering the type

We use the Board, to first change the Squares from 
`Circle | Cross | Empty` to `X | O | _`

Then it's a matter of producing a layout that the type-checker
will display in a nice way. String was no good because multiline
strings become `XXO\nX_O\n__O`. 
Multidimensional arrays are also just one line 
`[[X,X,O],[X,_,O],[_,_,O]`]` So settled for an object where the keys are the rows.
```typescript
{
  3: [X,X,O],
  2: [X,_,O],
  1: [_,_,O],
}
```

```typescript
// Show the state of the game when hovering the type instantiated type
type PrintGameDisplay<T extends (GameStates | GAME_ERROR<string>)> = 
  T extends GameStates ? ShowBoard<GetBoard<T>> : T

// Some shorter and nicer looking symbols for the Display
interface X {}
interface O {}
interface _ {}

// UIBoard
// Coordinates to something that we want to Display
type UIBoard = {[s in Coordinates]: unknown}

/// #### DISPLAY HELPERS ####

type ShowBoard<B extends Board> = ShowUIBoard<ToUIBoard<B>>;

// ToUIBoard
// The particular board we want to show
// Structurally, a UIBoard
type ToUIBoard<B extends Board> = 
  {[s in Coordinates]: ChangeSquare<B[s]>};

type ChangeSquare<S extends Square> = S extends Cross  ? X
                                    : S extends Circle ? O
                                    : S extends Empty  ? _
                                    : never;

// We want our coordinate system to have 1,1 bottom left
// and Size,Size top right
type RowsBackwards  = FromToDec<Size,1>
type ColumnsForward = FromToInc<1,Size>

// ShowUIBoard
type ShowUIBoard<B extends UIBoard > = 
  {[key in keyof RowsBackwards as KeyToValue<RowsBackwards,key>]: RowsBackwards[key] extends number 
    ? TupleCoordinateLookups<Zip<ColumnsForward,Repeat<RowsBackwards[key], Size>>, B> : never} 

  type KeyToValue<T extends Array<unknown>, K extends keyof T> = 
      K extends `${number}` ? T[K] : never;

  type Repeat<T, N extends number, arr extends Array<T> = []> = 
      N extends 0 ? arr : Repeat<T, MinusOne<N>, [T, ...arr]>;

  type TupleCoordinateLookups<T extends [number, number][], B extends UIBoard> = 
    {[Key in keyof T]: TupleCoordinateLookup<T[Key], B>};

  type TupleCoordinateLookup<T extends [number, number], B extends UIBoard> = 
    `${T[0]}${T[1]}` extends keyof B ? B[`${T[0]}${T[1]}`] : never;
// ShowUIBoard End
```

I indented the types that are just helpers for `ShowUIBoard`. 
We only have some limited ability to create named type variables in a scope
which I have already shown, `<..., MyType = MyTypeFunc<T>>`
So here is another approach based only on convention and there to make the code 
easier to browse. When you have access to creating multiple files you can ofc 
create your scope that way.

`ToUiBoard` loops through all `Coordinates` and maps the members of the `Square` type to another type that we would like to display.


`ShowUIBoard` uses one trick we have not seen yet. 
https://www.typescriptlang.org/docs/handbook/2/mapped-types.html#key-remapping-via-as
it's the `as` syntax that lets us change the `key` while we are mapping. 
That is perfect here because we use the keys `0,1,2, ...Size` in `RowsBackwards`
to be mapped to the value at each index, so we get the rows of our display object.

ex. `RowArray[0]` value is `Size` 
    `RowArray[0]` value is `Size-1` 

```typescript
{
  [Size]    : ...,
  [Size - 1]: ...,
  [Size - 2]: ...,
}
```

Then for the values on each `row` we combine the column values together 
with the current row value, by using the Zip operation, where 
the second argument is just the `row` repeated column length times.

```typescript
Zip([1,2,3], [3,3,3]) = [[1,3],[2,3],[3,3]]

```
Then we do a lookup for each tuple `[x,y]` to get the 
corresponding symbol representing the state.
We do that by first turning `[x,y]` into a string `${x}{y}` 
and the end result is an object that looks like this.

```typescript
{
  3: [X,X,O],
  2: [X,_,O],
  1: [_,_,O],
}
```

And this is our display!
Now we have everything we need to produce the final product. 
![](display.gif)



### Closing thoughts

Thanks for reading this far! I hope you learned something on this journey.  TypeScript is very powerful and you can basically do anything you want as long as you are willing to spend enough time. 
It just gets more and more awkward to achieve the constraints on the typelevel.
I would not say that this is any good practice in general, but knowing that something is possible could 
make it worth exploring in cases where it would be worth the end result.

A few years ago I was of the opinion that if you could have static guarantees you should. 
Now I still want those guarantees but I think it's very prudent and acceptable to use something like 
type guards
```typescript
if(isDog(x)){
  //do something
}
```
And write code that is still safe but does runtime checks,
usually this lead to simpler solutions. 


Don't forget to check out the next cohort of our course in Advanced Software Design.
https://jameskoppelcoaching.com/advanced-software-design-web-course/

Cheers!

 