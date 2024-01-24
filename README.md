# Kanby, a todo app

Some of the key functionality can be defined as follows:

- Next.js pages router for building the UI

- react-query for fetching and caching data

- Supabase for authentication, and storing the data

- Zustand for a simpler store

- Jest and react testing library for unit tests

- Tailwind for styling

- Radix UI for various components, such as dialogs and selects

- TypeScript, for obvious reasons :)


While Kanby is a simple app in practice, there are a few bits of code that I think are great, and worth highlighting.

1. Utilising a custom hook to control auth, and validate the user session, to protect routes
  

	    async function useAuth() {
	    
		    const router = useRouter()
		    const [userSession, setUserSession] = useState<any>(null)
		    
		    useEffect(() => {
			    supabase.auth.getSession().then(({ data: { session }}) => {
				    if (session) {
					    setUserSession(session)
				    } else {
					    router.push("/")
					}
				})
			    }, [router])
	    }


2. Utilising memoisation to speed up the UI, rather than separate network requests

  

		const { isLoading, data } = useQuery(`tasks`, api.fetchTasks)

		const task = useMemo(() => {
			return data?.data?.find(t => t.id === router.query.id)
		}, [data, router.query.id])


3. Creating an API class to centralise my network requests

		class Api {
			async fetchTasks(): Promise<IApiResponse<ITask[]>> {
				const { data, error } = await supabase.from("tasks").select("*")
				return { data, error }
			}
		}

		// usage: api.fetchTasks()
  

4. Utilising generics in my IApiResponse

		export interface IApiResponse<T> {
			data: T | null,
			error: unknown
		}

---

All in all, Kanby is a lightweight app designed to show some really core, fundamental skills I've got with React. I have projects I'm more passionate about, but the original version of Kanby was one of the first apps I built from scratch when learning to program, and so I think of it highly.

