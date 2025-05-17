# PowerShell script to clean up unnecessary files and folders

# List of directories to keep
$keepDirs = @(
    "node_modules",
    "public",
    "src"
)

# List of files to keep
$keepFiles = @(
    "package.json",
    "package-lock.json",
    "index.html",
    "README.md",
    ".gitignore",
    "cleanup.ps1"
)

# Get all items in the current directory
$allItems = Get-ChildItem -Path . -Force

# Remove directories that are not in the keep list
foreach ($item in $allItems) {
    if ($item.PSIsContainer) {
        # It's a directory
        if (-not ($keepDirs -contains $item.Name)) {
            Write-Host "Removing directory: $($item.Name)"
            Remove-Item -Path $item.FullName -Recurse -Force -ErrorAction SilentlyContinue
        }
    } else {
        # It's a file
        if (-not ($keepFiles -contains $item.Name)) {
            Write-Host "Removing file: $($item.Name)"
            Remove-Item -Path $item.FullName -Force -ErrorAction SilentlyContinue
        }
    }
}

Write-Host "Cleanup completed!"
