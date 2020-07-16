import { Grid, Grow } from '@material-ui/core'
import styles from './photography.module.scss'

export default function Photography({ posts }) {
  return (
    <>
      <Grid container spacing={4} justify="center">
        {posts.data && posts.data.map((post, i) => (
          <Grid item>
            <Grow in timeout={i * 250}>
              <a href={post.permalink} target="_blank" rel="noopener noreferrer">
                <img src={post.media_url} className={styles.img}/>
              </a>
            </Grow>
          </Grid>
        ))}
      </Grid>
    </>
  )
}

export async function getStaticProps() {
  const posts = {
    "data": [
      {
        "permalink": "https:\/\/www.instagram.com\/p\/Bm1j925Hofs\/",
        "media_url": "https:\/\/scontent-lax3-1.cdninstagram.com\/v\/t51.2885-15\/39200015_265784720922832_8754696143134261248_n.jpg?_nc_cat=104&_nc_sid=8ae9d6&_nc_oc=AQk7oy3E3jild0H1GTbKnfbPivOswQvPLLYgQfprw_F1NwYg8QzrJEgR0bq2ui5BctM&_nc_ht=scontent-lax3-1.cdninstagram.com&oh=0790fa4146438522020a4cc1e1e42537&oe=5F1044D1",
        "media_type": "IMAGE",
        "caption": "Where there is love there is life ✨",
        "id": "17973364324051666"
      },
      {
        "permalink": "https:\/\/www.instagram.com\/p\/B7IwA7EAfzy\/",
        "media_url": "https:\/\/scontent-lax3-1.cdninstagram.com\/v\/t51.2885-15\/80852899_171734107407763_415502878564281519_n.jpg?_nc_cat=105&_nc_sid=8ae9d6&_nc_oc=AQnC_D1rU4KNdIkomTDjDjpD1cwcOh_w-Xjd_eZjXhWYVtYW1vvxxgUhLWyzY7UEwmM&_nc_ht=scontent-lax3-1.cdninstagram.com&oh=ca0796536fcf78d51ecec32b947d9f49&oe=5F0FD31D",
        "media_type": "IMAGE",
        "caption": "White Temple 🇹🇭",
        "id": "18093603865120466"
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
        "permalink": "https:\/\/www.instagram.com\/p\/B7GG6SUAvMH\/",
        "media_url": "https:\/\/scontent-lax3-1.cdninstagram.com\/v\/t51.2885-15\/82056131_3363085837066175_3807259867044502212_n.jpg?_nc_cat=100&_nc_sid=8ae9d6&_nc_oc=AQm1iGduiQWHuyfpzb8BjHz4XLCq406dHvLX1dU6qVXCocNwQEgHkBM3t3658dR0sac&_nc_ht=scontent-lax3-1.cdninstagram.com&oh=6adfcbe1d2f3a4b87007a61a4c84feb6&oe=5F117B02",
        "media_type": "CAROUSEL_ALBUM",
        "caption": "Coffee shop ☕️",
        "id": "17859219868679398"
      },
      {
        "permalink": "https://www.instagram.com/p/B9ptWIepeNq/",
        "media_url": "https://scontent-sjc3-1.cdninstagram.com/v/t51.2885-15/e35/s1080x1080/89383982_2046070658871847_1197119049292588338_n.jpg?_nc_ht=scontent-sjc3-1.cdninstagram.com&_nc_cat=107&_nc_ohc=usNyyU0pgu4AX-cpKFx&oh=e1ddbc98314acaec757fa257297abded&oe=5F37BFA1",
        "media_type": "IMAGE",
        "caption": "I was looking back at some photos from Thailand and found this gem 🌸",
        "id": "49393653845126472",
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
      },
      {
        "permalink": "https:\/\/www.instagram.com\/p\/BtITr1MhUTv\/",
        "media_url": "https:\/\/scontent-lax3-1.cdninstagram.com\/v\/t51.2885-15\/49858444_2575285489165322_7593031127539022676_n.jpg?_nc_cat=102&_nc_sid=8ae9d6&_nc_oc=AQnJKO2E-IrTEUV4m_gQJ07ExvKDc42TA_MDSFFNbVw2ZMbQIK4tHlNL3tJ-e3kVW-c&_nc_ht=scontent-lax3-1.cdninstagram.com&oh=d2bd55ae1be3cd854ca427b3a4a786d3&oe=5F1068C0",
        "media_type": "IMAGE",
        "caption": "🚨Warning: Glasses may fog up in the cold",
        "id": "18000233920187468"
      },
      {
        "permalink": "https:\/\/www.instagram.com\/p\/Bs3O_36hwXf\/",
        "media_url": "https:\/\/scontent-lax3-1.cdninstagram.com\/v\/t51.2885-15\/49566417_133095974386500_5228780514098620420_n.jpg?_nc_cat=100&_nc_sid=8ae9d6&_nc_oc=AQmngIbgq8q1P8hxNpdCdGQHL6fb-eq_IJuWsbIXkdUlqeIs1klOCnhQygnUg3hI1VE&_nc_ht=scontent-lax3-1.cdninstagram.com&oh=9fcc2fec66e5d1edbe687bd0b8bea806&oe=5F111C68",
        "media_type": "IMAGE",
        "caption": "Photography 101: Don't forget to take off your lens cap 📸",
        "id": "18015136564075518"
      },
      {
        "permalink": "https:\/\/www.instagram.com\/p\/BsBaTKwhFfc\/",
        "media_url": "https:\/\/scontent-lax3-2.cdninstagram.com\/v\/t51.2885-15\/47689690_371245913451278_762876568440917530_n.jpg?_nc_cat=111&_nc_sid=8ae9d6&_nc_oc=AQnnjlyVO_uQueBuCBFxJPA7SsfDDSBgpZqxCRzPseB0GjGz7oUCZ2z1blQuoxLjN6c&_nc_ht=scontent-lax3-2.cdninstagram.com&oh=e5eea06cc7787be5c5e0e006e7709135&oe=5F119799",
        "media_type": "IMAGE",
        "caption": "Not ready to leave the Bae Area again in 3 days",
        "id": "17853980974308493"
      },
      {
        "permalink": "https:\/\/www.instagram.com\/p\/Br_ySZuhGHn\/",
        "media_url": "https:\/\/scontent-lax3-1.cdninstagram.com\/v\/t51.2885-15\/47583129_235592003992592_11828322568268965_n.jpg?_nc_cat=101&_nc_sid=8ae9d6&_nc_oc=AQmPwJD252vK3wD5jxevZUjLHWU2Toaqt0PxvB_oKxRfk5MvyBTXWqSMU8sN1htA7DM&_nc_ht=scontent-lax3-1.cdninstagram.com&oh=d20692e95cc434d5082bd8165b4ba770&oe=5F1237F3",
        "media_type": "IMAGE",
        "caption": "Never stop looking up ⬆️",
        "id": "18016726261022142"
      },
      {
        "permalink": "https:\/\/www.instagram.com\/p\/Br0M52JBByE\/",
        "media_url": "https:\/\/scontent-lax3-1.cdninstagram.com\/v\/t51.2885-15\/47583385_756961454665641_2647061684958621051_n.jpg?_nc_cat=109&_nc_sid=8ae9d6&_nc_oc=AQl_s3R3WzxjfagQOmlKhy-7OVeYako-rwVPROT2lKjafzjPPFQ78To2dByjalXeHRY&_nc_ht=scontent-lax3-1.cdninstagram.com&oh=110a064fe7e376812a57519380f0334b&oe=5F11C967",
        "media_type": "IMAGE",
        "caption": "Merry Christmas y’all! Hope everyone is having a fun holiday season this year 🎄",
        "id": "18014846809029488"
      },
      {
        "permalink": "https:\/\/www.instagram.com\/p\/BrzZR50BdWa\/",
        "media_url": "https:\/\/scontent-lax3-1.cdninstagram.com\/v\/t51.2885-15\/45859080_1503177906481743_4098496932686908731_n.jpg?_nc_cat=102&_nc_sid=8ae9d6&_nc_oc=AQmxtX7zrS_0WLgyMTKcBgSeS5DcjjRy9WdjsCecwGiAZBnNh5qD7SLJxxzwGJ_lsyI&_nc_ht=scontent-lax3-1.cdninstagram.com&oh=7ffdb98acd4f26c117876e032afd07c2&oe=5F11F8C2",
        "media_type": "IMAGE",
        "caption": "Red Rock Canyon",
        "id": "17923231252248009"
      },
      {
        "permalink": "https:\/\/www.instagram.com\/p\/BrL_Frwhym8\/",
        "media_url": "https:\/\/scontent-lax3-1.cdninstagram.com\/v\/t51.2885-15\/45600259_375578696544425_5299890129854461992_n.jpg?_nc_cat=108&_nc_sid=8ae9d6&_nc_oc=AQmPzPwNiv8TMFbKey-1ExOWi0LDlTn9HDK9ZTC4ujKujHy_AjIZuKtJMBmtIPbHRnI&_nc_ht=scontent-lax3-1.cdninstagram.com&oh=c59241c34233aa1cf6ba84ce7519b245&oe=5F117CC3",
        "media_type": "CAROUSEL_ALBUM",
        "caption": "Two moods ❤️🖤",
        "id": "18004626439068080"
      },
      {
        "permalink": "https:\/\/www.instagram.com\/p\/BqlWv8Rhbdk\/",
        "media_url": "https:\/\/scontent-lax3-1.cdninstagram.com\/v\/t51.2885-15\/44910857_205671873688081_2247829165478850520_n.jpg?_nc_cat=105&_nc_sid=8ae9d6&_nc_oc=AQkPg4L2o7WCWcxA1YzGNT_4uNw3m1Y5mb72Ey-HTDUi8HUK0knC_zp4HyuqDK_tcVA&_nc_ht=scontent-lax3-1.cdninstagram.com&oh=10558b4e59ad91afdf9e54c6423d48f7&oe=5F127C02",
        "media_type": "IMAGE",
        "caption": "What’s on your mind?",
        "id": "18004212076046395"
      },
      {
        "permalink": "https:\/\/www.instagram.com\/p\/BqlIYz5Bjss\/",
        "media_url": "https:\/\/scontent-lax3-1.cdninstagram.com\/v\/t51.2885-15\/44813987_120679048940577_4139205656942592652_n.jpg?_nc_cat=108&_nc_sid=8ae9d6&_nc_oc=AQkoOpIFKCGIS9cAphXpnRmem3ZkPoeAMQ06XuCOqeigOv75dd0ZgwuQMc1Zsyzai40&_nc_ht=scontent-lax3-1.cdninstagram.com&oh=76d23e356bfa664a34982f4dd742995b&oe=5F124D45",
        "media_type": "IMAGE",
        "caption": "Honey Bear 🐻",
        "id": "17986480969121458"
      },
      {
        "permalink": "https:\/\/www.instagram.com\/p\/BqOIBZkh3Qk\/",
        "media_url": "https:\/\/scontent-lax3-1.cdninstagram.com\/v\/t51.2885-15\/44785403_2236103990007580_5805116662902176860_n.jpg?_nc_cat=108&_nc_sid=8ae9d6&_nc_oc=AQmYugk9Q5KZ8eRnR4CNI0LP0J2YqU0rOO7LfY_DZDEMfl7bnywPuubNfHcvUggSrZU&_nc_ht=scontent-lax3-1.cdninstagram.com&oh=f87959054bf4f3c20d01bdae5b21cbb6&oe=5F102F1C",
        "media_type": "IMAGE",
        "caption": "Neon lights ⚡️",
        "id": "17985399562111813"
      },
      {
        "permalink": "https:\/\/www.instagram.com\/p\/BpgWjashC_E\/",
        "media_url": "https:\/\/scontent-lax3-2.cdninstagram.com\/v\/t51.2885-15\/42800728_2211397762474529_2014384766614580229_n.jpg?_nc_cat=106&_nc_sid=8ae9d6&_nc_oc=AQltkWFoLpTjKiQAqlBvcOPtJ8KSBbb0PDqEL5X-9FqAhzVMXfJqjwuLN0WSs9eTERM&_nc_ht=scontent-lax3-2.cdninstagram.com&oh=996a4888d98c9ddf9177e26e5883d312&oe=5F11CDEF",
        "media_type": "IMAGE",
        "caption": "Black Cat | @thelynhall",
        "id": "17975639650125554"
      },
      {
        "permalink": "https:\/\/www.instagram.com\/p\/BpgUsxQBtUQ\/",
        "media_url": "https:\/\/scontent-lax3-1.cdninstagram.com\/v\/t51.2885-15\/43985719_1954796427891212_2401796744310157848_n.jpg?_nc_cat=109&_nc_sid=8ae9d6&_nc_oc=AQkcKN2Usaq7-21UnzrDWudFEU5vBlRODcyyADGo0Kc3w7RNmrZcKBwhlu0yb0NdAuk&_nc_ht=scontent-lax3-1.cdninstagram.com&oh=61e9d49d1f930539298fec4763026aa2&oe=5F12873E",
        "media_type": "IMAGE",
        "caption": "Into the light",
        "id": "17975168989120398"
      },
      {
        "permalink": "https:\/\/www.instagram.com\/p\/BospBCLBo3G\/",
        "media_url": "https:\/\/scontent-lax3-1.cdninstagram.com\/v\/t51.2885-15\/42437525_271385336821346_1673844681836393389_n.jpg?_nc_cat=109&_nc_sid=8ae9d6&_nc_oc=AQkmyZ3wSPqjczNKfgIHeNunVP4lxooGik-4xvPHK3_BFekSHm9GpdVg5MfoZ-aMEuA&_nc_ht=scontent-lax3-1.cdninstagram.com&oh=ca56ee3f2e64a0c562dfc9433667c85f&oe=5F111205",
        "media_type": "IMAGE",
        "caption": "The fall colors are here and I’m living for it 🍂 \nAlso I don’t normally post pictures of myself on this page but I enjoyed editing the pictures from this shoot so here we are 🤷🏻‍♀️ 📸: @ptipparam",
        "id": "17960736853133419"
      },
      {
        "permalink": "https:\/\/www.instagram.com\/p\/BomWFaCheuJ\/",
        "media_url": "https:\/\/scontent-lax3-1.cdninstagram.com\/v\/t51.2885-15\/41869650_331909557393949_994937592160484267_n.jpg?_nc_cat=102&_nc_sid=8ae9d6&_nc_oc=AQnGC8GXBGhDsMCV6yIA8XYIfgps2BGJ12Eslcl3ONcKNcNTyG6NJn-WOrvbv64qdfw&_nc_ht=scontent-lax3-1.cdninstagram.com&oh=a5ddce6d4926127d6976f6bd95d8ee2d&oe=5F0FFDCF",
        "media_type": "IMAGE",
        "caption": "Just plottin, hbu?",
        "id": "17986887565038195"
      },
      {
        "permalink": "https:\/\/www.instagram.com\/p\/BofoLQbhEwC\/",
        "media_url": "https:\/\/scontent-lax3-1.cdninstagram.com\/v\/t51.2885-15\/41729498_339339533469561_847538326506327627_n.jpg?_nc_cat=109&_nc_sid=8ae9d6&_nc_oc=AQk3_j2_2EENVnA0pXIJLzVtwSsm1AcG5t57f54N1eKXU2XmLD8Fq8kNKgI4Xz1GuJ4&_nc_ht=scontent-lax3-1.cdninstagram.com&oh=46df3748f2687751030fe442c66b7974&oe=5F109B93",
        "media_type": "IMAGE",
        "caption": "Warm temperatures in Minneapolis today got me missing the bay ☀️",
        "id": "17895102229255295"
      },
      {
        "permalink": "https:\/\/www.instagram.com\/p\/BoN2odEhy8-\/",
        "media_url": "https:\/\/scontent-lax3-2.cdninstagram.com\/v\/t51.2885-15\/41330971_1918296431582432_4705648002396204627_n.jpg?_nc_cat=107&_nc_sid=8ae9d6&_nc_oc=AQlCZno3tU-2udN4INz3eEltFWa4hTzgSrqZ8jre8_fXxDSPbMr7i8d_qE3Fl81LaK8&_nc_ht=scontent-lax3-2.cdninstagram.com&oh=36499ac87764af4afcb5d8409da1e27c&oe=5F113DA1",
        "media_type": "IMAGE",
        "caption": "Hello Minneapolis ⛵️",
        "id": "17953119445156199"
      },
      {
        "permalink": "https:\/\/www.instagram.com\/p\/BnNArVtHJrm\/",
        "media_url": "https:\/\/scontent-lax3-1.cdninstagram.com\/v\/t51.2885-15\/40395060_241866069849481_8921935186023677952_n.jpg?_nc_cat=100&_nc_sid=8ae9d6&_nc_oc=AQnRjXQWgZ07fjByX3DZOtBHHO6cFi7cdwGYYSAJZwSh9k_eVfYq69_N3XCyIpKL5Ks&_nc_ht=scontent-lax3-1.cdninstagram.com&oh=1ebac4527b6c82e646e7bb69c9f92178&oe=5F101F17",
        "media_type": "IMAGE",
        "caption": "New phone case from @aknacase 🌿",
        "id": "17957895709120874"
      },
      {
        "permalink": "https:\/\/www.instagram.com\/p\/Bm6ZYoxnR2c\/",
        "media_url": "https:\/\/scontent-lax3-1.cdninstagram.com\/v\/t51.2885-15\/39016302_161865668013687_2563246360677580800_n.jpg?_nc_cat=101&_nc_sid=8ae9d6&_nc_oc=AQn_tMwNxMSUwOHCDtTMM7z1whdiTF12nSjuxjhCQgcQBwDMqqx99F6kE5E_N4V4qbM&_nc_ht=scontent-lax3-1.cdninstagram.com&oh=b84edb45ad1a025151c2eb2accecc44a&oe=5F11DC59",
        "media_type": "IMAGE",
        "caption": "This is a picture of a village we passed on the boat tour along the Godavari river. It doesn’t have any roads or electricity and there are only 5 families that live here.",
        "id": "17944887754180237"
      },
      {
        "permalink": "https:\/\/www.instagram.com\/p\/Bm6Y48-nHcu\/",
        "media_url": "https:\/\/scontent-lax3-1.cdninstagram.com\/v\/t51.2885-15\/39391288_241842563197817_1919828820576174080_n.jpg?_nc_cat=110&_nc_sid=8ae9d6&_nc_oc=AQkEWgMUO_SEnIGdoAZb3zCneZ1Fsp0vK0XYkW0eMpaLHxnm2BkbWEUUHDvIJC5IOSc&_nc_ht=scontent-lax3-1.cdninstagram.com&oh=d9742b08547f4070d87b92c9d9265527&oe=5F1136DC",
        "media_type": "IMAGE",
        "caption": "It’s places like this that make you realize how beautiful nature really is 🌏",
        "id": "17883828247254561"
      },
      {
        "permalink": "https:\/\/www.instagram.com\/p\/Bm6YJhtnPe3\/",
        "media_url": "https:\/\/scontent-lax3-2.cdninstagram.com\/v\/t51.2885-15\/39101441_586566255074559_4708954645291073536_n.jpg?_nc_cat=111&_nc_sid=8ae9d6&_nc_oc=AQnHFYqwB_gx3IeUuJg7zMDdVEF4tZg5fHmudQGsz91VYCDq_yRxpbtnW7Q7hUIfClc&_nc_ht=scontent-lax3-2.cdninstagram.com&oh=cc9db70146aec7e731548150f6db38f5&oe=5F11F68F",
        "media_type": "IMAGE",
        "caption": "More views along the Godavari ⛰",
        "id": "17943785092148339"
      },
      {
        "permalink": "https:\/\/www.instagram.com\/p\/Bm39-oPH2pb\/",
        "media_url": "https:\/\/scontent-lax3-1.cdninstagram.com\/v\/t51.2885-15\/39164229_288342471760482_3869624821977448448_n.jpg?_nc_cat=110&_nc_sid=8ae9d6&_nc_oc=AQn__Jmgl5dObGbkVRCboGHU4MC7LzWHdIZYQzXmcdi5bNQZ5E0ne9pqWdHLin8qPeA&_nc_ht=scontent-lax3-1.cdninstagram.com&oh=7860cd18d50a8a247ac02f000a27fb00&oe=5F10C5DB",
        "media_type": "IMAGE",
        "caption": "One of the best experiences I’ve had in my life - a boat tour of the “Papikondalu” or the “Papi Hills”.",
        "id": "17958619792103418"
      },
      {
        "permalink": "https:\/\/www.instagram.com\/p\/Bl-iwYfHFxv\/",
        "media_url": "https:\/\/scontent-lax3-2.cdninstagram.com\/v\/t51.2885-15\/37578136_2169594606654411_99593458301272064_n.jpg?_nc_cat=107&_nc_sid=8ae9d6&_nc_oc=AQnqidN3PkELwvLge6omuDy49D86fr37GQr7jCkTC9dFRB5SgNgIjUO5pxRd2TzOokU&_nc_ht=scontent-lax3-2.cdninstagram.com&oh=f4b04c093596e99dc4e64450e49baf75&oe=5F0FC291",
        "media_type": "CAROUSEL_ALBUM",
        "caption": "Meet my niece, Khushi. Her name means happiness in Hindi and let me tell ya, she’s an absolute delight to be around 🙃",
        "id": "17874388951260357"
      },
      {
        "permalink": "https:\/\/www.instagram.com\/p\/Bl8e48NHHNp\/",
        "media_url": "https:\/\/scontent-lax3-1.cdninstagram.com\/v\/t51.2885-15\/37371049_211892416334384_3323715975936737280_n.jpg?_nc_cat=101&_nc_sid=8ae9d6&_nc_oc=AQlOAOwHhGkMwxrA6HG8WX7B1Q2bjz-oEfB_Awx-0NZlH4iRWtIyV3bEuBdSWDGQ554&_nc_ht=scontent-lax3-1.cdninstagram.com&oh=b68f7ce704fb18fa7eeec771a4859e02&oe=5F119E67",
        "media_type": "IMAGE",
        "caption": "Beep beep 🛵",
        "id": "17966230177048217"
      },
      {
        "permalink": "https:\/\/www.instagram.com\/p\/Bl5SWokHv1r\/",
        "media_url": "https:\/\/scontent-lax3-1.cdninstagram.com\/v\/t51.2885-15\/37931301_1918888871488255_3598173001855533056_n.jpg?_nc_cat=104&_nc_sid=8ae9d6&_nc_oc=AQnjBYNrHS2faHnShqVMqjMmqGAmF8U1o1ybA6wYbWn2IT1KnmbpZ49mdZ5wXYW3AcI&_nc_ht=scontent-lax3-1.cdninstagram.com&oh=bd697f426d28bfe225f3a6d77282d5d0&oe=5F101E28",
        "media_type": "CAROUSEL_ALBUM",
        "caption": "Stray doge lookin for some grub 🐕",
        "id": "17866159057267038"
      },
      {
        "permalink": "https:\/\/www.instagram.com\/p\/Bl2Lf0KHUie\/",
        "media_url": "https:\/\/scontent-lax3-2.cdninstagram.com\/v\/t51.2885-15\/37508116_666799787010780_8772449149934108672_n.jpg?_nc_cat=106&_nc_sid=8ae9d6&_nc_oc=AQlBTM5-2kODXftVXS56LWzKXRQuOXwvruzy2CnmSuRFH8UUl2_xPrc9VRgrzLIKWm0&_nc_ht=scontent-lax3-2.cdninstagram.com&oh=f8efd167c4ec1b487144ed4477ddb1af&oe=5F11AF29",
        "media_type": "IMAGE",
        "caption": "Street artists",
        "id": "17949359629114828"
      },
      {
        "permalink": "https:\/\/www.instagram.com\/p\/BlbQzjmHM0N\/",
        "media_url": "https:\/\/scontent-lax3-1.cdninstagram.com\/v\/t51.2885-15\/36950094_267869380686549_6874656075681890304_n.jpg?_nc_cat=105&_nc_sid=8ae9d6&_nc_oc=AQnxt8ulsxlyaT_JhoJvUJ9eTYRL8HWMqhGpGrRBcXeTQEr7N08S4Dgtmr64v_WGDQo&_nc_ht=scontent-lax3-1.cdninstagram.com&oh=828c0ccaf8d2c4cca6f32bf0e25462b3&oe=5F1275C3",
        "media_type": "IMAGE",
        "caption": "When you can’t catch a good sunset, create your own 🌅",
        "id": "17961434518008524"
      },
      {
        "permalink": "https:\/\/www.instagram.com\/p\/BlXB35NHdNp\/",
        "media_url": "https:\/\/scontent-lax3-1.cdninstagram.com\/v\/t51.2885-15\/36921954_485287451892170_7228231063527489536_n.jpg?_nc_cat=101&_nc_sid=8ae9d6&_nc_oc=AQmmajJ-IaAk7wqFB_22vXS7tkmLyIhQ_bco11upYwYcRFlwAWZ2mv2NhCs8sORi2zI&_nc_ht=scontent-lax3-1.cdninstagram.com&oh=af0c5c64a276a15426012dd07462a18e&oe=5F108521",
        "media_type": "IMAGE",
        "caption": "Happy place 🌊",
        "id": "17888071918225794"
      },
      {
        "permalink": "https:\/\/www.instagram.com\/p\/BlMxNWan6Nw\/",
        "media_url": "https:\/\/scontent-lax3-1.cdninstagram.com\/v\/t51.2885-15\/36486101_198357927495757_3470835261707911168_n.jpg?_nc_cat=109&_nc_sid=8ae9d6&_nc_oc=AQnzwZgqBwWWc3SW-xqAMklGk54RPhuB-DkzJockhB7zEnHPyqJXes-fbJCtI5_Zz98&_nc_ht=scontent-lax3-1.cdninstagram.com&oh=b9da1831cb13ccfb209fd105e8794c7b&oe=5F115DA3",
        "media_type": "IMAGE",
        "caption": "Summer is a state of mind",
        "id": "17960355979001016"
      },
      {
        "permalink": "https:\/\/www.instagram.com\/p\/BlEj7tLHY5p\/",
        "media_url": "https:\/\/scontent-lax3-1.cdninstagram.com\/v\/t51.2885-15\/36136251_2552003405024925_6123140999083458560_n.jpg?_nc_cat=109&_nc_sid=8ae9d6&_nc_oc=AQmqg2yuHzX-TpJ-As8sMLOH3xKNKQsfk5Erlwo-rKooPSY6SkOWypwg6bC71w1stA4&_nc_ht=scontent-lax3-1.cdninstagram.com&oh=b322f4023fd45f09351a04e39dffc6f9&oe=5F124F2E",
        "media_type": "IMAGE",
        "caption": "“The way we choose to see the world creates the world we see.” - Barry Neil Kaufman",
        "id": "17851471288276945"
      },
      {
        "permalink": "https:\/\/www.instagram.com\/p\/Bko7KhgH_Ra\/",
        "media_url": "https:\/\/scontent-lax3-2.cdninstagram.com\/v\/t51.2885-15\/36085137_393174564510831_5196796989483778048_n.jpg?_nc_cat=111&_nc_sid=8ae9d6&_nc_oc=AQnHEWki-wM9PbT6rpqWNVEc57yTQG54YOZosDMSEwipPc-wDfumUow2Ftu18r4N0lw&_nc_ht=scontent-lax3-2.cdninstagram.com&oh=d0e07c679fdabac8c9df981285ee1d21&oe=5F116368",
        "media_type": "IMAGE",
        "caption": "Got out to enjoy the summertime sunshine today 🌞",
        "id": "17932179919189858"
      },
      {
        "permalink": "https:\/\/www.instagram.com\/p\/BkQzo2XHN-D\/",
        "media_url": "https:\/\/scontent-lax3-1.cdninstagram.com\/v\/t51.2885-15\/34648728_213361109279947_8439428084565803008_n.jpg?_nc_cat=104&_nc_sid=8ae9d6&_nc_oc=AQn_yqCtIf77koxPGHXBBCv-h2hnCHwSVMgoQ2hYBR2CZeud8QlT6mwsp7IZfkOmq6g&_nc_ht=scontent-lax3-1.cdninstagram.com&oh=c61a58bc5646a271b26b4f2eaff3c241&oe=5F125EFB",
        "media_type": "IMAGE",
        "caption": "The road to success has no speed limit 🚲",
        "id": "17929921045131097"
      },
      {
        "permalink": "https:\/\/www.instagram.com\/p\/BiKZXQPnh6c\/",
        "media_url": "https:\/\/scontent-lax3-1.cdninstagram.com\/v\/t51.2885-15\/30944505_232651700815483_5953891980218990592_n.jpg?_nc_cat=103&_nc_sid=8ae9d6&_nc_oc=AQnbWDAK9p3GmZkyyv-fHEpFWqwtRRx-xhAKN0jy5z-xAKk0HP7o9cHwoXtVBy5chVk&_nc_ht=scontent-lax3-1.cdninstagram.com&oh=1c349721a524cf97e8b7b263dacb0552&oe=5F105FE3",
        "media_type": "IMAGE",
        "caption": "Can you tell I go to UT?",
        "id": "17927836453109495"
      },
      {
        "permalink": "https:\/\/www.instagram.com\/p\/BhizSJ8HuC9\/",
        "media_url": "https:\/\/scontent-lax3-1.cdninstagram.com\/v\/t51.2885-15\/30603823_995329370622176_290958384759308288_n.jpg?_nc_cat=104&_nc_sid=8ae9d6&_nc_oc=AQk_wmAMckOZ-XihkRgNSZcv4vfgWYJcDUqAQy0iCJF959KMah0TcvSOi55MhSbtA_4&_nc_ht=scontent-lax3-1.cdninstagram.com&oh=15dea6d17fb00258afe134d23b6a172f&oe=5F1291A1",
        "media_type": "CAROUSEL_ALBUM",
        "caption": "Making west campus look good 🙌🏼",
        "id": "17937783223002207"
      },
      ]
  }

  return {
    props: {
      posts
    },
  }
}
