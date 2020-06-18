import Layout from '../components/layout/layout'
import { Grid } from '@material-ui/core'
import styles from './Photography.module.scss'

export default function Photography({ posts }) {
  return (
    <>
      <Layout>
        <Grid container spacing={4} justify="center">
          {posts.data && posts.data.map(post => (
            <Grid item>
              <a href={post.permalink} target="_blank" rel="noopener noreferrer">
                <img src={post.media_url} className={styles.img}/>
              </a>
            </Grid>
          ))}
        </Grid>
      </Layout>
    </>
  )
}

export async function getStaticProps() {
  const posts = {
    "data": [
      {
        "permalink": "https:\/\/www.instagram.com\/p\/CAd88yjAJSZ\/",
        "media_url": "https:\/\/scontent-lax3-1.cdninstagram.com\/v\/t51.2885-15\/100636064_2286662798296311_7912373022827392231_n.jpg?_nc_cat=103&_nc_sid=8ae9d6&_nc_oc=AQlb7PKOPy1NR9AVP3QH69GbXagQeCEh5X8IkKkjCnrJf1Xc8rFnlGZw5Q3V9P_9EVE&_nc_ht=scontent-lax3-1.cdninstagram.com&oh=962f72aa0ff640c329747a81dcab772d&oe=5F0F996B",
        "media_type": "IMAGE",
        "caption": "Silhouette ◾️",
        "id": "17857118152979468"
      },
      {
        "permalink": "https:\/\/www.instagram.com\/p\/CAd6cR5ghvY\/",
        "media_url": "https:\/\/scontent-lax3-1.cdninstagram.com\/v\/t51.2885-15\/99096575_250081312980869_4500360597841834809_n.jpg?_nc_cat=105&_nc_sid=8ae9d6&_nc_oc=AQkhA7tq3Nri0-EQcXTVCxRKGfJj0Xm0kv5-6S49AGBu-TwhW3eVPxj6bUZSbTCkVCY&_nc_ht=scontent-lax3-1.cdninstagram.com&oh=5d5c7ca3c87d8a95fa79fb687321e60d&oe=5F1202B8",
        "media_type": "IMAGE",
        "caption": "More golden hour colors 🟨🟧",
        "id": "18027420652263863"
      },
      {
        "permalink": "https:\/\/www.instagram.com\/p\/CAd492IgquW\/",
        "media_url": "https:\/\/scontent-lax3-1.cdninstagram.com\/v\/t51.2885-15\/98319564_2710085962602429_7819190807781331456_n.jpg?_nc_cat=100&_nc_sid=8ae9d6&_nc_oc=AQkSNJdx6_mXjCLMZV4IltjcMMLB2iR2Yiyy8Gq45f0VQ6CwKL0i7IVzzO5tVjT5j4E&_nc_ht=scontent-lax3-1.cdninstagram.com&oh=e8e2a8042985bf16a451e08b5b9fd55d&oe=5F11C214",
        "media_type": "IMAGE",
        "caption": "Golden hour on the lake 🌅",
        "id": "17845373252139770"
      },
      {
        "permalink": "https:\/\/www.instagram.com\/p\/B9ptWIepeNq\/",
        "media_url": "https:\/\/scontent-lax3-2.cdninstagram.com\/v\/t51.2885-15\/89383982_2046070658871847_1197119049292588338_n.jpg?_nc_cat=107&_nc_sid=8ae9d6&_nc_oc=AQm_8pRiWLLYmqdxdGYjNgDJeS9kYBbEzI_e4M-Fh-I-NT6mNBKbLRd6j4LWMrry04M&_nc_ht=scontent-lax3-2.cdninstagram.com&oh=a694a740523de42825eeee085e142ad2&oe=5F0F862E",
        "media_type": "IMAGE",
        "caption": "I was looking back at some photos from Thailand and found this gem 🌸",
        "id": "17929344625366972"
      },
      {
        "permalink": "https:\/\/www.instagram.com\/p\/B7j-ovpgT1O\/",
        "media_url": "https:\/\/scontent-lax3-1.cdninstagram.com\/v\/t51.2885-15\/83005692_104600211006158_7660822298514082393_n.jpg?_nc_cat=109&_nc_sid=8ae9d6&_nc_oc=AQkN7davxQ-Fj7QAmJfMn8ZGnlEl9hMmXJZVjYT2woNWIARwYyIhEQ_fMtmWvjN3VbE&_nc_ht=scontent-lax3-1.cdninstagram.com&oh=7bc909988561714798374470a852ea83&oe=5F0FD33A",
        "media_type": "IMAGE",
        "caption": "Intricate",
        "id": "17867769733601583"
      },
      {
        "permalink": "https:\/\/www.instagram.com\/p\/B7jIgQFgaoY\/",
        "media_url": "https:\/\/scontent-lax3-1.cdninstagram.com\/v\/t51.2885-15\/81669616_169167964494260_8900473266229018969_n.jpg?_nc_cat=110&_nc_sid=8ae9d6&_nc_oc=AQkwUQNFa3uQAL-J-YV7klIjprrYll26RsFv7EodrbB-9M-4h9v4B2HJtZXppWw5eWk&_nc_ht=scontent-lax3-1.cdninstagram.com&oh=6c7749441dfffd746519b7dbb68a7f86&oe=5F1109E5",
        "media_type": "IMAGE",
        "caption": "Saw some beautiful flowers at the Grand Palace and had to stop for a picture 🌸",
        "id": "18089821801090297"
      },
      {
        "permalink": "https:\/\/www.instagram.com\/p\/B7d2Zu4AeFG\/",
        "media_url": "https:\/\/scontent-lax3-1.cdninstagram.com\/v\/t51.2885-15\/81238152_149702989784080_5872789514447073580_n.jpg?_nc_cat=103&_nc_sid=8ae9d6&_nc_oc=AQmvk2paGym21wsmZIoCzfHIhwcNN5tTG8bV2cOcn4JIJ73HJVjWQ2mfmDCdkR9WTqA&_nc_ht=scontent-lax3-1.cdninstagram.com&oh=09e9601b5aa73cc1d9ae31ae766a4873&oe=5F10F511",
        "media_type": "CAROUSEL_ALBUM",
        "caption": "Street food in chinatown 🏮",
        "id": "17895732784441001"
      },
      {
        "permalink": "https:\/\/www.instagram.com\/p\/B7QzoebA1Xr\/",
        "media_url": "https:\/\/scontent-lax3-1.cdninstagram.com\/v\/t51.2885-15\/81969581_149890626448296_2562190554195985639_n.jpg?_nc_cat=110&_nc_sid=8ae9d6&_nc_oc=AQnbGyN5386XfRw2dvaNKR_lztOKwQTu6oxjn4hMwe5S015hsLMcvp9n5ykBRqSXrdo&_nc_ht=scontent-lax3-1.cdninstagram.com&oh=e2cd0502d58d9177dca5ce72cd905ea7&oe=5F0EBA84",
        "media_type": "IMAGE",
        "caption": "Love a good mountain view 🌄",
        "id": "18125023246049720"
      },
      {
        "permalink": "https:\/\/www.instagram.com\/p\/B7IwA7EAfzy\/",
        "media_url": "https:\/\/scontent-lax3-1.cdninstagram.com\/v\/t51.2885-15\/80852899_171734107407763_415502878564281519_n.jpg?_nc_cat=105&_nc_sid=8ae9d6&_nc_oc=AQnC_D1rU4KNdIkomTDjDjpD1cwcOh_w-Xjd_eZjXhWYVtYW1vvxxgUhLWyzY7UEwmM&_nc_ht=scontent-lax3-1.cdninstagram.com&oh=ca0796536fcf78d51ecec32b947d9f49&oe=5F0FD31D",
        "media_type": "IMAGE",
        "caption": "White Temple 🇹🇭",
        "id": "18093603865120466"
      },
      {
        "permalink": "https:\/\/www.instagram.com\/p\/B7GG6SUAvMH\/",
        "media_url": "https:\/\/scontent-lax3-1.cdninstagram.com\/v\/t51.2885-15\/82056131_3363085837066175_3807259867044502212_n.jpg?_nc_cat=100&_nc_sid=8ae9d6&_nc_oc=AQm1iGduiQWHuyfpzb8BjHz4XLCq406dHvLX1dU6qVXCocNwQEgHkBM3t3658dR0sac&_nc_ht=scontent-lax3-1.cdninstagram.com&oh=6adfcbe1d2f3a4b87007a61a4c84feb6&oe=5F117B02",
        "media_type": "CAROUSEL_ALBUM",
        "caption": "Coffee shop ☕️",
        "id": "17859219868679398"
      },
      {
        "permalink": "https:\/\/www.instagram.com\/p\/B6FePS-g2Oo\/",
        "media_url": "https:\/\/scontent-lax3-1.cdninstagram.com\/v\/t51.2885-15\/73521710_162210081805842_7434945431769625473_n.jpg?_nc_cat=101&_nc_sid=8ae9d6&_nc_oc=AQm-WhDLqUFSKOdFPy2Edlw_EQkS2vqiM5SzAbN3QQC8xtkvplfQuXjXcQ9Bkf2xpO8&_nc_ht=scontent-lax3-1.cdninstagram.com&oh=49c94a14b255f8d4190bb10845c689d0&oe=5F0F5E5C",
        "media_type": "IMAGE",
        "caption": "Sunset in Sedona 🤩",
        "id": "17849000614772946"
      },
      {
        "permalink": "https:\/\/www.instagram.com\/p\/B5yJLhWg1tt\/",
        "media_url": "https:\/\/scontent-lax3-1.cdninstagram.com\/v\/t51.2885-15\/73480727_2855179337826024_2788020277517190458_n.jpg?_nc_cat=103&_nc_sid=8ae9d6&_nc_oc=AQku-jDeX5B5xlGAAR5L1IrJmPkuvKOMWHEsRUVMh8P4_EeLOoojujXeBt9DZ-12Dkc&_nc_ht=scontent-lax3-1.cdninstagram.com&oh=6c121fddf5a131114d9edcc60bb6ddd3&oe=5F1014AC",
        "media_type": "IMAGE",
        "caption": "Congrats to my beautiful sister for finishing her last day of classes at ASU! #forksup 🔱",
        "id": "17888497141442488"
      },
      {
        "permalink": "https:\/\/www.instagram.com\/p\/B5t2ZvMAbi0\/",
        "media_url": "https:\/\/scontent-lax3-1.cdninstagram.com\/v\/t51.2885-15\/75330261_537018810362755_8831656597838869951_n.jpg?_nc_cat=101&_nc_sid=8ae9d6&_nc_oc=AQmS3JZs4NmhBxmmbkyOBxwUgJcej8IqGH3e3G2YZVFrDJk9gJNbgY3sCNa-VXFF1ak&_nc_ht=scontent-lax3-1.cdninstagram.com&oh=f81354d013299f48b05ee36d4ba0ba21&oe=5F118D5A",
        "media_type": "IMAGE",
        "caption": "Back from my photography hiatus 👋🏼",
        "id": "17922168346354768"
      },
      {
        "permalink": "https:\/\/www.instagram.com\/p\/B3TeAVwgKTC\/",
        "media_url": "https:\/\/scontent-lax3-2.cdninstagram.com\/v\/t51.2885-15\/71519278_416676215655965_6467257371103578133_n.jpg?_nc_cat=106&_nc_sid=8ae9d6&_nc_oc=AQmR48wjtPbIKIDQgsHXemJoJevGUanQ9OAbfxy8JkdA9rI09cxVOhIMcXfJ4h-FS-w&_nc_ht=scontent-lax3-2.cdninstagram.com&oh=ffd82d3e0e6bec05ee4af53490e206ff&oe=5F11B4EB",
        "media_type": "IMAGE",
        "caption": "Fall in Minnesota 🍁",
        "id": "17845558534680604"
      },
      {
        "permalink": "https:\/\/www.instagram.com\/p\/B2KpCUYAA-8\/",
        "media_url": "https:\/\/scontent-lax3-1.cdninstagram.com\/v\/t51.2885-15\/69853658_419749985563028_4920126151365064347_n.jpg?_nc_cat=101&_nc_sid=8ae9d6&_nc_oc=AQndfLe5dZw3vd2RufKkRXIq0fz80EZozPbE9uE6KC4QMkC5ZDPxZEK-oWU_QmMqqg4&_nc_ht=scontent-lax3-1.cdninstagram.com&oh=71f2caf8d217469fb28e03e83d4495d8&oe=5F127ED2",
        "media_type": "CAROUSEL_ALBUM",
        "caption": "Some pictures from this Labor Day trip to the Upper Peninsula!",
        "id": "17888707504403897"
      },
      {
        "permalink": "https:\/\/www.instagram.com\/p\/BzuXmukgXMg\/",
        "media_url": "https:\/\/scontent-lax3-2.cdninstagram.com\/v\/t51.2885-15\/66355600_111205936846228_1824245894186488920_n.jpg?_nc_cat=106&_nc_sid=8ae9d6&_nc_oc=AQkkhLQqzD9_xleH5YqtBY0fBwR0CXpCznCFG1GUZ2OvkumCr93fXzPIbie_vIK1Uq4&_nc_ht=scontent-lax3-2.cdninstagram.com&oh=66c6ad6aea437fb04604420d24d4380f&oe=5F0F9A59",
        "media_type": "IMAGE",
        "caption": "Hiked up to an elevation of 5000 ft. to see the Thornton Lakes but the fog was not our friend that day. This was more or less our view from the top of the hill, still pretty amazing, I'll take it🌲",
        "id": "17845030222514872"
      },
      {
        "permalink": "https:\/\/www.instagram.com\/p\/BysjjwTgTkk\/",
        "media_url": "https:\/\/scontent-lax3-2.cdninstagram.com\/v\/t51.2885-15\/64256735_125450048665739_4270643498381796221_n.jpg?_nc_cat=111&_nc_sid=8ae9d6&_nc_oc=AQmifG21oXx5tUVBgW2LSk9G4Ot3dOWk_CRp43n-y0SNAps0zyEBLVqEeTLZ5i7Qlxk&_nc_ht=scontent-lax3-2.cdninstagram.com&oh=2f2465f81e9ccce240a895f1253d6feb&oe=5F1076E6",
        "media_type": "IMAGE",
        "caption": "A different perspective 📱",
        "id": "18006933436221962"
      },
      {
        "permalink": "https:\/\/www.instagram.com\/p\/BymIut2AQEE\/",
        "media_url": "https:\/\/scontent-lax3-1.cdninstagram.com\/v\/t51.2885-15\/61632999_140191043756242_4863602842565022932_n.jpg?_nc_cat=104&_nc_sid=8ae9d6&_nc_oc=AQnk45TGeFPVmCjlZ8yCEGTR4SceNNY_FcN165au9SlgO0nJXcasxWHhRSONJl2UZcs&_nc_ht=scontent-lax3-1.cdninstagram.com&oh=4446723393e56acaa06fa59df50bad48&oe=5F11E9EE",
        "media_type": "IMAGE",
        "caption": "Walking towards the next adventure 🥾",
        "id": "17908510831308144"
      },
      {
        "permalink": "https:\/\/www.instagram.com\/p\/BymIUJHAbiC\/",
        "media_url": "https:\/\/scontent-lax3-1.cdninstagram.com\/v\/t51.2885-15\/62128543_133990057791971_910158929690569541_n.jpg?_nc_cat=102&_nc_sid=8ae9d6&_nc_oc=AQmOVoikd448q5GkGaxlivAJH6WWcBk-zmmrUm09ejmIkPv5E6AoaPNfb_-t78M8SA0&_nc_ht=scontent-lax3-1.cdninstagram.com&oh=06e4f671b1a263c4078ea8b92a4898a4&oe=5F107512",
        "media_type": "IMAGE",
        "caption": "A peek at the falls 🌊",
        "id": "17856752818438899"
      },
      {
        "permalink": "https:\/\/www.instagram.com\/p\/BySuP2zA7qv\/",
        "media_url": "https:\/\/scontent-lax3-1.cdninstagram.com\/v\/t51.2885-15\/60597694_142261753611215_5743193685911177312_n.jpg?_nc_cat=102&_nc_sid=8ae9d6&_nc_oc=AQkEbir-ToStHBLhWuu51C69eyM0OsYam6Qz1ShK8ys63jHtCZpHA6TxZF4axcYI54A&_nc_ht=scontent-lax3-1.cdninstagram.com&oh=0928d912e9c79099feee57dc862067ff&oe=5F107808",
        "media_type": "IMAGE",
        "caption": "Waiting for this weekend like 👀",
        "id": "17859117040422269"
      },
      {
        "permalink": "https:\/\/www.instagram.com\/p\/BxJVvVgh3mF\/",
        "media_url": "https:\/\/scontent-lax3-1.cdninstagram.com\/v\/t51.2885-15\/58453582_722112094899632_3469160655520045094_n.jpg?_nc_cat=105&_nc_sid=8ae9d6&_nc_oc=AQmE5phvK9ZvFPPkpeD-hQtNnZcfcnaL95YydkC6iT0O068acBTCcQwAkwARskI7pGQ&_nc_ht=scontent-lax3-1.cdninstagram.com&oh=101527ee2e7013712b8f935bbcf0307e&oe=5F115381",
        "media_type": "IMAGE",
        "caption": "Caught some sun peeking through the clouds on a nice morning hike 🌤",
        "id": "17857705645403255"
      },
      {
        "permalink": "https:\/\/www.instagram.com\/p\/Bv9Ii32hsBJ\/",
        "media_url": "https:\/\/scontent-lax3-1.cdninstagram.com\/v\/t51.2885-15\/54732119_794373560937045_6576122829792356839_n.jpg?_nc_cat=108&_nc_sid=8ae9d6&_nc_oc=AQl5VkEIC6zY5jq_ORlXZveGnBLLixpnOvKpZDfuN80k5ERETXMZpwmolOGAhXrfJtQ&_nc_ht=scontent-lax3-1.cdninstagram.com&oh=5cabefb01498acd2ded0bc1f1426e49f&oe=5F103C68",
        "media_type": "IMAGE",
        "caption": "Tell me something I don't know ✨",
        "id": "17872964611343991"
      },
      {
        "permalink": "https:\/\/www.instagram.com\/p\/Bvaak2XBHOz\/",
        "media_url": "https:\/\/scontent-lax3-1.cdninstagram.com\/v\/t51.2885-15\/53391365_319606088974152_6036847287146085740_n.jpg?_nc_cat=109&_nc_sid=8ae9d6&_nc_oc=AQmJIEM1CQLS8hJoi9Olf5MJfAXOTPfznxDJbaLdV-2_shn7MvvBCCwgTPRSano-Mp4&_nc_ht=scontent-lax3-1.cdninstagram.com&oh=a9e948cff8324493aba785860c4a00da&oe=5F0FBEE7",
        "media_type": "IMAGE",
        "caption": "Death Valley 📍",
        "id": "18020650585137273"
      },
      {
        "permalink": "https:\/\/www.instagram.com\/p\/BuAowPOBHqc\/",
        "media_url": "https:\/\/scontent-lax3-2.cdninstagram.com\/v\/t51.2885-15\/51300952_137862640582549_7680528748364809163_n.jpg?_nc_cat=106&_nc_sid=8ae9d6&_nc_oc=AQnHZsgKUz-TChEaFG2E-Du4sT_fJ4gL979vbytpBq8QZaMKyRBT9U0iLIHRB8QfJ3g&_nc_ht=scontent-lax3-2.cdninstagram.com&oh=19ee596aeca6c1c8cdbedc99104415cd&oe=5F0FDB05",
        "media_type": "IMAGE",
        "caption": "Me when I realize I get to escape the cold for a short weekend in the Bay next month ☀️",
        "id": "18034097920035476"
      },
      {
        "permalink": "https:\/\/www.instagram.com\/p\/BteaUvDBx7r\/",
        "media_url": "https:\/\/scontent-lax3-2.cdninstagram.com\/v\/t51.2885-15\/50499019_2087638258019608_2208982298596045108_n.jpg?_nc_cat=107&_nc_sid=8ae9d6&_nc_oc=AQkSAoIy3UV1p5F8HbSok6MXnUazLypohM-i4VHss07WJI9xxM8OTpf61YNthGu5qKE&_nc_ht=scontent-lax3-2.cdninstagram.com&oh=c76b05ffe84140ea70f75c1469eb0d66&oe=5F11876E",
        "media_type": "IMAGE",
        "caption": "A beautiful 40 degree day in the city calls for some exploration 🏙",
        "id": "17951121643243598"
      }
    ]
  }

  return {
    props: {
      posts
    },
  }
}
