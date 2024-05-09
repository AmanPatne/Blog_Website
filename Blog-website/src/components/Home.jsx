import React,{useState,useEffect} from 'react';
import { Link } from 'react-router-dom';
const HomePage = () => {

    const [blogsDisplay, setBlogsDisplay] = useState([]);
  
    useEffect(() => {
      // Fetch blogs for the logged-in user
      const fetchBlogs = async () => {
        try {
          let userEmail = localStorage.getItem("userEmail");
          let response = await fetch("http://localhost:5001/api/homeblogs", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              
                email: userEmail,
                
                })
          });
  
            const data = await response.json();
  
            setBlogsDisplay(data);
         
        } catch (error) {
          console.error('Error fetching blogs:', error);
        }
      };
  
      fetchBlogs();
    }, []);
  return (
    <div>
      <section className="hero-section">
        <div className="container mt-10 mx-auto px-4 py-12 text-center ">
          <h1 className="text-4xl font-bold text-white">Welcome to My Blog</h1>
          <p className="text-xl text-white-400 mt-4 text-bold">Perspectives, narratives, and concepts across diverse fields</p>
          <Link to="/about" className="mt-6 inline-block bg-orange-800 text-white px-6 py-2 rounded hover:bg-blue-600">
             About Us
          </Link>
        </div>
      </section>

      <section className="featured-posts">
        <div className="container mx-auto px-4 py-12">
          <h2 className="text-3xl font-bold">Latest Posts</h2>
          <div className="grid grid-cols-3 gap-4 mt-6">
            {/* Mockup for featured posts */}
            {blogsDisplay.map((blog) => (
          <div key={blog.email} className="bg-white rounded-lg shadow-md overflow-hidden">
            <img src={blog.image} alt={blog.title} className="w-full h-64 object-cover" />
            <div className="p-4">
              <h2 className="text-xl font-semibold mb-2">{blog.title}</h2>
              <p className="text-gray-700">{blog.content}</p>
            </div>
            <div className="flex justify-evenly p-4">
            
            </div>
          </div>
        ))}
          </div>
        </div>
      </section>

      <section className="latest-posts">
        <div className="container mx-auto px-4 py-12">
          <h2 className="text-3xl font-bold">Featured Posts</h2>
          <div className="grid grid-cols-2 gap-4 mt-6">
            {/* Mockup for latest posts */}
            
            <div  className="bg-white rounded-lg shadow-md overflow-hidden">
            <img src="https://blog.hubspot.com/hs-fs/hubfs/blog-examples_16.webp?width=2250&height=1068&name=blog-examples_16.webp"  className="w-full h-64 object-cover" />
            <div className="p-4">
              <h2 className="text-xl font-semibold mb-2">Algamus Gambling Recovery Blog</h2>
              <p className="text-gray-700">The Algamus Gambling Recovery Blog is for anyone who is (or knows someone who is) going through gambling addiction recovery. The blog covers all topics related to gambling addiction and gambling addiction recovery including treatment, ways to get support, and how to support a loved one going through treatment. The posts are formatted in a variety of ways such as guides to self-help, guides to support, and scientific studies. </p>
            </div>
           
          </div>
            <div  className="bg-white rounded-lg shadow-md overflow-hidden">
            <img src="https://blog.hubspot.com/hs-fs/hubfs/blog-examples_17.webp?width=2250&height=1080&name=blog-examples_17.webp"  className="w-full h-64 object-cover" />
            <div className="p-4">
              <h2 className="text-xl font-semibold mb-2">StayWell Insights Blog</h2>
              <p className="text-gray-700"> StayWell helps businesses, healthcare providers, and others discover and create health empowerment solutions. Their blog, called StayWell Insights, does this, too — their pieces provide readers with a wide range of information about health habits, insights, studies, and trends. All of their content is supported by scientific studies and news.
              </p>
            </div>
           
          </div>
           
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
