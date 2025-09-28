import Header from "@/components/layout/Header";
import UserCard from "@/components/common/UserCard";
import { type UserProps } from "@/interfaces";

export default function Users ({users}: { users: UserProps[] }) {
    return (
        <>
            <Header title="My Next.js App" logo="🚀" />

            <div className="p-6">
                <h1 className="text-2xl font-bold mb-4">Users Page</h1>

                {users.length === 0 ? (
                    <p>No users available.</p>) : (
                        <div className="grid gap-4">
                            {users.map((user) => (
                                <UserCard
                                    key={user.name}
                                    name={user.name}
                                    email={user.email}
                                    address={user.address}                                
                                />
                            ))}
                        </div>
                    )}
            </div>
        </>
    );
}

export async function getStaticProps() {
  const res = await fetch("https://jsonplaceholder.typicode.com/users?_limit=10");
  const data = await res.json();

  const users = data.map((user: any) => ({
    name: user.name,
    email: user.email,
    address: {
      street: user.address.street,
      suite: user.address.suite,
      city: user.address.city,
      zipcode: user.address.zipcode,
    },
  }));

  return {
    props: { users },
  };
}