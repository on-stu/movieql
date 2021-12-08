# GraphQL Movie API

## Thanks to Nomad Coder

1. GraphQL로 해결 가능한 문제
    1. over-fetching : 필요하지 않은 정보들까지 요청하게 되는 경우 (ex. user get 요청)
    2. under-fetching : 하나를 완성하기 위해 필요한 정보들을 여러 route에서 요청하게 되는 경우
        
        예를 들어, instagram clone coding을 한다고 생각해 볼 때, 인스타를 시작하면 feed, notification, user와 같은 정보가 필요한데 이를 비효율적으로 3번 요청하게 된다.(REST API의 경우)
        
2. GraphQL에는 url이 없다! → end-point가 하나뿐이다.
    1. graphql에서 받는 쿼리 예시 (back-end)
        
        ```json
        query {
        	feed {
        		comments
        		likeNumber
        	}
        	notifications{
        		isRead
        	}
        	user {
        		username
        		profilePic
        	}
        }
        ```
        
    2. 그리고 javascript에서 받는 데이터는 요청한 것에 대한 object이다. (front-end)