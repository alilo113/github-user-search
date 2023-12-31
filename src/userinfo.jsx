export function UserInfo({ fetchedData }) {
  if (!fetchedData || fetchedData.error) {
    return (
      <></>
    );
  }

  return (
    <div className="flex justify-center items-center">
      <div className="border p-4 rounded flex gap-x-7">
        {fetchedData.avatar_url && (
          <img
            src={fetchedData.avatar_url}
            alt="GitHub User"
            className="w-16 h-16 rounded-full mx-auto mb-2"
          />
        )}
        <div>
          <p className="text-center font-semibold">{fetchedData.login}</p>
          <p className="text-center text-sm text-gray-600">Location: {fetchedData.location}</p>
          <p className="text-center text-sm text-gray-600">Followers: {fetchedData.followers}</p>
          <p className="text-center text-sm text-gray-600">Repositories: {fetchedData.public_repos}</p>
        </div>
      </div>
    </div>
  );
}