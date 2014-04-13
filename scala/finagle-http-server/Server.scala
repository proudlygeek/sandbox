import com.twitter.finagle.{Http, Service}
import com.twitter.util.{Await, Future}
import java.net.InetSocketAddress
import org.jboss.netty.handler.codec.http._

val service = new Service[HttpRequest, HttpResponse] {
	def apply(req: HttpRequest): Future[HttpResponse] = 
		Future.value(new DefaultHttpResponse(
			req.getProtocolVersion, HttpResponseStatus.OK))
}